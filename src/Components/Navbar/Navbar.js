import React from 'react';
import './Navbar.css';
import { MdMenu,  MdArrowDropDown } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown';

export const addHide = (classString) => {
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

            <Dropdown 
              isActive={menu['takeExpAdv']} 
              setIsActive={()=>{
              setMenu({...menu,takeExpAdv:!menu['takeExpAdv']
              })}} 
              headerName='Take Expert Advice' 
              subHeaders={[{link:'/',title:'Talk to Business Advisory Analyst'},
                           {link:'/',title:'Talk to Certified Financial Planner'},
                           {link:'/',title:'Talk to Chartered Accountant'},
                           {link:'/',title:'Talk to Cost Accountant'},
                           {link:'/',title:'Talk to Legal Advisor'},
                           {link:'/',title:'Talk to Cyber Crime Expert'},
                           {link:'/',title:'Talk to Company Secretory'} ]}

            />

            <Dropdown 
              isActive={menu['startYoBu']} 
              setIsActive={()=>{
              setMenu({...menu,startYoBu:!menu['startYoBu']
              })}} 
              headerName='Start Your Business' 
              subHeaders={[{link:'/',title:'Incorporation'},
                           {link:'/',title:'Company'},
                           {link:'/',title:'Limited Liability Partnership(LLP)'},
                           {link:'/',title:'Partnership Firm'},
                           {link:'/',title:'Propreitorship'},
                           {link:'/',title:'Trust'},
                           {link:'/',title:'Co-operative Societies'} ]}

            />

            
            <Dropdown 
              isActive={menu['cfoServ']} 
              setIsActive={()=>{
              setMenu({...menu,cfoServ:!menu['cfoServ']
              })}} 
              headerName='CFO Services' 
              subHeaders={[{link:'/',title:'Business Transaction Advisory'},
                           {link:'/',title:'Mergers & Acquisitions'},
                           {link:'/',title:'Joint Ventures'},
                           {link:'/',title:'Capital Structuring'},
                           {link:'/',title:'Banking relationship'},
                           {link:'/',title:'Management Reporting'},
                           {link:'/',title:'Invenstor relationshop management'},
                           {link:'/',title:'Internal System & Processes design(SOPs)'} ]}

            />
            
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