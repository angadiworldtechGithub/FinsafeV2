import "./Dashboard.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import AddDirector from "./AddDirector";
import CompanyDetails from "./CompanyDetails";
import { useState } from "react";
import Director from "./Director";
import shortid from "shortid";
import YearFileInput from "./YearFileInput";

const NEW_DIRECTOR = {
  name: "",
  address: "",
  mobilenumber: "",
  email: "",
  documents: [],
};

const INITIAL_DASHBOARD_DETAILS = {
  companyDetails: {
    name: "",
    address: "",
    mobilenumber: "",
    email: "",
    dinNumber: "",
    cinNumber: "",
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
  console.log(dashboardDetails);

  const addDirector = () => {
    setDashboardDetails((dashboardDetails) => {
      return {
        ...dashboardDetails,
        directors: dashboardDetails.directors.concat([
          { ...NEW_DIRECTOR, number: dashboardDetails.directors.length + 1 },
        ]),
      };
    });
  };

  const setCompanyDetails = (companyDetailsCallback) => {
    setDashboardDetails((dashboardDetails) => ({
      ...dashboardDetails,
      companyDetails: {
        ...companyDetailsCallback(dashboardDetails.companyDetails),
      },
    }));
  };

  const setDirector = (index) => (directorsCallback) => {
    const director = directorsCallback(dashboardDetails.directors[index]);
    dashboardDetails.directors[index] = director;
    setDashboardDetails((dashboardDetails) => ({
      ...dashboardDetails,
      directors: [...dashboardDetails.directors],
    }));
  };

  const setFileInput = (index) => (fileInputCallback) => {
    const fileInput = fileInputCallback(dashboardDetails.fileInputs[index]);
    dashboardDetails.fileInputs[index] = fileInput;
    setDashboardDetails((dashboardDetails) => ({
      ...dashboardDetails,
      fileInputs: [...dashboardDetails.fileInputs],
    }));
  };

  return (
    <div>
      <CompanyDetails
        setCompanyDetails={setCompanyDetails}
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
        {dashboardDetails.directors.map((director, index) => (
          <Director
            key={shortid.generate()}
            data={director}
            setData={setDirector(index)}
            deleteDirector={() => {}}
          />
        ))}
        <AddDirector clickHandler={addDirector} />
      </div>
      {dashboardDetails.fileInputs.map((fileInput, index) => {
        return (
          <YearFileInput
            fileInput={fileInput}
            setFileInput={setFileInput(index)}
          />
        );
      })}
      <div style={{ margin: "0 auto", width: "fit-content" }}>
        <button className="dashboard_submit">Save</button>
      </div>
    </div>
  );
}
