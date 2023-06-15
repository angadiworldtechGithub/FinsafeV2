import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import shortid from "shortid";

export const uploadDocuments = async (
  files,
  successCallback,
  processDownloadUrls
) => {
  const downloadUrls = await Promise.all(
    files.map((file) => {
      const reference = ref(
        storage,
        `${file.name.split(".")[0]}_${shortid.generate()}.${
          file.name.split(".")[1]
        }`
      );
      const metadata = { contentType: file.type };
      const uploadTask = uploadBytesResumable(reference, file, metadata);
      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.error(error);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    })
  );
  await processDownloadUrls(downloadUrls);
  await successCallback();
};
