import React from "react";
import "./Navbar.css";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";

export const addHideMobile = (classString) => {
  return classString + " hide_mobile";
};

export const addHide = (classString) => {
  return classString + " hide";
};

const INITIAL_NAVBAR_STATE = {
  takeExpAdv: false,
  startYoBu: false,
  cfoServ: false,
  loanCap: false,
  busLegSer: false,
  persServ: false,
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
    <>
      <div className="navbar">
        <div className={headerClass}>
          <div className="navbar_text navbar_text_mobile">
            <Link to="/" className="navbar_link">
              Home
            </Link>
          </div>
          <div className="navbar_text navbar_text_mobile">
            <Link to="/about" className="navbar_link">
              About Us
            </Link>
          </div>

          <Dropdown
            isActive={menu["takeExpAdv"]}
            setIsActive={() => {
              setMenu({
                ...INITIAL_NAVBAR_STATE,
                takeExpAdv: !menu["takeExpAdv"],
              });
            }}
            headerName="Take Expert Advice"
            headerLink="/take_expert_advice"
            subHeaders={[
              {
                link: "/business_advisory",
                title: "Talk to Business Advisory Analyst",
              },
              {
                link: "/certified_financial ",
                title: "Talk to Certified Financial Planner",
              },
              {
                link: "/chartered_accountant",
                title: "Talk to Chartered Accountant",
              },
              { link: "/cost_accountant", title: "Talk to Cost Accountant" },
              { link: "/legal_advisor", title: "Talk to Legal Advisor" },
              { link: "/cyber_crime ", title: "Talk to Cyber Crime Expert" },
              {
                link: "/Company_Secretory",
                title: "Talk to Company Secretory",
              },
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
              {
                link: "/",
                title: "Limited Liability Partnership(LLP)",
                subHeaders: [], // Add {link: "",title: ""} object here
              },
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
            headerLink="/Cfo_Services"
            subHeaders={[
              { link: "/Business_Transaction", title: "Business Transaction Advisory" },
              { link: "/Mergers_Acquisitions", title: "Mergers & Acquisitions" },
              { link: "/Joint_Ventures", title: "Joint Ventures" },
              { link: "/Capital_Structuring", title: "Capital Structuring" },
              { link: "/Banking_relationship", title: "Banking relationship" },
              { link: "/Business_Planning",title: "Business Planning & Forcasting"},
              { link: "/Working_Capital",title:"Working Capital Management"},
              { link: "/Management_Reporting", title: "Management Reporting" },
              { link: "/Investor_relationship", title: "Investor relationship management" },
              { link: "/Internal_System", title: "Internal System & Processes design(SOPs)" },
            ]}
          />

          <div className="navbar_text navbar_text_mobile">Accounts & Audit</div>

          <Dropdown
            isActive={menu["loanCap"]}
            setIsActive={() => {
              setMenu({ ...INITIAL_NAVBAR_STATE, loanCap: !menu["loanCap"] });
            }}
            headerName="Loans & Capital"
            headerLink="/"
            subHeaders={[
              { link: "/", title: "Talk to Expert" },
              { link: "/", title: "Working Capital Loans" },
              { link: "/", title: "Business Term Loans" },
              { link: "/", title: "Loans on Assets" },
              { link: "/", title: "MSME Loans" },
              { link: "/", title: "Project report preparation" },
              { link: "/", title: "Loan Documentation Support" },
            ]}
          />

          <Dropdown
            isActive={menu["busLegSer"]}
            setIsActive={() => {
              setMenu({
                ...INITIAL_NAVBAR_STATE,
                busLegSer: !menu["busLegSer"],
              });
            }}
            headerName=" Business legal Services "
            headerLink="/"
            subHeaders={[
              {
                link: "/",
                title: "Joint Development & Joint Venture agreement drafting",
              },
              { link: "/", title: "Business Legal agreement drafting" },
              { link: "/", title: "Land title Due diligence" },
              { link: "/", title: "Land Litigation assistance" },
              { link: "/", title: "Customer Agreement drafting" },
              { link: "/", title: "Customer litigation support" },
            ]}
          />

          <div className="navbar_text navbar_text_mobile">
            Statutory Compliances
          </div>

          <Dropdown
            isActive={menu["persServ"]}
            setIsActive={() => {
              setMenu({ ...INITIAL_NAVBAR_STATE, persServ: !menu["persServ"] });
            }}
            headerName="Personal Services"
            headerLink="/personal_service"
            subHeaders={[
              { link: "/", title: "Talk to Expert" },
              { link: "/investment", title: "Investment planning" },
              { link: "/estate", title: "Estate management services" },
              { link: "/tax", title: "Tax Planning" },
              { link: "/income_tax", title: "Income tax returns" },
              { link: "/individual", title: "Individual Accounts maintenance" },
            ]}
          />

          <div className="navbar_text navbar_text_mobile">
            <Link to="/contact" className="navbar_link">
              Contact Us
            </Link>
          </div>
        </div>
        <MdMenu
          className="navbar_icon"
          onClick={() => {
            setCollapse(!collapse);
          }}
        />
      </div>
    </>
  );
}

export default Navbar;
