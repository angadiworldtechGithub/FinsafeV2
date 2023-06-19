import "./Dashboard.css";
import { MdBookOnline, MdOutlineDownloadForOffline } from "react-icons/md";
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
import { docExist, getDocs } from "../../API/readDoc";
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

  const getFilter = () => {
    if (auth.email) {
      return { "email.value": auth.email };
    } else if (auth.mobilenumber) {
      return { "mobilnumber.value": auth.mobilenumber };
    }
  };

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
    const documentsToSave = documents.filter(
      (doc) => Boolean(doc.file) || Boolean(doc.fileDownloadUrl)
    );

    console.log(documentsToSave);

    const documentsToUpload = documentsToSave
      .map((item, index) => [item.file, index])
      .filter((o) => Boolean(o[0]));

    console.log(documentsToUpload);

    if (documentsToUpload.length) {
      const downloadUrls = await uploadDocuments(
        documentsToUpload.map((item) => item[0])
      );

      console.log(downloadUrls);
      documentsToUpload.forEach((item, index) => {
        delete documentsToSave[item[1]].file;
        documentsToSave[item[1]] = {
          ...companyDetails.documents[index],
          fileDownloadUrl: downloadUrls[index],
        };
      });
      return [...documentsToSave];
    } else {
      return documentsToSave;
    }
  };

  const saveHandler = async () => {
    console.log(directorSave);
    if (directorSave === "low") {
      setSaving(true);
      setDirectorSave("medium");
    }
  };

  useEffect(() => {
    (async () => {
      if (auth) {
        const [dashboardDoc] = await getDocs(COMPANY_COLL_NAME, getFilter());
        if (dashboardDoc) {
          setCompanyDetails({
            ...dashboardDoc,
            directors: undefined,
            fileInputs: undefined,
          });
          setDirectors(dashboardDoc.directors);
          setFileInputs(dashboardDoc.fileInputs);
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
        }
      }
    })();
  }, [auth]);

  useEffect(() => {
    (async () => {
      console.log(directorSave);
      if (
        directorSave === "high" ||
        (directorSave === "medium" && directors.length === 0)
      ) {
        console.log("Uploading Documents");
        companyDetails.documents = await addDownloadUrlToDocuments(
          companyDetails.documents
        );

        directors.forEach(async (director, index) => {
          directors[index].documents = await addDownloadUrlToDocuments(
            director.documents
          );
        });
        const filter = getFilter();
        if (await docExist(COMPANY_COLL_NAME, filter)) {
          await editData(COMPANY_COLL_NAME, filter, {
            ...companyDetails,
            directors: directors,
          });
        } else {
          await addData(COMPANY_COLL_NAME, {
            ...companyDetails,
            directors: directors,
            fileInputs: fileInputs,
          });
        }
        setSaving(false);
        setDirectorSave("low");
      }
    })();
  }, [directorSave]);

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
          {saving ? <AiOutlineLoading className="loading" /> : "Save"}
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
