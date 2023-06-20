import { GrDownload } from "react-icons/gr";
import "./YearFileInput.css";
import { useContext, useRef, useState } from "react";
import { uploadDocuments } from "../../API/uploadFiles";
import { AuthContext } from "../../Context/AuthContext";
import { editData } from "../../API/editDoc";
import { COMPANY_COLL_NAME } from "../../constants";

export default function YearFileInput({ fileInput, docExist = false }) {
  const docRef = useRef(null);
  const [date, setDate] = useState("");
  const { getIdentifier } = useContext(AuthContext);

  const onUpload = async () => {
    if (docExist) {
      if (docRef.current.files.length) {
        const file = docRef.current.files[0];
        const [downloadUrl] = await uploadDocuments([
          new File(
            [file],
            `${fileInput.name}_${getIdentifier()}.${file.name.split(".")[1]}`,
            { type: file.type }
          ),
        ]);

        const document = {
          fileDownloadUrl: downloadUrl,
          date,
        };

        await editData(
          COMPANY_COLL_NAME,
          { identifier: "" },
          { documents: [document] }
        );
      } else {
        alert("Must add file to upload.");
      }
    } else {
      alert("Must create other data to save files.");
    }
  };
  return (
    <>
      <h4 className="year-file-heading">{fileInput.name} Files</h4>
      <div className="year-file-input-container">
        <div className="year-file-row">
          <label className="label-flex">Choose Date -</label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="year-file-row">
          <label className="label-flex">Upload File - </label>
          <input type="file" ref={docRef} />
        </div>
        <div className="year-file-row year-upload">
          <button className="button-upload" onClick={onUpload}>
            Upload
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <tr>
            <th>Date of Document</th>
            <th>Download</th>
          </tr>
          {fileInput.documents.map((document) => (
            <tr>
              <td>{document.dateCreated.toDate().toString()}</td>
              <td>
                <a
                  href={document.fileDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrDownload />
                </a>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
