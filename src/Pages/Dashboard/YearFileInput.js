import { GrDownload } from "react-icons/gr";
import "./YearFileInput.css";
import { useRef, useState } from "react";

export default function YearFileInput({ fileInput }) {
  const docRef = useRef(null);
  const [date, setDate] = useState("");
  return (
    <>
      <h4 className="year-file-heading">{fileInput.name} Files</h4>
      <div className="year-file-input-container">
        <div className="year-file-row">
          <label className="label-flex"> Choose Date - </label>
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
          <button className="button-upload">Upload</button>
        </div>
      </div>
      
      <div className="table-container">
      <table>
        <tr>
          <th>Date of Document</th>
          <th>Download</th>
        </tr>
        {fileInput.documents.map((document) => (
          <></>
        ))}
        <tr>
          <td>21/08/2023</td>
          <td>
            <i>
              <GrDownload />
            </i>
          </td>
        </tr>
        <tr>
          <td>22/08/2023</td>
          <td>
            <i>
              <GrDownload />
            </i>
          </td>
        </tr>
        <tr>
          <td>23/08/2023</td>
          <td>
            <i>
              <GrDownload />
            </i>
          </td>
        </tr>
        <tr>
          <td>24/08/2023</td>
          <td>
            <i>
              <GrDownload />
            </i>
          </td>
        </tr>
        <tr>
          <td>25/08/2023</td>
          <td>
            <i>
              <GrDownload />
            </i>
          </td>
        </tr>
      </table>
      </div>
    </>
  );
}
