import React  from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";


export default function Footer() {
return(

<div className="footer" >
   <div className="row">
     <div className='col'>
         <img src="assets/images/logo.png" className='footer_logo'/>
         <div className='col'>
         {/*<form>
             <i class=" far fa-envelope"></i>
             <input type="email" placeholder="Enter your email id" required></input>
             <botton type="submit"><i classname="fas fa-arrow-right"></i></botton>
      </form>*/}
          <div className='social-icons'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-instagram"></i>
          </div>
     </div>
     
      </div>
       <div className='col'>
            <h3>Popular Services <div className='underline'><span></span></div></h3>
            <ul>
               <li><a href="">Take Expert Advice</a></li>
               <li><a href="">Start Your Business</a></li>
               <li><a href="">CFO Services</a></li>
               <li><a href="">Accounts & Audit</a></li>
               <li><a href="">Loans & Capital</a></li>
               <li><a href="">Business Legal Services</a></li>
               <li><a href="">Statutory Compliances</a></li>
               <li><a href=""></a>Pesonal Services</li>
      

          </ul>
       </div>
       <div className='col'>
          <h3>COMPANY <div className='underline'><span></span></div></h3>
          <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact</a></li>
        

          </ul>
       </div>
       <div className='col'>
           <h3>Terms & Policies<div className='underline'><span></span></div></h3>
           <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms & Conditions</a></li>
          </ul>
       </div>

      {/* <div className='col'>
           {/*<form>
               <i class=" far fa-envelope"></i>
               <input type="email" placeholder="Enter your email id" required></input>
               <botton type="submit"><i classname="fas fa-arrow-right"></i></botton>
        </form>
            <div className='social-icons'>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-whatsapp"></i>
                  <i className="fab fa-instagram"></i>
            </div>
    </div>*/}

   </div>
   <hr></hr>
   <div className="copyright">
   <p className="color_white">
       Copyright © 2023 <a to="/index">Finsafe</a>
   </p>
   </div>
</div>


)

}





