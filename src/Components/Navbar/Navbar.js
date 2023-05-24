import React from 'react';
import './Navbar.css';
import { MdMenu,  MdArrowDropDown } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown';

export const addHideMobile = (classString) => {
  return classString + " hide_mobile";
};

export const addHide = (classString) => {
  return classString + " hide";
};

const INITIAL_NAVBAR_STATE = {
  takeExpAdv: false,
  startYoBu: false,
};

function Navbar() {
  const [collapse, setCollapse] = useState(true);
  const [menu, setMenu] = useState(INITIAL_NAVBAR_STATE);

  let headerClass;

  if (collapse) {
    headerClass = addHideMobile("header_section");
  } else {
    headerClass = "header_section";
  }

  return (
     <div>
       <div className="topheader">
         <div className="socialicons" style={{display:'flex',width:'20%',justifyContent:'space-between',marginLeft:"20px"}}> 
              <div><Link to="#"><IoLogoWhatsapp className="whatsapp"/></Link></div>
              <div><Link to="#"><BsFacebook className="facebook"/></Link></div>
              <div><Link to="#"><BsLinkedin className="linkedin"/></Link></div>
              <div><Link to="#"><HiMail className="mail"/></Link></div>
              <div><Link to="#"><BsFillTelephoneFill className="phone"/></Link></div>
         </div>
       </div>

       <div className='midheader'>
         <img src='assets/images/logo.png' alt='logonot loaded' height='100%' width='380px'/>
       </div>
    
    
      <div className="down_header_2 outer_flex">
        <div className={headerClass}>
          <div className="navbar_text navbar_text_mobile">Home</div>

          <Dropdown
            isActive={menu["takeExpAdv"]}
            setIsActive={() => {
              setMenu({
                ...INITIAL_NAVBAR_STATE,
                takeExpAdv: !menu["takeExpAdv"],
              });
            }}
            headerName="Take Expert Advice"
            headerLink="/"
            subHeaders={[
              { link: "/", title: "Talk to Business Advisory Analyst" },
              { link: "/", title: "Talk to Certified Financial Planner" },
              { link: "/", title: "Talk to Chartered Accountant" },
              { link: "/", title: "Talk to Cost Accountant" },
              { link: "/", title: "Talk to Legal Advisor" },
              { link: "/", title: "Talk to Cyber Crime Expert" },
              { link: "/", title: "Talk to Company Secretory" },
            ]}
          />

          <Dropdown
            isActive={menu["startYoBu"]}
            setIsActive={() => {
              setMenu({
                ...INITIAL_NAVBAR_STATE,
                startYoBu: !menu["startYoBu"],
              });
            }}
            headerName="Start Your Business"
            headerLink="/"
            subHeaders={[
              { link: "/", title: "Incorporation" },
              { link: "/", title: "Company" },
              { link: "/", title: "Limited Liability Partnership(LLP)" },
              { link: "/", title: "Partnership Firm" },
              { link: "/", title: "Propreitorship" },
              { link: "/", title: "Trust" },
              { link: "/", title: "Co-operative Societies" },
            ]}
          />

          <Dropdown
            isActive={menu["cfoServ"]}
            setIsActive={() => {
              setMenu({ ...INITIAL_NAVBAR_STATE, cfoServ: !menu["cfoServ"] });
            }}
            headerName="CFO Services"
            headerLink="/"
            subHeaders={[
              { link: "/", title: "Business Transaction Advisory" },
              { link: "/", title: "Mergers & Acquisitions" },
              { link: "/", title: "Joint Ventures" },
              { link: "/", title: "Capital Structuring" },
              { link: "/", title: "Banking relationship" },
              { link: "/", title: "Management Reporting" },
              { link: "/", title: "Invenstor relationshop management" },
              { link: "/", title: "Internal System & Processes design(SOPs)" },
            ]}
          />

          <div className="navbar_text navbar_text_mobile">Accounts & Audit</div>
          <div className="navbar_text navbar_text_mobile">Loans & Capital</div>
          <div className="navbar_text navbar_text_mobile">
            Business legal Services
          </div>
          <div className="navbar_text navbar_text_mobile">
            Statutory Compliances
          </div>
          <div className="navbar_text navbar_text_mobile">
            Personal Services
          </div>
          <div className="navbar_text navbar_text_mobile">Contact Us</div>
        </div>
        <MdMenu
          className="navbar_icon"
          onClick={() => {
            setCollapse(!collapse);
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
