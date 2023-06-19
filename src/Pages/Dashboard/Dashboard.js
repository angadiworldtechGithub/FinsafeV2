import "./Dashboard.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import AddDirector from "./AddDirector";
import CompanyDetails from "./CompanyDetails";
import { useContext, useEffect, useState } from "react";
import Director from "./Director";
import shortid from "shortid";
import YearFileInput from "./YearFileInput";
import { AuthContext } from "../../Context/AuthContext";
import { ADMIN_EMAILS, COMPANY_COLL_NAME } from "../../constants";
import { addData } from "../../API/createDoc";
import { docExist } from "../../API/readDoc";
import { editData } from "../../API/editDoc";
import { uploadDocuments } from "../../API/uploadFiles";

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
    mobilenumber: { value: "", canEdit: true },
    email: { value: "", canEdit: true },
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
  const [directorSave, setDirectorSave] = useState("low");

  const [saving, setSaving] = useState(false);

  const addDownloadUrlToDocuments = async (documents) => {
    const documentsToUpload = documents
      .map((item, index) => [index, item])
      .filter((item) => Boolean(item[1].file));

    if (documentsToUpload.length) {
      const downloadUrls = await uploadDocuments(
        documentsToUpload.map((item) => item[0])
      );
      documentsToUpload.forEach((item, index) => {
        delete companyDetails.documents[item[0]].file;
        companyDetails.documents[item[0]] = {
          ...companyDetails.documents,
          fileDownloadUrl: downloadUrls[index],
        };
      });
      return [...documents];
    } else {
      return documents;
    }
  };

  const saveHandler = async () => {
    setDirectorSave("medium");
    if (directorSave === "high") {
      setSaving(true);
      console.log("Uploading Documents");
      companyDetails.documents = addDownloadUrlToDocuments(
        companyDetails.documents
      );

      directors.forEach((director, index) => {
        directors[0].documents = addDownloadUrlToDocuments(director.documents);
      });
    }
    if (await docExist({ email: auth.email })) {
      await editData(COMPANY_COLL_NAME, {
        ...companyDetails,
        directors: directors,
      });
    } else {
      await addData(COMPANY_COLL_NAME, {
        ...companyDetails,
        directors: directors,
      });
    }
    setSaving(false);
    setDirectorSave("low");
  };

  useEffect(() => {
    if (auth) {
      // Get Info
      // if on info excecute code below
      if (auth.email && companyDetails.email.value === "") {
        setCompanyDetails({
          ...companyDetails,
          email: { value: auth.email, canEdit: false },
        });
      } else if (companyDetails.mobilenumber.value === "") {
        setCompanyDetails({
          ...companyDetails,
          mobilenumber: { value: auth.mobilenumber, canEdit: false },
        });
      }
    }
  }, [auth, companyDetails]);

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
            number={index + 1}
            key={shortid.generate()}
            initialData={director}
            setFinalData={setDirector(index)}
            deleteDirector={() => {
              console.log(index);
              directors.splice(index, 1);
              setDirectors([...directors]);
            }}
            onSave={directorSave}
            setDirectorSave={setDirectorSave}
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
          Save
        </button>
      </div>
      <div style={{ height: "5px", borderBottom: "solid 1px black" }}></div>
      {fileInputs.map((fileInput, index) => {
        return (
          <YearFileInput
            key={shortid.generate()}
            fileInput={fileInput}
            setFileInput={setFileInput(index)}
          />
        );
      })}
    </div>
  );
}
