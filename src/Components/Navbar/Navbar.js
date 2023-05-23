import React from 'react';
import './Navbar.css';
import { MdMenu,  MdArrowDropDown } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom'

const addHide = (classString) => {
  return classString+' smooth_hide'
}

function Navbar() {

  const [collapse, setCollapse] = useState(false)
  const [ menu, setMenu ] = useState({
    takeExpAdv:false,
    startYoBu:false
  })
  
  let headerClass;

  if(collapse){
    headerClass = addHide('header_section')
  } else {
    headerClass = 'header_section'
  }

  return (
     <div>
       <div className="topheader">
         <div><Link to="#"><BsWhatsapp className="whatsapp"/></Link></div>
       </div>

       <div className='midheader'>
         
       
       </div>
    
    
      <div className="down_header_2 outer_flex">
          <div className={headerClass}>
            <div className='navbar_text' >Home</div>

              <div className="navbar_text">
                <Link to="/" className='navbar_link'>
                Take Expert Advice
                </Link>
                <MdArrowDropDown className="icon" onClick={()=>{
                  setMenu({...menu,takeExpAdv:!menu['takeExpAdv']
                  })}}/>
              </div>
        
              <div className={menu['takeExpAdv'] ? 'dropdown' : addHide('dropdown')}>
                  <ul>
                    <li><Link to="/" className='navbar_link'>Talk to Business Advisory Analyst</Link></li>
                    <li><Link to="/" className='navbar_link'></Link>Talk to Certified Financial Planner</li>
                    <li><Link to="/" className='navbar_link'></Link>Talk to Chartered Accountant</li>         
                    <li><Link to="/" className='navbar_link'></Link>Talk to Cost Accountant</li>
                    <li><Link to="/" className='navbar_link'></Link>Talk to Legal Advisor</li>
                    <li><Link to="/" className='navbar_link'></Link>Talk to Cyber Crime Expert</li>
                    <li><Link to="/" className='navbar_link'></Link>Talk to Company Secretory</li>
                </ul>
              </div>
          
            <div className='navbar_text'>
              <Link to='/' className='navbar_link'>
              Start Your Business</Link>
              <MdArrowDropDown className="icon" onClick={()=>{
                setMenu({...menu,startYoBu:!menu['startYoBu']
                })}}/>
            </div>

            <div className={menu['startYoBu'] ? 'dropdown' : addHide('dropdown')}>
                <ul>
                  <li><Link to="/" className='navbar_link'><b>Incorporation</b></Link></li> 
                  <li><Link to="/" className='navbar_link'>Company</Link></li>
                  <li><Link to="/" className='navbar_link'>Limited Liability Partnership(LLP)</Link></li>
                  <li><Link to="/" className='navbar_link'>Partnership Firm</Link></li>         
                  <li><Link to="/" className='navbar_link'>Propreitorship</Link></li>
                  <li><Link to="/" className='navbar_link'>Trust</Link></li>
                  <li><Link to="/" className='navbar_link'>Co-operative Societies</Link></li>
               </ul>
            </div>


            <div className='navbar_text'>CFO Services</div>
            <div className='navbar_text'>Accounts & Audit</div>
            <div className='navbar_text'>Loans & Capital</div>
            <div className='navbar_text'>Business legal Services</div>
            <div className='navbar_text'>Statutory Compliances</div>
            <div className='navbar_text'>Personal Services</div>
            <div className='navbar_text'>Contact Us</div>
          </div>         
          <MdMenu className='navbar_icon' onClick={()=>{
            setCollapse(!collapse)
          }}/>
     </div>
    </div>
  )
}

export default Navbar