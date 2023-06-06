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
    <div class="contact"  
    style={{
      paddingBottom: "0",
      paddingTop: "40px",
      marginBottom: "30px",
    }}>

      <div class="contact1">
      
      <center>
      <i className="fa fa-map-marker" aria-hidden="true"></i> 
       
       <p><b style={{fontSize:'19px'}}>YSR Kadapa</b></p> 
        Opp : Court Complex,<br></br>
        (PVR Associates)
        RAJAMPET-516115,<br></br>
        YSR Kadapa Dist,<br></br>
        Andhra Pradesh
       </center>
      
      </div>
      <div class="contact1">
      <center>
      <i className="fa fa-envelope-o" aria-hidden="true"></i>
        <h2><b>finsafe@gmail.com</b></h2>
      </center>
      </div>
      <div class="contact1">
      <center><i className="fa fa-mobile" aria-hidden="true"></i>
      <h2><b>+91 0000000000</b></h2>
      </center>
      </div>
   </div>
   </div>

   <div className="contact"> 
     
       <div className="contact2">
           <div className="row">
              <h1>Talk to us!</h1>
                  <p className="para">Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                  <input type="text"  className="form-control form-group"placeholder="Name" />
                  <input type="text"  className="form-control form-group" placeholder="Email" />
                  <textarea   class="form-control form-group" placeholder="Message"></textarea>
                  <button class="contact_form_submit">Send</button>
                </div>
       </div>

      <div className="contact2">
       <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Opp : Court Complex, (PVR Associates)  RAJAMPET-516115, YSR Kadapa Dist, Andhra Pradesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="400" frameborder="0" style={{border:'0'}}></iframe>
     </div>

  </div>

  </div>
    
  );
}
