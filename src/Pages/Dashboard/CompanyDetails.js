import { MdOutlineDownloadForOffline } from "react-icons/md";
import { useState } from "react";

const DEFAULT_DOCUMENT_LIST = [
  "GST Number",
  "PAN Number",
  "Company InCorporation Certificate",
];

export default function CompanyDetails({ setCompanyDetails, companyDetails }) {
  const [documentOptions, setDocumentOptions] = useState(DEFAULT_DOCUMENT_LIST);

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
            <input className="admin-text"></input>
          </div>
        </div>

        <div className="admin-documents">
          {companyDetails.documents.length ? (
            companyDetails.documents.map((document) => {
              return (
                <div>
                  <label className="admin1-text">{document.name}</label>
                  <i className="upload-icon">
                    <MdOutlineDownloadForOffline />
                  </i>
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
                    <>
                      <div>
                        <input style={{ marginLeft: "10px" }} type="file" />
                      </div>
                      <div>
                        <button className="button-upload">Upload</button>
                      </div>
                    </>
                  )}
                </div>
              );
            })
          ) : (
            <></>
          )}
          <div className="admin-input-row">
            <label className="admin1-text">Add Documents +</label>
            <select className="admin-select">
              <option></option>
              {documentOptions.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </div>
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
              <input className="admin-number"></input>
            </div>
            <div>
              <label className="admin1-text">CIN Number</label>
              <input className="admin-number"></input>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-container">
        <div className="summary-left">Summary</div>
        <textarea className="summary-right" />
      </div>
    </>
  );
}
