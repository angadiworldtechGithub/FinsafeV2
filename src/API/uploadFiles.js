import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export const uploadDocuments = async (
  files,
  processDownloadUrls = (url) => url,
  successCallback = async () => {}
) => {
  const downloadUrls = await Promise.all(
    files.map((file) => {
      const reference = ref(storage, file.name);
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
  await successCallback();
  return downloadUrls.map(processDownloadUrls);
};
