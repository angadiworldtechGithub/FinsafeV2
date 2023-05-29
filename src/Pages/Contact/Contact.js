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

      <div className="contact_section">
        <div className="box_text">
         
        </div>

        <div className="box_text1">
         
        </div>

        <div className="box_text2">
          
        </div>
      </div>

      <div className="contact_section">
        <div className="contact_text">
          <h2>How can we help you today?</h2>
        </div>

        <div className="contact_text1">
          <div className="box_txt">
            <address>
              <h3 style={{ fontWeight: "60px" }}>YSR Kadapa</h3>
              <p>
                Corporate Address: &nbsp;<br></br> Opp : Court Complex,(PVR
                Associates)<br></br>RAJAMPET-516115,YSR Kadapa Dist,A.P.
              </p>
            </address>
            <div class="mail_box">
              <div class="icon">
                <i
                  class="fa fa-envelope"
                  aria-hidden="true"
                  style={{ fontsize: "25px" }}
                ></i>{" "}
              </div>
              <div class="text_mail">
                <p>
                  <a href="mailto:support@finsafe.in"> support@finsafe.in</a>
                </p>
              </div>
            </div>
            <a href=" " target="_blank">
              View Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
