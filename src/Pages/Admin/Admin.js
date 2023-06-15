import "./Admin.css"
import { BsChevronRight } from "react-icons/bs";
import{ MdDownloadForOffline } from "react-icons/md";
export default function Admin() {
  return (
     <div>
     <p className="welcome">Welcome!</p>
     <div className="company-container">
     <div className="company-left">
       <p className="company-header">List of Companies</p>
       <button className="company-button">Company 1</button>
       <button className="company-button">Company 2</button>
       <button className="company-button">Company 2</button>
      </div>

     <div className="company-right">
    

        <div className="company-nestedleft">
             
        <div className="company">
        <div><label className="companynested-header">Company 1</label></div>
         <i className="companyprofile-download"><MdDownloadForOffline/></i>
        </div>
   


         <div className="company">
           <div><label className="company-text">Company Name</label></div>
           <input className="companynested-text"></input>
         </div>

         <div className="company">
          <label className="company-text">Address</label>
          <input className="companynested-address"></input>
          </div>

          <div className="company">
          <label className="company-text">Phone Number</label>
          <input className="companynested-text"></input>
          </div>

          <div className="company">
          <label className="company-text">Email ID</label>
          <input className="companynested-text"></input>
          </div>

          <div className="company">
          <label className="company-text">GST Number</label>
          <input className="companynested-text"></input>
          </div>

          <div className="company">
          <label className="company-text">PAN Number</label>
          <input className="companynested-text"></input>
          </div>

          <div className="company">
          <label className="company-text">Company InCorporation Certificate</label>
          <input className="companynested-address"></input>
          </div>

          <div className="company">
          <label className="company-text">ROC</label>
          <p className="roc">Status........</p><i className="roc-download"><MdDownloadForOffline/></i> 
          </div>

          <div className="company">
          <label className="company-text">Income Tax</label>
          <p className="tax">stauts........</p><i className="roc-download"><MdDownloadForOffline/></i> 
          </div>

          <div className="company">
          <label className="company-text">Form 16</label>
          <p className="form16">stauts.......</p><i className="roc-download"><MdDownloadForOffline/></i> 
          </div>

          <p className="company-header">List of Directors</p>
          <button className="company-button">Director 1</button>
          <button className="company-button">Director 2</button>
          <button className="company-button">Director 2</button>

         </div>
        
        {/*</div><div className="company-nestedright">*/}

     </div>
    {/* <p className="company-header">List of  Directors</p>
      <button className="company-button">Directors 1</button><i className="company-icon"><BsChevronRight/></i>
      <button className="company-button">Individuals 2</button><i className="company-icon"><BsChevronRight/></i>
      */}



    </div> 
    </div>
    );
}
