import { MdOutlineDownloadForOffline } from "react-icons/md";
import { useRef, useState } from "react";

const DEFAULT_DOCUMENT_LIST = [
  "GST Number",
  "PAN Number",
  "Company InCorporation Certificate",
];

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
            ></input>
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
              value={companyDetails.mobilenumber}
              onChange={(e) => {
                setCompanyDetails((companyDetails) => ({
                  ...companyDetails,
                  mobilenumber: e.target.value,
                }));
              }}
            ></input>
          </div>
          <div className="admin-input-row">
            <label className="admin1-text">Email ID</label>
            <input
              className="admin-text"
              value={companyDetails.email}
              onChange={(e) => {
                setCompanyDetails((companyDetails) => ({
                  ...companyDetails,
                  email: e.target.value,
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
                  <label className="admin1-text">{document.name}</label>
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
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          style={{ marginLeft: "10px" }}
                          ref={(el) => (docRef.current[index] = el)}
                          type="file"
                        />
                      </div>
                      <div>
                        <button className="button-upload">Upload</button>
                      </div>
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
              <label className="admin1-text">Add Documents +</label>
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
                    companyDetails.documents.push({ name: e.target.value });
                    setCompanyDetails((companyDetails) => ({
                      ...companyDetails,
                      documents: [...companyDetails.documents],
                    }));
                  }
                }}
              >
                <option></option>
                {documentOptions.map((option) => (
                  <option>{option}</option>
                ))}
              </select>
            </div>
          ) : (
            <></>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "10px",
              paddingRight: "100px",
            }}
          >
            <div>
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
