import "./Dashboard.css";

import { useContext, useEffect, useState } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";

import { AuthContext } from "../../Context/AuthContext";
import { firestore } from "../../firebase";
import { USER_DATA_COLL_NAME } from "../../constants";

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  const { documents, setDocuments } = useState([]);

  useEffect(() => {
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
  }, []);

  if (!auth) {
    return (
      <div className="dashboard_container">
        <h1>Dashboard</h1>
        <h1>Please Login To View this page.</h1>
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
              <tr>
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
