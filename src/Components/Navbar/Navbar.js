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
                link: "/businessadvisory",
                title: "Talk to Business Advisory Analyst",
              },
              {
                link: "/certifiedfinancial",
                title: "Talk to Certified Financial Planner",
              },
              {
                link: "/charteredaccountant",
                title: "Talk to Chartered Accountant",
              },
              { link: "/costaccountant", title: "Talk to Cost Accountant" },
              { link: "/legaladvisor", title: "Talk to Legal Advisor" },
              { link: "/cyberCrime ", title: "Talk to Cyber Crime Expert" },
              {
                link: "/CompanySecretory",
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
              },
              {
                link: "/",
                title: "Partnership Firm",
                subHeaders: [
                  { link: "/incorporation", title: "Incorporation" },
                ],
              }, // Add {link: "",title: ""} object here
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
            headerLink="/CfoServices"
            subHeaders={[
              {
                link: "/BusinessTransaction",
                title: "Business Transaction Advisory",
              },
              { link: "/MergersAcquisitions", title: "Mergers & Acquisitions" },
              { link: "/JointVentures", title: "Joint Ventures" },
              { link: "/CapitalStructuring", title: "Capital Structuring" },
              { link: "/Bankingrelationship", title: "Banking relationship" },
              {
                link: "/BusinessPlanning",
                title: "Business Planning & Forcasting",
              },
              { link: "/WorkingCapital", title: "Working Capital Management" },
              { link: "/ManagementReporting", title: "Management Reporting" },
              {
                link: "/Investorrelationship",
                title: "Investor relationship management",
              },
              {
                link: "/InternalSystem",
                title: "Internal System & Processes design(SOPs)",
              },
            ]}
          />

          <Dropdown
            isActive={menu["accAud"]}
            setIsActive={() => {
              setMenu({ ...INITIAL_NAVBAR_STATE, accAud: !menu["AccAud"] });
            }}
            headerName="Accounts & Audit"
            headerLink="/accountsaudit"
            subHeaders={[
              { link: "/accounts", title: "Accounts" },
              { link: "/audit", title: "Audit" },
            ]}
          />

          <Dropdown
            isActive={menu["loanCap"]}
            setIsActive={() => {
              setMenu({ ...INITIAL_NAVBAR_STATE, loanCap: !menu["loanCap"] });
            }}
            headerName="Loans & Capital"
            headerLink="/loanscapital"
            subHeaders={[
              { link: "/talktoexperts", title: "Talk to Expert" },
              { link: "/workingcapitalloans", title: "Working Capital Loans" },
              { link: "/businesstermloans", title: "Business Term Loans" },
              { link: "/loansassets", title: "Loans on Assets" },
              { link: "/msmeloans", title: "MSME Loans" },
              {
                link: "/projectreportspreparation",
                title: "Project report preparation",
              },
              {
                link: "/loandocumentationsupport",
                title: "Loan Documentation Support",
              },
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
            headerLink="/businesslegalservices"
            subHeaders={[
              {
                link: "/jointventure",
                title: "Joint Development & Joint Venture agreement drafting",
              },
              {
                link: "/businesslegaldrafting",
                title: "Business Legal agreement drafting",
              },
              { link: "/landtitle", title: "Land Title Due diligence" },
              { link: "/landlitigation", title: "Land Litigation assistance" },
              {
                link: "/customeragreement",
                title: "Customer Agreement drafting",
              },
              {
                link: "/customerlitigation",
                title: "Customer litigation support",
              },
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
            headerLink="/personalservice"
            subHeaders={[
              { link: "/", title: "Talk to Expert" },
              { link: "/investment", title: "Investment planning" },
              { link: "/estate", title: "Estate management services" },
              { link: "/tax", title: "Tax Planning" },
              { link: "/incometax", title: "Income tax returns" },
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
