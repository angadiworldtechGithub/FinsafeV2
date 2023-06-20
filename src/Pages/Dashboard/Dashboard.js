import "./Dashboard.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import AddDirector from "./AddDirector";
import CompanyDetails from "./CompanyDetails";
import { useContext, useEffect, useState } from "react";
import Director from "./Director";
import shortid from "shortid";
import YearFileInput from "./YearFileInput";
import { AuthContext } from "../../Context/AuthContext";
import { ADMIN_EMAILS, COMPANY_COLL_NAME } from "../../constants";
import { addData } from "../../API/createDoc";
import { docExist as checkDocExist, getDocs } from "../../API/readDoc";
import { editData } from "../../API/editDoc";
import { addDownloadUrlToDocuments, getAuthFilter } from "./utilities";
import { showLoading } from "react-global-loading";

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
    mobilenumber: { value: "", canEdit: true },
    email: { value: "", canEdit: true },
    dinNumber: "",
    cinNumber: "",
    summary: "",
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
  const { auth } = useContext(AuthContext);

  const [companyDetails, setCompanyDetails] = useState(
    INITIAL_DASHBOARD_DETAILS.companyDetails
  );

  const [directors, setDirectors] = useState(
    INITIAL_DASHBOARD_DETAILS.directors
  );
  const [fileInputs, setFileInputs] = useState(
    INITIAL_DASHBOARD_DETAILS.fileInputs
  );

  const [saving, setSaving] = useState(false);
  const [docExist, setDocExist] = useState(false);

  const saveHandler = async () => {
    setSaving(true);
    console.log("Uploading Company Details Documents");
    companyDetails.documents = await addDownloadUrlToDocuments(
      companyDetails.documents
    );
    console.log("Uploading Directors Documents");
    directors.forEach(async (director, index) => {
      directors[index].documents = await addDownloadUrlToDocuments(
        director.documents
      );
    });
    console.log("Uploading File Inputs Documents");
    fileInputs.forEach(async (fileInput, index) => {
      fileInputs[index].documents = await addDownloadUrlToDocuments(
        fileInput.documents
      );
    });

    const filter = getAuthFilter(auth);
    if (docExist) {
      console.log("!!!");
      await editData(COMPANY_COLL_NAME, filter, {
        ...companyDetails,
        directors: directors,
        fileInputs: fileInputs,
      });
    } else {
      await addData(COMPANY_COLL_NAME, {
        ...companyDetails,
        directors: directors,
        fileInputs: fileInputs,
      });
    }
    setSaving(false);
    alert("Save Complete");
  };

  useEffect(() => {
    (async () => {
      if (auth) {
        showLoading(true);
        const [dashboardDoc] = await getDocs(
          COMPANY_COLL_NAME,
          getAuthFilter(auth)
        );
        console.log(dashboardDoc);
        if (dashboardDoc) {
          setDocExist(true);
          setCompanyDetails({
            ...dashboardDoc,
            directors: undefined,
            fileInputs: undefined,
          });
          setDirectors(dashboardDoc.directors);
          setFileInputs(dashboardDoc.fileInputs);
          showLoading(false);
        } else {
          if (auth.email && companyDetails.email.value === "") {
            setCompanyDetails({
              ...companyDetails,
              email: { value: auth.email, canEdit: false },
            });
          } else if (
            auth.mobilenumber &&
            companyDetails.mobilenumber.value === ""
          ) {
            setCompanyDetails({
              ...companyDetails,
              mobilenumber: { value: auth.mobilenumber, canEdit: false },
            });
          }
          showLoading(false);
        }
      }
    })();
  }, [auth]);

  if (!auth || (auth && ADMIN_EMAILS.includes(auth.email))) {
    return (
      <div className="dashboard_container">
        <h1>Dashboard</h1>
        <h1>Please login with a non admin account to view this page.</h1>
      </div>
    );
  }

  const addDirector = () => {
    setDirectors([...directors.concat([{ ...NEW_DIRECTOR }])]);
  };

  const setDirector = (index) => (director) => {
    directors[index] = director;
    setDirectors((directors) => {
      directors[index] = director;
      return [...directors];
    });
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
            number={index + 1}
            key={shortid.generate()}
            initialData={director}
            setFinalData={setDirector(index)}
            deleteDirector={() => {
              console.log(index);
              directors.splice(index, 1);
              setDirectors([...directors]);
            }}
          />
        ))}
        <AddDirector clickHandler={addDirector} />
      </div>
      <div style={{ margin: "0 auto", width: "fit-content" }}>
        <button
          className="dashboard_submit"
          disabled={saving}
          onClick={saveHandler}
        >
          {saving ? <AiOutlineLoading className="loading" /> : "Save"}
        </button>
      </div>
      <div style={{ height: "5px", borderBottom: "solid 1px black" }}></div>
      {fileInputs.map((fileInput, index) => {
        return (
          <YearFileInput
            key={shortid.generate()}
            initialFileInput={fileInput}
            setFileInput={setFileInput(index)}
          />
        );
      })}
    </div>
  );
}
