import { MdOutlineDownloadForOffline } from "react-icons/md";
import { useRef, useState } from "react";

const DEFAULT_DOCUMENT_LIST = ["GST Number", "PAN Number", "Company Inc. Cert"];

export default function CompanyDetails({ setCompanyDetails, companyDetails }) {
  const [documentOptions, setDocumentOptions] = useState(DEFAULT_DOCUMENT_LIST);
  const docRef = useRef([]);

  return (
    <>
      <div className="admin-container">
        <div className="flex-item-left">Company Details</div>
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
                  {document.downloadFileUrl ? (
                    <i className="upload-icon">
                      <a
                        href={document.downloadFileUrl}
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
                        ref={(el) => {
                          docRef.current[index] = el;
                        }}
                        onChange={() => {
                          setCompanyDetails((companyDetails) => {
                            companyDetails.documents[index] = {
                              ...companyDetails.documents[index],
                              file: docRef.current[index].files[0],
                            };
                            return {
                              ...companyDetails,
                              documents: companyDetails.documents,
                            };
                          });
                        }}
                        type="file"
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
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      console.log(e.target.value);
                      setDocumentOptions([
                        ...documentOptions.filter((option) => {
                          return (
                            !companyDetails.documents
                              .map((doc) => doc.name)
                              .includes(option) && option !== e.target.value
                          );
                        }),
                      ]);
                      companyDetails.documents.push({
                        name: e.target.value,
                        file: null,
                      });
                      setCompanyDetails((companyDetails) => ({
                        ...companyDetails,
                        documents: [...companyDetails.documents],
                      }));
                    }
                  }}
                >
                  <option selected></option>
                  {documentOptions.map((option) => (
                    <option>{option}</option>
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
            <div style={{ width: "fit-content" }}>
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
            <div>
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
