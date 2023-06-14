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
           <div className="admin-box1">
            <h3 className="admin1-text">Company Name</h3> 
            <p className="admin1-address">Address</p>
            <h3 className="admin1-text">Phone Number</h3>
            <h3 className="admin1-text">Email ID</h3>
           </div>
           <div className="admin-box2">
             <input className="admin-text"></input>
             <input className="admin-address"></input>
             <input className="admin-text"></input>
             <input className="admin-text"></input>
           </div>
         </div>
      
         <div className="admin-item-right">
          <div className="admin-box3">
          <h3 className="admin1-text">GST Number</h3> 
          <h3 className="admin1-text">PAN Number</h3>
          <p className="admin1-address">Company InCorporation Certificate</p>
          <h3>Add Documents</h3>
          </div>
           <div className="admin-box4">
           <input className="admin-text4"></input><button className="button-upload">Upload</button><button className="upload-file">Gst Pdf.pdf</button><i className="upload-icon"><MdOutlineDownloadForOffline/></i>
           <input className="admin-text4"></input><button className="button-upload">Upload</button><button className="upload-file">pan Pdf.pdf</button><i className="upload-icon"><MdOutlineDownloadForOffline/></i>
           <input className="admin-address4"></input><button className="button-upload">Upload</button><button className="upload-file">Gst Pdf.pdf</button><i className="upload-icon"><MdOutlineDownloadForOffline/></i>
           <select className="admin-select">
            <option>Add Documents</option>
            <option>GST Number</option>
            <option>PAN Number</option>
            <option>Company Incorporation Certificate</option>
            <option>None</option>
           </select><br></br>
           </div>
           <label className="label-name"><b>DIN Number</b></label><input className="admin-number"></input>
           <label className="label-name"><b>CIN Number</b></label><input className="admin-number"></input>

         </div>
    </div>
    
    <div className="summary-container">
        <div className="summary-left">Summary</div>
        <div className="summary-right"></div>
    </div>
    <div>
    <h1><i className="download-icon"><MdOutlineDownloadForOffline/></i>Download Complete Company Profile</h1>
    </div>

        
     <h2>Director #1</h2>
    
        <div className="admin-container">
         <div className="admin-item-left">
           <div className="admin-box1">
            <h3 className="admin1-text">Company Name</h3> 
            <p className="admin1-address">Address</p>
            <h3 className="admin1-text">Phone Number</h3>
            <h3 className="admin1-text">Email ID</h3>
           </div>
           <div className="admin-box2">
             <input className="admin-text"></input>
             <input className="admin-address"></input>
             <input className="admin-text"></input>
             <input className="admin-text"></input>
           </div>
         </div>
        </div>
  </div>
  );
}
