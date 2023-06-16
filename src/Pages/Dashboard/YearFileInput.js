import { BsDownload } from "react-icons/bs";
import "./YearFileInput.css";
import { useRef, useState } from "react";

export default function YearFileInput({ fileInput }) {
  const docRef = useRef(null);
  const [date, setDate] = useState("");
  return (
    <>
      <h4 className="date-button">{fileInput.name} Files</h4>
      <div>
        <label> Choose Date - </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Upload File</label>
        <input type="file" ref={docRef} />
      </div>
      <div>
        <button className="button-upload">Upload</button>
      </div>
      <table>
        <tr>
          <th>Date of Document</th>
          <th>Download</th>
        </tr>
        <tr>
          {fileInput.documents.map((document) => {
            return (
              <>
                <td>{document.date}</td>
                <td>
                  <a
                    href={document.fileDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsDownload />
                  </a>
                </td>
              </>
            );
          })}
        </tr>
      </table>
    </>
  );
}
