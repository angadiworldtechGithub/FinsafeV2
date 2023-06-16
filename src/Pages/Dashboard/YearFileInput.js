import { GrDownload } from "react-icons/gr";
import "./YearFileInput.css";

export default function YearFileInput({ fileInput }) {
  return (
    <>
      <h4 className="date-button">{fileInput.name} Files</h4>
      <div className="income-flex">
         <div>
               <label className="label-flex"> Choose Date - </label>
               <input type="date" />
         </div>
         <div>
              <label className="label-flex">Upload File - </label>
              <input type="file" />
         </div>
         <div>
            <button className="button-upload">Upload</button>
         </div>
      </div>
      <table className="Year">
         <tr>
          <th>Date of Document</th>
          <th>Download</th>
         </tr>
        <tr>
         {/* {fileInput.documents.map((document) => {
            return (
              <>
                <td>{document.date}</td>
                <td><a href={document.fileDownloadUrl} target="_blank" rel="noreferrer"><GrDownload /></a></td>
              </>
            );
          })}*/}
           <td>21/08/2023</td>
           <td><i><GrDownload/></i></td>
        </tr>
        <tr>
           <td>22/08/2023</td>
           <td><i><GrDownload/></i></td>
        </tr>
        <tr>
           <td>23/08/2023</td>
           <td><i><GrDownload/></i></td>
        </tr>
        <tr>
           <td>24/08/2023</td>
           <td><i><GrDownload/></i></td>
        </tr>
        <tr>
           <td>25/08/2023</td>
           <td><i><GrDownload/></i></td>
        </tr>
      </table>
    </>
  );
}
