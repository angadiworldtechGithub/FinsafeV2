import "./Adminv2.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import {BiRightArrow} from "react-icons/bi";
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
            <input className="admin-text4"></input>
            <button className="button-upload">Upload</button>
            <button className="upload-file">Gst Pdf.pdf</button>
            <i className="upload-icon">
              <MdOutlineDownloadForOffline />
            </i>
            <input className="admin-text4"></input>
            <button className="button-upload">Upload</button>
            <button className="upload-file">pan Pdf.pdf</button>
            <i className="upload-icon">
              <MdOutlineDownloadForOffline />
            </i>
            <input className="admin-address4"></input>
            <button className="button-upload">Upload</button>
            <button className="upload-file">Gst Pdf.pdf</button>
            <i className="upload-icon">
              <MdOutlineDownloadForOffline />
            </i>
            <select className="admin-select">
              <option>Add Documents</option>
              <option>GST Number</option>
              <option>PAN Number</option>
              <option>Company Incorporation Certificate</option>
              <option>None</option>
            </select>
            <br></br>
          </div>
          <label className="label-name">
            <b>DIN Number</b>
          </label>
          <input className="admin-number"></input>
          <label className="label-name">
            <b>CIN Number</b>
          </label>
          <input className="admin-number"></input>
        </div>
      </div>

      <div className="summary-container">
        <div className="summary-left">Summary</div>
        <div className="summary-right"></div>
      </div>
      <div>
        <h1 className="download-heading">
          <i className="download-icon">
            <MdOutlineDownloadForOffline />
          </i>
          Download Complete Company Profile
        </h1>
      </div>

      <h2 className="Director-box">Director #1</h2>
      <div className="director-container">
        <div className="director-item-left">
          <div className="director-box1">
            <h3 className="director-name">Name</h3>
            <h3 className="director-address">Address</h3>
            <h3 className="director-num">Phone Number</h3>
            <h3 className="director-Email">Email ID</h3>
            <h3 className="director-gst">GST Number</h3>
            <h3 className="director-pan">PAN Number</h3>
            <h3 className="director-documents">Add Documents</h3>
          </div>
          <div className="director-box2">
            <input className="admin-text4"></input>
            <input className="admin-address4"></input>
            <input className="admin-text4"></input>
            <input className="admin-text4"></input>
            <input className="admin-text4"></input>
            <button className="button-upload">Upload</button>{" "}
            <i className="upload-icon">
              <MdOutlineDownloadForOffline />
            </i>
            <br></br>
            <button className="upload-directorfile">Gst Pdf.pdf</button>
            <br></br>
            <input className="admin-text4"></input>
            <button className="button-upload">Upload</button>
            <i className="upload-icon">
              <MdOutlineDownloadForOffline />
            </i>
            <br></br>
            <button className="upload-directorfile">pan Pdf.pdf</button>
            <br></br>
            <select className="admin-select">
              <option>Add Documents</option>
              <option>GST Number</option>
              <option>PAN Number</option>
              <option>None</option>
            </select>
            <br></br>
            <p className="director-download">
              <b>
                <i className="upload-icon">
                  <MdOutlineDownloadForOffline />
                </i>
                Download Complete director #1 Profile
              </b>
            </p>
          </div>
        </div>
        <hr className="line"></hr>

        <div className="director-item-right">
          <div className="director-box3">
            <div className="director-addonbox">
              <i className="director-icon">
                <AiOutlinePlus />
                <p className="director-para">
                  Add more <br></br>directors
                </p>
              </i>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-container">
        <div className="flex-item-left">Director #1</div>
        <div class="flex-item-right">Director #2</div>
      </div>
      <div className="director-container">
        <div className="director-item-left">
          <div className="director-box1">
            <h3 className="director-name">Name</h3>
            <h3 className="director-address">Address</h3>
            <h3 className="director-num">Phone Number</h3>
            <h3 className="director-Email">Email ID</h3>
            <h3 className="director-gst">GST Number</h3>
            <h3 className="director-pan">PAN Number</h3>
            <h3 className="director-documents">Add Documents</h3>
          </div>
          <div className="director-box2">
            <input className="admin-text4"></input>
            <input className="admin-address4"></input>
            <input className="admin-text4"></input>
            <input className="admin-text4"></input>
            <input className="admin-text4"></input>
            <button className="button-upload">Upload</button>{" "}
            <i className="upload-icon">
              <MdOutlineDownloadForOffline />
            </i>
            <br></br>
            <button className="upload-directorfile">Gst Pdf.pdf</button>
            <br></br>
            <input className="admin-text4"></input>
            <button className="button-upload">Upload</button>
            <i className="upload-icon">
              <MdOutlineDownloadForOffline />
            </i>
            <br></br>
            <button className="upload-directorfile">pan Pdf.pdf</button>
            <br></br>
            <select className="admin-select">
              <option>Add Documents</option>
              <option>GST Number</option>
              <option>PAN Number</option>
              <option>None</option>
            </select>
            <br></br>
            <p className="director-download">
              <b>
                <i className="upload-icon">
                  <MdOutlineDownloadForOffline />
                </i>
                Download Complete director #1 Profile
              </b>
            </p>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="director-item-left">
          <div className="director-container">
            <div className="director-box1">
              <h3 className="director-name">Name</h3>
              <h3 className="director-address">Address</h3>
              <h3 className="director-num">Phone Number</h3>
              <h3 className="director-Email">Email ID</h3>
              <h3 className="director-gst">GST Number</h3>
              <h3 className="director-pan">PAN Number</h3>
              <h3 className="director-documents">Add Documents</h3>
            </div>
            <div className="director-box2">
              <input className="admin-text4"></input>
              <input className="admin-address4"></input>
              <input className="admin-text4"></input>
              <input className="admin-text4"></input>
              <input className="admin-text4"></input>
              <button className="button-upload">Upload</button>{" "}
              <i className="upload-icon">
                <MdOutlineDownloadForOffline />
              </i>
              <br></br>
              <button className="upload-directorfile">Gst Pdf.pdf</button>
              <br></br>
              <input className="admin-text4"></input>
              <button className="button-upload">Upload</button>
              <i className="upload-icon">
                <MdOutlineDownloadForOffline />
              </i>
              <br></br>
              <button className="upload-directorfile">pan Pdf.pdf</button>
              <br></br>
              <select className="admin-select">
                <option>Add Documents</option>
                <option>GST Number</option>
                <option>PAN Number</option>
                <option>None</option>
              </select>
              <br></br>
              <p className="director-download">
                <b>
                  <i className="upload-icon">
                    <MdOutlineDownloadForOffline />
                  </i>
                  Download Complete director #1 Profile
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="date-container">
        <p className="date-para"> Choose Date - <input  className="date" type="date"></input></p>

        <button className="date-button">ROC</button><i className="date-icon"><BiRightArrow/></i><br></br>
        <button className="date-button">Income Tax</button><i className="date-icon"><BiRightArrow/></i><br></br>
        <button className="date-button">Form 16</button><i className="date-icon"><BiRightArrow/></i>
        
        <div className="date-flex">
         
           <div className="date-flex-left">
           
               <div className="date-roc">
                   <p className="date-para">ROC <i className="date-icon"><BiRightArrow/></i></p>
               </div>
            </div>


          <div className="date-flex-right">
           <div className="date-right1">
             <div className="date-flex1"> 
              Company Name - what ever user enter in company Details it comes in this box
             </div>
             <div className="date-flex1"> 
              Name -
             </div>
           </div>
           <div className="date-right1">
             <div className="date-flex1"> 
              Name -
             </div>
             <div className="date-flex1"> 
             Name -
             </div>
           </div>

           <div className="date-right1">
            <div className="date-flex1"> 
               Name -
           </div>
            <div className="date-flex1"> 
            Name -
            </div>
          </div>
          </div>
        </div>
     </div>
    </div>
  );
}
