import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div style={{ position: "relative", backgroundColor: "#e6e6e6" }}>
        <img
          src="assets/images/contact.png"
          alt="contact_us_image"
          width="100%"
        />
      </div>

      <div className="contact-box">
       <center>
         <h1 className="contact-boxheader">GET IN TOUCH</h1>
         <h3 className="contact-boxtext1"><i style={{padding:"10px 10px 10px 10px" ,color:"#072f5f"}} className="fa fa-mobile" aria-hidden="true"></i><u className="contact-boxtext">Phone</u> : +91 9901576612</h3>
         <h3 className="contact-boxtext1"><i style={{padding:"10px 10px 10px 10px",color:"#072f5f"}}  className="fa fa-envelope-o" aria-hidden="true"></i><u className="contact-boxtext">Email</u> : contact@finsafegroup.com<br></br>admin@finsafegroup.com</h3>
         <h3 className="contact-boxtext1"><i style={{padding:"10px 10px 10px 10px",color:"#072f5f"}}  className="fa fa-map-marker" aria-hidden="true"></i><u className="contact-boxtext">Address</u> : No.1574/22,2nd Cross,HBCS Layout
         Ramanjaneya Nagar,Uttarahalli
         Bangalore-560061
         Karnataka, India
         </h3>
         </center>
      </div>

    {/*   <div className="contact_section">
        <div
          class="contact"
          style={{
            paddingBottom: "0",
            paddingTop: "40px",
            marginBottom: "30px",
          }}
        >
          <div class="contact1">
            <center>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p>
                <b style={{ fontSize: "19px" }}>Office Address</b>
              </p>
              No.1574/22,2nd Cross,HBCS Layout<br></br>
              Ramanjaneya Nagar,Uttarahalli<br></br>
              Bangalore-560061<br></br>
              Karnataka, India
            </center>
          </div>
          <div class="contact1">
            <center>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <h2>
                <b>contact@finsafegroup.com</b>
              </h2>
              <h2>
                <b>admin@finsafegroup.com</b>
              </h2>
            </center>
          </div>
          <div class="contact1">
            <center>
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <h2>
                <b>+91 9901576612</b>
              </h2>
            </center>
          </div>
        </div>
        </div>*/}

      <div className="contact">
        <div className="contact2">
          <div className="row">
            <h1  className="contact-boxheader">Talk to us!</h1>
            <p className="para">
              Feel Free to contact us any time. We will get back to you as soon
              as we can!.
            </p>
            <input
              type="text"
              className="form-control form-group"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control form-group"
              placeholder="Email"
            />
            <textarea
              class="form-control form-group"
              placeholder="Message"
            ></textarea>
            <button class="contact_form_submit">Send</button>
          </div>
        </div>

        <div className="contact2">
          <iframe
            title="company_location"
            src="https://maps.google.com/maps?q=No.1574/22,2nd+Cross,HBCS+Layout+Ramanjaneya+Nagar,Uttarahalli+Bangalore-560061+Karnataka,+India&output=embed"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
