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
  summary: "",
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
  const [companyDetails, setCompanyDetails] = useState(
    INITIAL_DASHBOARD_DETAILS.companyDetails
  );
  const [directors, setDirectors] = useState(
    INITIAL_DASHBOARD_DETAILS.directors
  );
  const [fileInputs, setFileInputs] = useState(
    INITIAL_DASHBOARD_DETAILS.fileInputs
  );
  const [directorSave, setDirectorSave] = useState("low");

  const addDirector = () => {
    setDirectors([
      ...directors.concat([{ ...NEW_DIRECTOR, number: directors.length + 1 }]),
    ]);
  };

  const setDirector = (index) => (director) => {
    directors[index] = director;
    setDirectors([...directors]);
  };

  const setFileInput = (index) => (fileInput) => {
    fileInputs[index] = fileInput;
    setFileInputs([...fileInputs]);
  };

  return (
    <div>
      <CompanyDetails
        setCompanyDetails={setCompanyDetails}
        companyDetails={companyDetails}
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
        {directors.map((director, index) => (
          <Director
            key={shortid.generate()}
            initialData={director}
            setFinalData={setDirector(index)}
            deleteDirector={() => {}}
            onSave={directorSave}
            setDirectorSave={setDirectorSave}
          />
        ))}
        <AddDirector clickHandler={addDirector} />
      </div>
      {fileInputs.map((fileInput, index) => {
        return (
          <YearFileInput
            key={shortid.generate()}
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
