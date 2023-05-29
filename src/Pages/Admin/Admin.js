import "./Admin.css";
import { useContext, useEffect, useState } from "react";
import FileUpload from "../../Components/FileUpload";
import { addDoc, collection, query } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { storage, firestore } from "../../firebase";
import * as EmailValidator from "email-validator";
import { AuthContext } from "../../Context/AuthContext";
import shortid from "shortid";

const COLLECTION_NAME = "user_data";

const validateEmail = (email) => {
  if (EmailValidator.validate(email)) {
    return email.split("@")[1] === "gmail.com";
    // Check if user exists
  } else {
    return false;
  }
};

export default function Admin() {
  const { auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState([]);
  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {});

  if (!auth)
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
      files.forEach((file) => {
        const reference = ref(
          storage,
          `${file.name.split(".")[0] + shortid.generate()}.${
            file.name.split(".")[1]
          }`
        );
        const metadata = { contentType: file.type };
        const uploadTask = uploadBytesResumable(reference, file, metadata);
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
              case "default":
                break;
            }
          },
          (error) => console.error(error),

          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              addDoc(collection(firestore, COLLECTION_NAME), {
                email,
                fileDownloadUrl: downloadURL,
              })
                .then((docRef) => console.log(docRef))
                .catch((error) => console.error(error));
            });
          }
        );
      });

      setFiles([]);
    } else {
      if (!email.length) {
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
      <h1>Admin Page</h1>
      <p>User Email</p>
      <input
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
      />
      <h2>User Docs List</h2>
    </div>
  );
}
