import { BsDownload } from "react-icons/bs";

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
        <thead>
          <th>Date of Document</th>
          <th>Download</th>
        </thead>
        <tbody>
          {fileInput.documents.map((document) => {
            return (
              <>
                <tr>{document.date}</tr>
                <tr>
                  <a
                    href={document.fileDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsDownload />
                  </a>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
