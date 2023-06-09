import "./Admin.css";
import { MdDownloadForOffline, MdCancel } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { useEffect, useContext, useState, useRef } from "react";
import { getAllDocs } from "../../API/readDoc";
import { COMPANY_COLL_NAME } from "../../constants";
import { AuthContext } from "../../Context/AuthContext";
import { ADMIN_EMAILS } from "../../constants";
import { showLoading } from "react-global-loading";
import { DEFAULT_DOCUMENT_LIST } from "../../constants";
import { editData } from "../../API/editDoc";
import { addDownloadUrlToDocuments } from "../utilities";

export default function Admin() {
  const [companies, setCompanies] = useState([]);
  const [activeCompany, setActiveCompany] = useState(0);
  const docRef = useRef([]);
  const { auth, getAuthFilter, getIdentifier } = useContext(AuthContext);
  const [saving, setSaving] = useState(false);
  const [addDocumentOptions, setAddDocumentOptions] = useState(
    DEFAULT_DOCUMENT_LIST
  );
  const [selectVal, setSelectVal] = useState("");

  const setActCompany = (company) => {
    companies[activeCompany] = company;
    setCompanies([...companies]);
  };

  useEffect(() => {
    (async () => {
      showLoading(true);
      const companies = await getAllDocs(COMPANY_COLL_NAME);
      setCompanies(companies);
      showLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (companies[activeCompany]) {
      setAddDocumentOptions([
        ...DEFAULT_DOCUMENT_LIST.filter(
          (option) =>
            !companies[activeCompany]?.documents
              .map((doc) => doc.name)
              .includes(option)
        ),
      ]);
    }
  }, [companies[activeCompany]?.documents]);

  const saveHandler = async () => {
    setSaving(true);
    console.log("Uploading Company Details Documents");
    if (companies[activeCompany].documents.length) {
      companies[activeCompany].documents = await addDownloadUrlToDocuments(
        companies[activeCompany].documents
      );
    }

    const filter = getAuthFilter(auth);

    await editData(COMPANY_COLL_NAME, filter, {
      ...companies[activeCompany],
      directors: companies[activeCompany].directors,
      fileInputs: companies[activeCompany].fileInputs,
    });
    setSaving(false);
    alert("Save Complete");
  };

  if (!auth || (auth && !ADMIN_EMAILS.includes(auth.email))) {
    return (
      <div className="dashboard_container">
        <h1>Admin</h1>
        <h1>Please login with a admin account to view this page</h1>
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
              className={`company-item hover_click ${
                index === activeCompany ? "underline_admin" : ""
              }`}
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
          {companies[activeCompany]?.documents.map((document, index) => {
            return (
              <div className="company">
                <label className="company-text">{document.name}</label>
                {document.fileDownloadUrl ? (
                  <a
                    href={document.fileDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdDownloadForOffline style={{ fontSize: "30px" }} />
                  </a>
                ) : (
                  <div>
                    <input
                      style={{ marginLeft: "10px" }}
                      ref={(el) => {
                        docRef.current[index] = el;
                      }}
                      onChange={() => {
                        const file_ = docRef.current[index].files[0];
                        const newName = `${document.name
                          .replace(/\s+/g, "_")
                          .toLowerCase()}_${
                          getIdentifier() + "." + file_.name.split(".")[1]
                        }`;
                        setActCompany((companyDetails) => {
                          companyDetails.documents[index] = {
                            ...companyDetails.documents[index],
                            file: new File([file_], newName, {
                              type: file_.type,
                            }),
                          };
                          return {
                            ...companyDetails,
                            documents: companyDetails.documents,
                          };
                        });
                      }}
                      type="file"
                    />
                    <MdCancel
                      className="hover_click"
                      onClick={() => {
                        const [deleteDoc] = companies[
                          activeCompany
                        ].documents.splice(index, 1);
                        setActCompany({
                          ...companies[activeCompany],
                          documents: companies[activeCompany].documents,
                        });
                        setAddDocumentOptions([
                          ...addDocumentOptions.concat([deleteDoc.name]),
                        ]);
                      }}
                    />
                  </div>
                )}
              </div>
            );
          }) ?? <></>}
          {addDocumentOptions.length ? (
            <div className="company">
              <div>
                <label className="company-text">Add Documents +</label>
              </div>
              <div style={{ width: "50%" }}>
                <select
                  className="admin-select"
                  value={selectVal}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      console.log(e.target.value);
                      companies[activeCompany].documents.push({
                        name: e.target.value,
                        file: null,
                      });
                      setActCompany({
                        ...companies[activeCompany],
                        documents: [...companies[activeCompany].documents],
                      });
                      setSelectVal("");
                    }
                  }}
                >
                  <option></option>
                  {addDocumentOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <></>
          )}

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
                  1.Director {director.name} Information
                </div>
                <div className="company">
                  <div>
                    <label className="company-text">Director Name</label>
                  </div>
                  {director?.name ?? "No Name"}
                </div>
                <div className="company">
                  <label className="company-text">Director Address</label>
                  {director?.address ?? "No Address"}
                </div>
                <div className="company">
                  <label className="company-text">Director Phone Number</label>
                  {director?.mobilenumber.value ?? "No Mobile Number"}
                </div>
                <div className="company">
                  <label className="company-text">Email</label>
                  {director?.email.value ?? "No Email Id"}
                </div>
                {director?.documents.map((document) => {
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
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <button
              className="dashboard_submit"
              disabled={saving}
              onClick={saveHandler}
            >
              {saving ? <AiOutlineLoading className="loading" /> : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
