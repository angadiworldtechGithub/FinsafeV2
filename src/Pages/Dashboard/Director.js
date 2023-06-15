import { useState } from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const DOCUMENT_LIST = ["GST Number", "PAN Number"];

export default function Director({ number, data }) {
  const isNew = Boolean(data);
  const [documents, setDocuments] = useState([]);
  const [newDocumentOptions, setNewDocumentOptions] = useState(DOCUMENT_LIST);
  return (
    <div className="director-box">
      <h2>Director #{number}</h2>
      <div className="director-box-inner">
        <div>
          <div>
            <label>Name</label>
          </div>
          <input className="admin-text4"></input>
        </div>
        <div>
          <div>
            <label>Address</label>
          </div>
          <textarea className="admin-address4"></textarea>
        </div>
        <div>
          <div>
            <label>Phone Number</label>
          </div>
          <input className="admin-text4"></input>
        </div>
        <div>
          <div>
            <label>Email ID</label>
          </div>
          <input className="admin-text4"></input>
        </div>
        {documents.map((document) => {
          return (
            <div className="director-upload">
              <div>
                <label>{document.name}</label>
                <input className="admin-text4" type="text" />
              </div>
              {document.fileDownloadUrl ? (
                <i className="download-icon">
                  <a
                    href={document.fileDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdOutlineDownloadForOffline />
                  </a>
                </i>
              ) : (
                <>
                  <div>
                    <input style={{ marginLeft: "10px" }} type="file" />
                  </div>
                  <div>
                    <button style={{ marginLeft: "10px", float: "right" }}>
                      Upload
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
        {newDocumentOptions.length ? (
          <>
            <div>
              <label>Upload Documents + </label>
            </div>
            <select
              className="admin-select"
              onChange={(e) => {
                if (e.target.value !== "") {
                  console.log(e.target.value);
                  setNewDocumentOptions([
                    ...newDocumentOptions.filter((option) => {
                      return (
                        !documents.map((doc) => doc.name).includes(option) &&
                        option !== e.target.value
                      );
                    }),
                  ]);
                  documents.push({ name: e.target.value });
                  setDocuments([...documents]);
                }
              }}
            >
              <option></option>
              {newDocumentOptions.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
