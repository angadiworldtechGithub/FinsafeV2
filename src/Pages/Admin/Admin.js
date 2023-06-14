import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { useContext, useEffect, useState, useMemo } from "react";
import * as EmailValidator from "email-validator";
import shortid from "shortid";
import { AiOutlineLoading } from "react-icons/ai";
import "./Admin.css";
import FileUpload from "../../Components/FileUpload";
import { storage } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { USER_DATA_COLL_NAME, ADMIN_EMAILS } from "../../constants";
import { addData } from "../../API/createDoc";
import { getAllDocs } from "../../API/readDoc";

export const validateEmail = (email) => {
  return EmailValidator.validate(email);
};

export default function Admin() {
  const { auth } = useContext(AuthContext);
  const [isUploading, setIsUploading] = useState(false);
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState([]);
  const [userFiles, setUserFiles] = useState([]);

  const resetPage = () => {
    setFiles([]);
    setIsUploading(false);
    setEmail("");
  };

  useEffect(() => {
    (async () => {
      setUserFiles([...(await getAllDocs(USER_DATA_COLL_NAME))]);
    })();
  }, []);

  const process = useMemo(() => {
    return userFiles.reduce((o, file) => {
      if (o[file.email]) {
        o[file.email].push(file);
      } else {
        o[file.email] = [file];
      }
      return o;
    }, {});
  }, [userFiles]);

  const downloadAllFiles = (email) => () => {
    process[email].map((userFile) => window.open(userFile.fileDownloadUrl));
  };

  if (!auth || (auth && !ADMIN_EMAILS.includes(auth.email)))
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Admin Page</h1>
        <p>Please Sign In With an admin account</p>
      </div>
    );

  const onDrop = (innerFiles, event) => {
    setFiles([...innerFiles]);
  };

  const onUpload = () => {
    if (validateEmail(email)) {
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
              getDownloadURL(uploadTask.snapshot.ref).then(
                async (downloadURL) => {
                  alert("Upload Complete");
                  resetPage();
                  await addData(USER_DATA_COLL_NAME, {
                    email,
                    fileDownloadUrl: downloadURL,
                    fileName: file.name,
                  });
                }
              );
            }
          );
        });
      } else {
        alert("No files added");
      }
    } else {
      if (email.length) {
        console.info("Invalid Email");
        alert("Invalid Email");
      } else {
        console.info("No User Email");
        alert("No User Email");
      }
    }
  };

  const filePreviews = files.map((file) => ({
    name: file.name,
    size: file.size,
  }));

  return (
    <div className="admin_container">
      <div className="admin_text">
        <h1 style={{ color: "#072f5f" }}>Admin Page</h1>
        <p>
          <b>Enter User Email</b>
        </p>
        <input
          style={{ background: "#e6e6e6" }}
          className="auto_align admin_input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>

        <FileUpload
          className="auto_align"
          onDrop={onDrop}
          onUpload={onUpload}
          filePreviews={filePreviews}
          loading={isUploading}
        />
      </div>
      <h2>User Docs List</h2>
      <table className="auto_align">
        <thead>
          <tr>
            <th>User Email</th>
            <th>File Name</th>
            <th>Download Url</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(process).length ? (
            Object.keys(process).map((email) => {
              return process[email].map((userFile, index) => {
                return (
                  <tr key={shortid.generate()}>
                    <td
                      onClick={index === 1 ? downloadAllFiles(email) : () => {}}
                      className={index === 1 ? "download_all" : ""}
                    >
                      {index === 0
                        ? userFile.email
                        : index === 1
                        ? "Download all files"
                        : ""}
                    </td>
                    <td>{userFile.fileName}</td>
                    <td>
                      <a
                        href={userFile.fileDownloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        download
                      >
                        Click To Download
                      </a>
                    </td>
                  </tr>
                );
              });
            })
          ) : (
            <AiOutlineLoading className="loading" />
          )}
        </tbody>
      </table>
    </div>
  );
}
