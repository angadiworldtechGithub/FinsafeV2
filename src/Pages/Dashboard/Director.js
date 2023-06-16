import { useState } from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const DOCUMENT_LIST = ["GST Number", "PAN Number"];

export default function Director({ data, setData, deleteDirector }) {
  const isNew = Boolean(data);
  const [documents, setDocuments] = useState([]);
  const [newDocumentOptions, setNewDocumentOptions] = useState(DOCUMENT_LIST);
  return (
    <>
      <div className="director-box">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Director #{data.number}</h2>
          <ImCancelCircle
            className="director_cancel"
            onClick={deleteDirector()}
          />
        </div>
        <div className="director-box-inner">
          <div>
            <div>
              <label>Name</label>
            </div>
            <input
              value={data.name}
              onChange={(e) => {
                setData((data) => ({ ...data, name: e.target.value }));
              }}
              className="admin-text4"
            ></input>
          </div>
          <div>
            <div>
              <label>Address</label>
            </div>
            <textarea
              value={data.address}
              onChange={(e) => {
                setData((data) => ({ ...data, name: e.target.value }));
              }}
              className="admin-address4"
            ></textarea>
          </div>
          <div>
            <div>
              <label>Phone Number</label>
            </div>
            <input
              value={data.mobilenumber}
              onChange={(e) => {
                setData((data) => ({ ...data, mobilenumber: e.target.value }));
              }}
              className="admin-text4"
            ></input>
          </div>
          <div>
            <div>
              <label>Email ID</label>
            </div>
            <input
              onChange={(e) => {
                setData((data) => ({ ...data, email: e.target.value }));
              }}
              value={data.email}
              className="admin-text4"
            ></input>
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
    </>
  );
}
