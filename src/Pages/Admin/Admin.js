import "./Admin.css";
import { MdDownloadForOffline } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useContext, useState } from "react";
import { getAllDocs } from "../../API/readDoc";
import { COMPANY_COLL_NAME } from "../../constants";
import { AuthContext } from "../../Context/AuthContext";
import { ADMIN_EMAILS } from "../../constants";

export default function Admin() {
  const [companies, setCompanies] = useState([]);
  const [activeCompany, setActiveCompany] = useState(0);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const companies = await getAllDocs(COMPANY_COLL_NAME);
      setCompanies(companies);
    })();
  });

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
          
        <button className="company-header-button"><p className="company-header">List of Companies<i className="side-icon"><FaChevronRight/></i></p></button>
          {companies.map((company, index) => (
            <button
              className="company-button"
              onClick={() => {
                setActiveCompany(index);
              }}
            >
              Company {company?.name ?? "No Name"}
            </button>
          ))}
        </div>

        <div className="company-right">
          <div className="company-nestedleft">
            <div className="company">
              <div>
                <label className="companynested-header">Company 1</label>
              </div>
              <i className="companyprofile-download">
                <MdDownloadForOffline />
              </i>
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

            <div className="company">
              <label className="company-text">ROC</label>
              Status........
              <MdDownloadForOffline />
            </div>

            <div className="company">
              <label className="company-text">Income Tax</label>
              Status........
              <MdDownloadForOffline />
            </div>

            <div className="company">
              <label className="company-text">Form 16</label>
              Status.......
              <MdDownloadForOffline />
            </div>

            <p className="company-header-right">List of Directors<i className="side-icon"><FaChevronRight/></i></p>
            {companies[activeCompany]?.directors.map((director) => {
              return (
                <button className="company-button">
                  Director {director.name}
                </button>
              );
            }) ?? <></>}
          </div>
        </div>
      </div>
    </div>
  );
}
