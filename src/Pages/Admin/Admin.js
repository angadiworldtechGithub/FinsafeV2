import "./Admin.css";
import { MdDownloadForOffline } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useContext, useState } from "react";
import { getAllDocs } from "../../API/readDoc";
import { COMPANY_COLL_NAME } from "../../constants";
import { AuthContext } from "../../Context/AuthContext";
import { ADMIN_EMAILS } from "../../constants";
import { showLoading } from "react-global-loading";

export default function Admin() {
  const [companies, setCompanies] = useState([]);
  const [activeCompany, setActiveCompany] = useState(0);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      showLoading(true);
      const companies = await getAllDocs(COMPANY_COLL_NAME);
      setCompanies(companies);
      showLoading(false);
    })();
  }, []);

  if (!auth || (auth && !ADMIN_EMAILS.includes(auth.email))) {
    return (
      <div className="dashboard_container">
        <h1>Admin</h1>
        <h1>Please login with a admin account to view this page.</h1>
      </div>
    );
  }

  return (
    <div>
      <p className="title-text">Super Admin Panel</p>
      <div className="company-container">
        <div className="company-left">
          <div
            className="company-header"
            style={{ alignItems: "center", display: "flex" }}
          >
            List of Companies
            <FaChevronRight />
          </div>
          {companies.map((company, index) => (
            <div
              className="company-item hover_click"
              onClick={() => {
                setActiveCompany(index);
              }}
            >
              {`${index + 1}. Company ${company?.name ?? "No Name"}`}
            </div>
          ))}
        </div>

        <div className="company-right">
          <div className="company">
            <div className="company-header">Company 1</div>
            <MdDownloadForOffline className="companyprofile-download" />
          </div>

          <div className="company">
            <div>
              <label className="company-text">Company Name</label>
            </div>
            {companies[activeCompany]?.name ?? "No Name"}
          </div>

          <div className="company">
            <label className="company-text">Address</label>
            {companies[activeCompany]?.address ?? "No Address"}
          </div>

          <div className="company">
            <label className="company-text">Phone Number</label>
            {companies[activeCompany]?.mobilenumber.value ?? "No Mobile Number"}
          </div>

          <div className="company">
            <label className="company-text">Email ID</label>
            {companies[activeCompany]?.email.value ?? "No Email Id"}
          </div>

          <div className="company">
            <label className="company-text">CIN Number</label>
            {companies[activeCompany]?.cinNumber ?? "Not Entered"}
          </div>

          <div className="company">
            <label className="company-text">DIN Number</label>
            {companies[activeCompany]?.dinNumber ?? "Not Entered"}
          </div>

          <div className="company">
            <label className="company-text">Uploaded Documents List ...</label>
          </div>
          {companies[activeCompany]?.documents.map((document) => {
            return (
              <div className="company">
                <label className="company-text">{document.name}</label>
                <a
                  href={document.fileDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdDownloadForOffline style={{ fontSize: "30px" }} />
                </a>
              </div>
            );
          }) ?? <></>}

          {companies[activeCompany]?.fileInputs.map((fileInput) => {
            return (
              <>
                {fileInput.documents.length ? (
                  <div className="company">
                    <label className="company-text">{fileInput.name}</label>
                    Submitted
                    <a
                      href={fileInput.documents[0].fileDownloadUrl}
                      target="_blank"
                      r
                      rel="noreferrer"
                    >
                      <MdDownloadForOffline style={{ fontSize: "30px" }} />
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}

          <div
            className="company-header"
            style={{ display: "flex", alignItems: "center" }}
          >
            List of Directors
            <FaChevronRight />
          </div>
          {companies[activeCompany]?.directors.map((director) => {
            return (
              <div>
                <div className="company-button">
                  Director Information 1{director.name}
                </div>
                <div className="company">
                  <div>
                    <label className="company-text">Company Name</label>
                  </div>
                  {companies[activeCompany]?.name ?? "No Name"}
                </div>
                <div className="company">
                  <label className="company-text">Address</label>
                  {companies[activeCompany]?.address ?? "No Address"}
                </div>
                <div className="company">
                  <label className="company-text">Phone Number</label>
                  {companies[activeCompany]?.mobilenumber.value ??
                    "No Mobile Number"}
                </div>
                <div className="company">
                  <label className="company-text">Email ID</label>
                  {companies[activeCompany]?.email.value ?? "No Email Id"}
                </div>
                <div className="company">
                  <label className="company-text">CIN Number</label>
                  {companies[activeCompany]?.cinNumber ?? "Not Entered"}
                </div>
                <div className="company">
                  <label className="company-text">DIN Number</label>
                  {companies[activeCompany]?.dinNumber ?? "Not Entered"}
                </div>
                <div className="company">
                  <label className="company-text">
                    Uploaded Documents List ...
                  </label>
                </div>
                {companies[activeCompany]?.documents.map((document) => {
                  return (
                    <div className="company">
                      <label className="company-text">{document.name}</label>
                      <MdDownloadForOffline />
                    </div>
                  );
                }) ?? <></>}
              </div>
            );
          }) ?? <></>}
        </div>
      </div>
    </div>
  );
}
