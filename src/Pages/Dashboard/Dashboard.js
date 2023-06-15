import "./Dashboard.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import AddDirector from "./AddDirector";
import CompanyDetails from "./CompanyDetails";
import { useState } from "react";
import Director from "./Director";
import YearFileInput from "./YearFileInput";

const INITIAL_DASHBOARD_DETAILS = {
  companyDetails: {
    name: "",
    address: "",
    mobilenumber: "",
    documents: [],
  },
  directors: [],
  fileInputs: [
    { name: "ROC", documents: [] },
    { name: "Income Tax", documents: [] },
    { name: "Form 16", documents: [] },
  ],
};

export default function Dashboard() {
  const [dashboardDetails, setDashboardDetails] = useState(
    INITIAL_DASHBOARD_DETAILS
  );

  const addDirector = () => {
    setDashboardDetails((dashboardDetails) => {
      return {
        ...dashboardDetails,
        directors: dashboardDetails.directors.concat([
          { number: dashboardDetails.directors.length + 1 },
        ]),
      };
    });
  };

  return (
    <div>
      <CompanyDetails
        setCompanyDetails={(companyDetailsCallback) => {
          setDashboardDetails((dashboardDetails) => ({
            ...dashboardDetails,
            companyDetails: {
              ...companyDetailsCallback(dashboardDetails.companyDetails),
            },
          }));
        }}
        companyDetails={dashboardDetails.companyDetails}
      />
      <div>
        <h1 className="download-heading">
          <i className="download-icon">
            <MdOutlineDownloadForOffline />
          </i>
          Download Complete Company Profile
        </h1>
      </div>
      <div className="director-container">
        {dashboardDetails.directors.map((director) => (
          <Director number={director.number} data={director.data} />
        ))}
        <AddDirector clickHandler={addDirector} />
      </div>
      {dashboardDetails.fileInputs.map((fileInput) => {
        return (
          <YearFileInput
            name={fileInput.name}
            documents={fileInput.documents}
          />
        );
      })}
      <div style={{ margin: "0 auto", width: "fit-content" }}>
        <button className="dashboard_submit">Save</button>
      </div>
    </div>
  );
}
