import "./Dashboard.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import LoadingButton from "../../Components/LoadingButton";
import { useContext, useEffect, useState } from "react";
import Director from "./Director";
import shortid from "shortid";
import _ from "lodash";
import AddDirector from "./AddDirector";
import CompanyDetails from "./CompanyDetails";
import YearFileInput from "./YearFileInput";
import { AuthContext } from "../../Context/AuthContext";
import {
  ADMIN_EMAILS,
  COMPANY_COLL_NAME,
  USER_NOTIF_COLL_NAME,
  NOTIF_COLL_NAME,
} from "../../constants";
import { addData } from "../../API/createDoc";
import { getAllDocs, getDocs } from "../../API/readDoc";
import { editData } from "../../API/editDoc";
import { addDownloadUrlToDocuments, getAuthFilter } from "../utilities";
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
  const { auth, getIdentifier } = useContext(AuthContext);

  const [companyDetails, setCompanyDetails] = useState(
    INITIAL_DASHBOARD_DETAILS.companyDetails
  );

  const [directors, setDirectors] = useState(
    INITIAL_DASHBOARD_DETAILS.directors
  );
  const [fileInputs, setFileInputs] = useState(
    INITIAL_DASHBOARD_DETAILS.fileInputs
  );
  const [newNotifications, setNewNotifications] = useState([]);

  const [saving, setSaving] = useState(false);
  const [marking, setMarking] = useState(false);
  const [docExist, setDocExist] = useState(false);

  useEffect(() => {
    (async () => {
      if (auth) {
        showLoading(true);

        const notifications = await getAllDocs(NOTIF_COLL_NAME);
        console.log(notifications);
        // const readNotificationIds = await getDocs(USER_NOTIF_COLL_NAME, {
        //   identifier: getIdentifier(),
        // }).map((n) => n.id);

        // setNewNotifications([
        //   ...notifications.filter(
        //     (notif) => !readNotificationIds.includes(notif.id)
        //   ),
        // ]);

        const [dashboardDoc] = await getDocs(
          COMPANY_COLL_NAME,
          getAuthFilter(auth)
        );
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
            auth.phoneNumber &&
            companyDetails.mobilenumber.value === ""
          ) {
            setCompanyDetails({
              ...companyDetails,
              mobilenumber: { value: auth.phoneNumber, canEdit: false },
            });
          }
          showLoading(false);
        }
      }
    })();
  }, [auth]);

  const markReadHandler = async () => {
    if (window.confirm("Marking read will remove notifications")) {
      setMarking(true);
      await addData(
        USER_NOTIF_COLL_NAME,
        newNotifications.map((notif) => ({
          identifier: getIdentifier(),
          notifId: notif.id,
        }))
      );
      setNewNotifications([]);
      setMarking(false);
    }
  };

  const saveHandler = async () => {
    setSaving(true);
    console.log("Uploading Company Details Documents");
    if (companyDetails.documents.length) {
      companyDetails.documents = await addDownloadUrlToDocuments(
        companyDetails.documents
      );
    }

    console.log("Uploading Directors Documents");
    await Promise.all(
      directors.map(async (director, index) => {
        if (director.documents.length) {
          directors[index].documents = await addDownloadUrlToDocuments(
            director.documents
          );
        }
      })
    );

    console.log("Uploading File Inputs Documents");
    await Promise.all(
      fileInputs.map(async (fileInput, index) => {
        if (fileInputs[index].documents.length) {
          fileInputs[index].documents = await addDownloadUrlToDocuments(
            fileInput.documents
          );
        }
      })
    );

    const filter = getAuthFilter(auth);

    if (docExist) {
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
      setDocExist(true);
    }
    setSaving(false);
    alert("Save Complete");
  };

  if (!auth || (auth && ADMIN_EMAILS.includes(auth.email))) {
    return (
      <div className="dashboard_container">
        <h1>Dashboard</h1>
        <h1>Please login with a non admin account to view this page.</h1>
      </div>
    );
  }
  const addDirector = () => {
    setDirectors([...directors.concat([_.cloneDeep(NEW_DIRECTOR)])]);
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
      <div>
        <div>New Notifications</div>
        {newNotifications.map((notification) => {
          return <div>{notification.message}</div>;
        })}
        <LoadingButton
          loading={marking}
          onClick={markReadHandler}
          className="dashboard_submit"
        >
          Mark Read
        </LoadingButton>
      </div>

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
              directors.splice(index, 1);
              setDirectors([...directors]);
            }}
          />
        ))}
        <AddDirector clickHandler={addDirector} />
      </div>
      <div style={{ margin: "0 auto", width: "fit-content" }}>
        <LoadingButton
          className="dashboard_submit"
          loading={saving}
          onClick={saveHandler}
        >
          "Save"
        </LoadingButton>
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
