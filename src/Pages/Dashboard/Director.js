import { useEffect, useRef, useState } from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const DOCUMENT_LIST = ["GST Number", "PAN Number"];

export default function Director({
  initialData,
  setFinalData,
  deleteDirector,
  onSave,
  setDirectorSave,
  number,
}) {
  const [newDocumentOptions, setNewDocumentOptions] = useState(DOCUMENT_LIST);
  const [data, setData] = useState(initialData);
  const docRef = useRef([]);
  useEffect(() => {
    if (onSave === "medium") {
      setFinalData({ ...data });
      setImmediate(() => setDirectorSave("high"));
    }
  }, [data, onSave, setDirectorSave, setFinalData]);
  return (
    <>
      <div className="director-box">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Director #{number}</h2>
          <ImCancelCircle
            className="director_cancel"
            onClick={deleteDirector}
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
                setData({ ...data, name: e.target.value });
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
                setData({ ...data, address: e.target.value });
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
                setData({ ...data, mobilenumber: e.target.value });
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
                setData({ ...data, email: e.target.value });
              }}
              value={data.email}
              className="admin-text4"
            ></input>
          </div>
          {data.documents.map((document, index) => {
            return (
              <div>
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
                  <div>
                    <input
                      style={{ marginLeft: "10px" }}
                      ref={(el) => (docRef.current[index] = el)}
                      onChange={() => {
                        data.documents[index] = {
                          ...data.documents[index],
                          file: docRef.current.files[0],
                        };
                        setData({ ...data, documents: [...data.documents] });
                      }}
                      type="file"
                    />
                    <button style={{ marginRight: "17%", float: "right" }}>
                      Upload
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          {newDocumentOptions.length ? (
            <>
              <div className="director-upload">
                <label>Upload Documents + </label>
              </div>
              <select
                className="admin-select"
                defaultChecked=""
                onChange={(e) => {
                  if (e.target.value !== "") {
                    console.log(e.target.value);
                    setNewDocumentOptions([
                      ...newDocumentOptions.filter((option) => {
                        return (
                          !data.documents
                            .map((doc) => doc.name)
                            .includes(option) && option !== e.target.value
                        );
                      }),
                    ]);
                    data.documents.push({ name: e.target.value, file: null });
                    setData({ ...data, documents: [...data.documents] });
                  }
                }}
              >
                <option selected></option>
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
