import "./Adminv2.css";
import{ MdOutlineDownloadForOffline } from "react-icons/md";
export default function Adminv2() {
  return (
    <div>
      <div className="admin-container">
        <div className="flex-item-left">Company Details</div>
        {/* <div class="flex-item-right">Finsafe</div>*/}
      </div>
      
      <div className="admin-container">
         <div className="admin-item-left">
           <div className="admin-item1">
            <h3 className="admin1-text">Company Name</h3> 
            <p className="admin1-address">Address</p>
            <h3 className="admin1-text">Phone Number</h3>
            <h3 className="admin1-text">Email ID</h3>
           </div>
           <div className="admin-item2">
             <input className="admin-text"></input>
             <input className="admin-address"></input>
             <input className="admin-text"></input>
             <input className="admin-text"></input>
           </div>
         </div>
      
         <div className="admin-item-right">
          <div className="admin-item3">
          <h3 className="admin1-text">GST Number</h3> 
          <h3 className="admin1-text">PAN Number</h3>
          <p className="admin1-address">Company InCorporation Certificate</p>
          <h3>Add Documents</h3>
          </div>
           <div className="admin-item4">
           <input className="admin-text4"></input><button className="button-upload">Upload</button><button className="upload-file">Gst Pdf.pdf</button><i className="upload-icon"><MdOutlineDownloadForOffline/></i>
           <input className="admin-text4"></input><button className="button-upload">Upload</button><button className="upload-file">pan Pdf.pdf</button><i className="upload-icon"><MdOutlineDownloadForOffline/></i>
           <input className="admin-address4"></input><button className="button-upload">Upload</button><button className="upload-file">Gst Pdf.pdf</button><i className="upload-icon"><MdOutlineDownloadForOffline/></i>
           <select className="dropdown">
           <option>GST Number</option>
           <option>PAN Number</option>
           <option>Company Incorporation Certificate</option>
           </select>
           
           </div>
         </div>
    </div>
  </div>
  );
}
