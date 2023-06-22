import { MdOutlineDownloadForOffline, MdCancel } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { DEFAULT_DOCUMENT_LIST } from "../../constants";

export default function CompanyDetails({ setCompanyDetails, companyDetails }) {
  const [documentOptions, setDocumentOptions] = useState(DEFAULT_DOCUMENT_LIST);
  const docRef = useRef([]);
  const [selectVal, setSelectVal] = useState("");
  const { getIdentifier } = useContext(AuthContext);

  // extract file upload component

  useEffect(() => {
    setDocumentOptions([
      ...documentOptions.filter(
        (option) =>
          !companyDetails.documents.map((doc) => doc.name).includes(option)
      ),
    ]);
  }, [companyDetails.documents]);

  return (
    <>
      <div className="admin-container">
        <div className="dashboard-color">
          <div className="flex-item-left">Company Details</div>
        </div>
      </div>

      <div className="admin-container">
        <div className="admin-details">
          <div className="admin-input-row">
            <label className="admin1-text">Company Name</label>
            <input
              className="admin-text"
              value={companyDetails.name}
              onChange={(e) => {
                setCompanyDetails((companyDetails) => ({
                  ...companyDetails,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="admin-input-row">
            <label className="admin1-text">Address</label>
            <textarea
              className="admin-address"
              value={companyDetails.address}
              onChange={(e) => {
                setCompanyDetails((companyDetails) => ({
                  ...companyDetails,
                  address: e.target.value,
                }));
              }}
            ></textarea>
          </div>
          <div className="admin-input-row">
            <label className="admin1-text">Phone Number</label>
            <input
              className="admin-text"
              disabled={!companyDetails.mobilenumber.canEdit}
              value={companyDetails.mobilenumber.value}
              onChange={(e) => {
                setCompanyDetails((companyDetails) => ({
                  ...companyDetails,
                  mobilenumber: {
                    value: e.target.value,
                    canEdit: companyDetails.mobilenumber.canEdit,
                  },
                }));
              }}
            ></input>
          </div>
          <div className="admin-input-row">
            <label className="admin1-text">Email ID</label>
            <input
              className="admin-text"
              disabled={!companyDetails.email.canEdit}
              value={companyDetails.email.value}
              onChange={(e) => {
                setCompanyDetails((companyDetails) => ({
                  ...companyDetails,
                  email: {
                    value: e.target.value,
                    canEdit: companyDetails.email.canEdit,
                  },
                }));
              }}
            ></input>
          </div>
        </div>

        <div className="admin-documents">
          {companyDetails.documents.length ? (
            companyDetails.documents.map((document, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ minWidth: "90px" }}>
                    <label
                      className="admin1-text"
                      style={{ marginRight: "10px" }}
                    >
                      {document.name}
                    </label>
                  </div>
                  {document.fileDownloadUrl ? (
                    <i className="upload-icon">
                      <a
                        href={document.fileDownloadUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MdOutlineDownloadForOffline
                          style={{ fontSize: "40px" }}
                        />
                      </a>
                    </i>
                  ) : (
                    <div>
                      <input
                        style={{ marginLeft: "10px" }}
                        ref={(el) => {
                          docRef.current[index] = el;
                        }}
                        onChange={() => {
                          const file_ = docRef.current[index].files[0];
                          const newName = `${companyDetails.documents[
                            index
                          ].name
                            .replace(/\s+/g, "_")
                            .toLowerCase()}_${
                            getIdentifier() + "." + file_.name.split(".")[1]
                          }`;
                          setCompanyDetails((companyDetails) => {
                            companyDetails.documents[index] = {
                              ...companyDetails.documents[index],
                              file: new File([file_], newName, {
                                type: file_.type,
                              }),
                            };
                            return {
                              ...companyDetails,
                              documents: companyDetails.documents,
                            };
                          });
                        }}
                        type="file"
                      />
                      <MdCancel
                        className="hover_click"
                        onClick={() => {
                          const [deleteDoc] = companyDetails.documents.splice(
                            index,
                            1
                          );
                          setCompanyDetails({
                            ...companyDetails,
                            documents: companyDetails.documents,
                          });
                          setDocumentOptions([
                            ...documentOptions.concat([deleteDoc.name]),
                          ]);
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <></>
          )}
          {documentOptions.length ? (
            <div className="admin-input-row">
              <div>
                <label className="admin1-text">Add Documents +</label>
              </div>
              <div style={{ width: "50%" }}>
                <select
                  className="admin-select"
                  value={selectVal}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      console.log(e.target.value);
                      companyDetails.documents.push({
                        name: e.target.value,
                        file: null,
                      });
                      setCompanyDetails((companyDetails) => ({
                        ...companyDetails,
                        documents: [...companyDetails.documents],
                      }));
                      setSelectVal("");
                    }
                  }}
                >
                  <option></option>
                  {documentOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="admin-input-row" style={{ width: "fit-content" }}>
              <label className="admin1-text">DIN Number</label>
              <input
                className="admin-number"
                value={companyDetails.dinNumber}
                onChange={(e) => {
                  setCompanyDetails((companyDetails) => ({
                    ...companyDetails,
                    dinNumber: e.target.value,
                  }));
                }}
              ></input>
            </div>
            <div className="admin-input-row">
              <label className="admin1-text">CIN Number</label>
              <input
                className="admin-number"
                value={companyDetails.cinNumber}
                onChange={(e) => {
                  setCompanyDetails((companyDetails) => ({
                    ...companyDetails,
                    cinNumber: e.target.value,
                  }));
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-container">
        <div className="admin1-text">Summary</div>
        <textarea
          value={companyDetails.summary}
          onChange={(e) => {
            setCompanyDetails((companyDetails) => ({
              ...companyDetails,
              summary: e.target.value,
            }));
          }}
          className="summary-right"
        />
      </div>
    </>
  );
}
