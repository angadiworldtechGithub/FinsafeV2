import { BsDownload } from "react-icons/bs";
import "./YearFileInput.css";

export default function YearFileInput({ fileInput }) {
  return (
    <>
      <h4 className="date-button">{fileInput.name} Files</h4>
      <div>
        <label> Choose Date - </label>
        <input type="date" />
      </div>
      <div>
        <label>Upload File</label>
        <input type="file" />
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
                <td><a href={document.fileDownloadUrl} target="_blank" rel="noreferrer"><BsDownload /></a></td>
              </>
            );
          })}
        </tr>
      </table>
    </>
  );
}
