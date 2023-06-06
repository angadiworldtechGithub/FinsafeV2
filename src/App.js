import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import CfoServices from "./Pages/CfoServices/CfoServices";
import {
  Bankingrelationship,
  BusinessTransaction,
  CapitalStructuring,
  InternalSystem,
  Investorrelationship,
  JointVentures,
  WorkingCapital,
  BusinessPlanning,
  ManagementReporting,
  MergersAcquisitions,
} from "./Pages/CfoServices";

import StartYourBusiness from "./Pages/StartYourBusiness";

import{
 DormantCompany,
 NidhiCompany,
 OnePersonCompany,
 PrivateLimitedCompany,
 ProducerCompany,
 PublicLimitedCompany,
 SectionCompany,
 CompanyServices
} from "./Pages/StartYourBusiness/CompanyServices";

import{
  Fssai,
  Gst,
  IecCode,
  Msme,
  Pan,
  Patent,
  Pf,
  Tan,
  Trademark,
  StatutoryRegistration,
  Professional
 } from "./Pages/StartYourBusiness/StatutoryRegistration";


 import{
  Company,
  InCorporation,
  Llp,
  Partnership,
  Propreitorship,
  Societies,
  Trust
 } from "./Pages/StartYourBusiness/Incorporation";
 
import LoansCapital from "./Pages/LoansCapital/LoansCapital";

import {
  BusinessTermLoans,
  LoanAssets,
  LoanDocumentationSupport,
  MsmeLoans,
  ProjectReportsPreparation,
  TalkToExperts,
  WorkingCapitalLoans
} from "./Pages/LoansCapital";

import {
  BusinessAdvisory,
  CertifiedFinancial,
  CharteredAccountant,
  CompanySecretory,
  CostAccountant,
  CyberCrime,
  LegalAdvisor,
} from "./Pages/TakeExpertAdvice";

import{
AssetsAccounting,
Bookkeeping,
HrFunction,
Payroll,
Quarterly,
Receivable,
Regulartax,
Secretarial,
Vendor
} from "./Pages/AccountsAudit";


import BusinessLegalServices from "./Pages/BusinessLegalServices";
import{
     BusinessLegalDrafting,
     CustomerAgreement,
     CustomerLitigation,
     JointVenture,
     LandLitigation,
     LandTitle,
} from "./Pages/BusinessLegalServices";
import PersonalService from "./Pages/PersonalService"

import {
  Investment,
  Estate,
  Tax,
  Individual,
  IncomeTax,
} from "./Pages/PersonalService";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import TakeExpertAdvice from "./Pages/TakeExpertAdvice";


