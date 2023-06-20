import { useMemo, useRef, useState } from "react";
import { MdOutlineDownloadForOffline, MdCancel } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import _ from "lodash";

const DOCUMENT_LIST = ["GST Number", "PAN Number"];

export default function Director({
  initialData,
  setFinalData,
  deleteDirector,
  number,
}) {
  const [newDocumentOptions, setNewDocumentOptions] = useState(DOCUMENT_LIST);
  const [data, setData] = useState(initialData);
  const [selectValue, setSelectValue] = useState("");
  const docRef = useRef([]);
  useMemo(() => {
    setNewDocumentOptions([
      ...newDocumentOptions.filter((option) => {
        return !data.documents.map((doc) => doc.name).includes(option);
      }),
    ]);
  }, [data.documents]);
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
              <div style={{ marginTop: "10px" }}>
                <div style={{ display: "flex" }}>
                  <label>{document.name}</label>
                  <MdCancel
                    className="hover_click"
                    style={{ marginLeft: "55%" }}
                    onClick={() => {
                      const [deleteDoc] = data.documents.splice(index, 1);
                      setData({
                        ...data,
                        documents: data.documents,
                      });
                      setNewDocumentOptions([
                        ...newDocumentOptions.concat([deleteDoc.name]),
                      ]);
                    }}
                  />
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
                  <div style={{ marginTop: "10px" }}>
                    <input
                      style={{ marginLeft: "10px" }}
                      ref={(el) => (docRef.current[index] = el)}
                      onChange={() => {
                        data.documents[index] = {
                          ...data.documents[index],
                          file: docRef.current[index].files[0],
                        };
                        setData({ ...data, documents: [...data.documents] });
                      }}
                      type="file"
                    />
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
                value={selectValue}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    data.documents.push({ name: e.target.value, file: null });
                    setData({ ...data, documents: [...data.documents] });
                    setSelectValue("");
                  }
                }}
              >
                <option></option>
                {newDocumentOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </>
          ) : (
            <></>
          )}
        </div>
        {!_.isEqual(data, initialData) ? (
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <button
              className="director_submit"
              onClick={() => {
                setFinalData({ ...data });
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
