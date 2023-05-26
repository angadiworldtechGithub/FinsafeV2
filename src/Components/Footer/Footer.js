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
          <div className='social-icons'>
               <Link to="/"><i className="fab fa-facebook-f"></i></Link>
               <Link to="/"><i className="fab fa-twitter"></i></Link>
               <Link to="/"><i className="fab fa-whatsapp"></i></Link>
               <Link to="/"><i className="fab fa-instagram"></i></Link>
          </div>
     </div>
     </div>
       <div className='col'>
            <h3>Popular Services <div className='underline'><span></span></div></h3>
            <ul className='footer_list'>
               <li><Link to="">Take Expert Advice</Link></li>
               <li><Link to="">Start Your Business</Link></li>
               <li><Link to="">CFO Services</Link></li>
               <li><Link to="">Accounts & Audit</Link></li>
               <li><Link to="">Loans & Capital</Link></li>
               <li><Link to="">Business Legal Services</Link></li>
               <li><Link to="">Statutory Compliances</Link></li>
               <li><Link to=""></Link>Pesonal Services</li>
          </ul>
       </div>
       <div className='col'>
          <h3>COMPANY <div className='underline'><span></span></div></h3>
          <ul className='footer_list'>
              <li><Link to="">Home</Link></li>
              <li><Link to="">About Us</Link></li>
              <li><Link to="">Contact</Link></li>
          </ul>
       </div>
       <div className='col'>
           <h3>Terms & Policies<div className='underline'><span></span></div></h3>
           <ul className='footer_list'>
              <li><Link to="">Privacy Policy</Link></li>
              <li><Link to="">Terms & Conditions</Link></li>
          </ul>
       </div>
   </div>
   <div className="line_break"></div>
   <div className="copyright">
    <p className="color_white">
        Copyright © 2023 <Link to="/index">Finsafe</Link>
    </p>
   </div>
</div>


)

}