const Base = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/takeexpertadvice",
        element: <TakeExpertAdvice />,
      },
      {
        path: "/businessadvisory",
        element: <BusinessAdvisory />,
      },
      {
        path: "/certifiedfinancial",
        element: <CertifiedFinancial />,
      },
      {
        path: "/charteredaccountant",
        element: <CharteredAccountant />,
      },
      {
        path: "/companysecretory",
        element: <CompanySecretory />,
      },
      {
        path: "/costaccountant",
        element: <CostAccountant />,
      },
      {
        path: "/cybercrime",
        element: <CyberCrime />,
      },
      {
        path: "/legaladvisor",
        element: <LegalAdvisor />,
      },
      {
        path: "/cfoservices",
        element: <CfoServices />,
      },
      {
        path: "/bankingrelationship",
        element: <Bankingrelationship />,
      },
      {
        path: "/businesstransaction",
        element: <BusinessTransaction />,
      },
      {
        path: "/loanscapital",
        element: <LoansCapital/>,
      },
      {
        path: "/businesstermloans",
        element: < BusinessTermLoans/>,
      },
      {
        path: "/talktoexperts",
        element: < TalkToExperts/>,
      },
      {
        path: "/loandocumentationsupport",
        element: <LoanDocumentationSupport/>,
      },
      {
         path: "/loansassets",
         element:<LoanAssets/>
      },
      {
        path: "/msmeloans",
        element: <MsmeLoans />,
      },
      {
        path: "/projectreportspreparation",
        element: <ProjectReportsPreparation />,
      },
      {
        path: "/capitalstructuring",
        element: <CapitalStructuring />,
      },
      {
        path: "/internalsystem",
        element: <InternalSystem />,
      },
      {
        path: "/businessplanning",
        element: <BusinessPlanning />,
      },
      {
        path: "/investorrelationship",
        element: <Investorrelationship />,
      },
      {
        path: "/workingcapital",
        element: <WorkingCapital />,
      }, 
      {
        path: "/workingcapitalloans",
        element: <WorkingCapitalLoans />,
      },
      {
        path: "/jointventures",
        element: <JointVentures />,
      },
      {
        path: "/managementreporting",
        element: <ManagementReporting />,
      },
      {
        path: "/mergersacquisitions",
        element: <MergersAcquisitions />,
      },
      {
        path: "/personalservice",
        element: <PersonalService />,
      },
      {
        path: "/investment",
        element: <Investment />,
      },
      {
        path: "/estate",
        element: <Estate />,
      },
      {
        path: "/incometax",
        element: <IncomeTax />,
      },
      {
        path: "/tax",
        element: <Tax />,
      },
      {
        path: "/estate",
        element: <Estate />,
      },
      {
        path: "/individual",
        element: <Individual />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/businesslegalservices",
        element: <BusinessLegalServices />,
      },
      {
        path: "/businesslegaldrafting",
        element: <BusinessLegalDrafting/>,
      },
      {
        path: "/customeragreement",
        element: <CustomerAgreement />,
      },
      {
        path: "/customerlitigation",
        element: <CustomerLitigation />,
      },
      {
        path: "/jointventure",
       element: <JointVenture />,
      },
      {
        path: "/landlitigation",
        element: <LandLitigation />,
      },
      {
        path: "/landTitle",
        element: <LandTitle />,
      },
      {
        path: "/dormantcompany",
        element: <DormantCompany />,
      },
      {
        path: "/nidhicompany",
        element: <NidhiCompany />,
      },
      {
        path: "/onepersoncompany",
        element: <OnePersonCompany/>,
      },
      {
        path: "/privatelimitedcompany",
        element: <PrivateLimitedCompany/>,
      },
      {
        path: "/producercompany",
        element: <ProducerCompany/>,
      },
      {
        path: "/Publiclimitedcompany",
        element: <PublicLimitedCompany/>,
      },
      {
        path: "/sectioncompany",
        element: <SectionCompany/>,
      },
      {
        path: "/startyourbusiness",
        element: <StartYourBusiness/>,
      },
      {
        path: "/companyservices",
        element: <CompanyServices/>,
      },
      {
        path: "/trademark",
        element: <Trademark/>,
      },
      {
        path: "/tan",
        element: <Tan/>,
      },
      {
        path: "/statutoryregistration",
        element:<StatutoryRegistration/>,
      },
      {
        path: "/pf",
        element: <Pf/>,
      },
      {
        path: "/patent",
        element: <Patent/>,
      },
      {
        path: "/pan",
        element: <Pan/>,
      },
      {
        path: "/Msme",
        element: <Msme/>,
      },
      {
        path: "/ieccode",
        element: <IecCode/>,
      },
      {
        path: "/gst",
        element: <Gst/>,
      },
      {
        path: "/fssai",
        element: <Fssai/>,
      },
      {
        path: "/company",
        element: <Company/>,
      },
      {
        path: "/llp",
        element: <Llp/>,
      },
      {
        path: "/professional",
        element: <Professional/>,
      },
      {
        path: "/partnership",
        element:<Partnership/>,
      },
      {
        path: "/propreitorship",
        element: <Propreitorship/>,
      },
      {
        path: "/societies",
        element: <Societies/>,
      },
      {
        path: "/trust",
        element: <Trust/>,
      },
      {
        path:"/incorporation",
        element:<InCorporation/>
      },
      {
        path:"/assetsaccounting",
        element:<AssetsAccounting/>
      },
      {
        path: "/bookkeepting",
        element: <Bookkeeping/>,
      },
      {
        path: "/hrfunction",
        element: <HrFunction/>,
      },
      {
        path: "/Payroll",
        element: <Payroll/>,
      },
      {
        path: "/quarterly",
        element: <Quarterly/>,
      },
      {
        path: "/Receivable",
        element: <Receivable/>,
      },
      {
        path: "/Regulartax",
        element: <Regulartax/>,
      },
      {
        path: "/secretarial",
        element: <Secretarial/>,
      },
      {
        path: "/vendor",
        element: <Vendor/>,
      },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
