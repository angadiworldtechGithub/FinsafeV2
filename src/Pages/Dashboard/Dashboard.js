import "./Dashboard.css";

import { useContext, useEffect, useState } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import shortid from "shortid";

import { AuthContext } from "../../Context/AuthContext";
import { firestore } from "../../firebase";
import { USER_DATA_COLL_NAME, ADMIN_EMAILS } from "../../constants";

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  const [documents, setDocuments] = useState([]);

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
        <h1>Please Login with a non admin account to View this page.</h1>
      </div>
    );
  }

  return (
    <div className="dashboard_container">
      <h1>Dashboard</h1>
      <h1>{auth.email}</h1>
      <h2>Documents Uploaded</h2>
      <table className="auto_align">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Download Url</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => {
            return (
              <tr key={shortid.generate()}>
                <td>{document.fileName}</td>
                <td>
                  <a
                    href={document.fileDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click To Download
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
