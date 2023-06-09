import "./Dashboard.css";
import { AiOutlineLoading } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { collection, query, getDocs, where, addDoc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import shortid from "shortid";
import { storage, firestore } from "../../firebase";
import FileUpload from "../../Components/FileUpload";
import { AuthContext } from "../../Context/AuthContext";
import { USER_DATA_COLL_NAME, ADMIN_EMAILS } from "../../constants";

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  const [isUploading, setIsUploading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [files, setFiles] = useState([]);

  const resetPage = () => {
    setFiles([]);
    setIsUploading(false);
  };

  useEffect(() => {
    if (auth) {
      getDocs(
        query(
          collection(firestore, USER_DATA_COLL_NAME),
          where("email", "==", auth.email)
        )
      ).then((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data() });
        });
        setDocuments(docs);
      });
    }
  }, [auth]);

  if (!auth || (auth && ADMIN_EMAILS.includes(auth.email))) {
    return (
      <div className="dashboard_container">
        <h1>Dashboard</h1>
        <h1>Please login with a non admin account to view this page.</h1>
      </div>
    );
  }

  const onDrop = (innerFiles, event) => {
    setFiles([...innerFiles]);
  };

  const onUpload = () => {
    if (files.length) {
      setIsUploading(true);
      files.forEach((file) => {
        const reference = ref(
          storage,
          `${file.name.split(".")[0]}_${shortid.generate()}.${
            file.name.split(".")[1]
          }`
        );
        const metadata = { contentType: file.type };
        const uploadTask = uploadBytesResumable(reference, file, metadata);
        // promisify this and wait for all the tasks to be uploaded.
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
          (error) => console.error(error),

          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              alert("Upload Complete");
              resetPage();
              addDoc(collection(firestore, USER_DATA_COLL_NAME), {
                email: auth.email,
                fileDownloadUrl: downloadURL,
                fileName: file.name,
              })
                .then((docRef) => console.log(docRef))
                .catch((error) => console.error(error));
            });
          }
        );
      });
    } else {
      alert("No files added");
    }
  };

  const filePreviews = files.map((file) => ({
    name: file.name,
    size: file.size,
  }));

  const downloadAllFiles = () => {
    documents.map((userFile) => window.open(userFile.fileDownloadUrl));
  };

  return (
    <div className="dashboard_container">
      <h1>Dashboard</h1>
      <h1>{auth.email}</h1>
      <FileUpload
        className="auto_align"
        onDrop={onDrop}
        onUpload={onUpload}
        filePreviews={filePreviews}
        loading={isUploading}
      />
      <h2>Documents Uploaded</h2>
      <h4 class="download_all" onClick={downloadAllFiles}>
        Download All Documents
      </h4>
      <table className="auto_align">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Download Url</th>
          </tr>
        </thead>
        <tbody style={{ position: "relative", minHeight: "100px" }}>
          {documents.length ? (
            documents.map((document) => {
              return (
                <tr key={shortid.generate()}>
                  <td>{document.fileName}</td>
                  <td>
                    <a
                      href={document.fileDownloadUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      Click To Download
                    </a>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <AiOutlineLoading className="loading table_loading" />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
