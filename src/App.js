// import "./App.css";
import { GlobalLoading } from "react-global-loading";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import CfoServices from "./Pages/CfoServices/CfoServices";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";

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

import {
  DormantCompany,
  NidhiCompany,
  OnePersonCompany,
  PrivateLimitedCompany,
  ProducerCompany,
  PublicLimitedCompany,
  SectionCompany,
  CompanyServices,
} from "./Pages/StartYourBusiness/CompanyServices";

import {
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
  Professional,
} from "./Pages/StartYourBusiness/StatutoryRegistration";

import {
  Incorporation,
  Llp,
  Partnership,
  Propreitorship,
  Societies,
  Trust,
} from "./Pages/StartYourBusiness/Incorporation";

import LoansCapital from "./Pages/LoansCapital/LoansCapital";

import {
  BusinessTermLoans,
  LoanAssets,
  LoanDocumentationSupport,
  MsmeLoans,
  ProjectReportsPreparation,
  TalkToExperts,
  WorkingCapitalLoans,
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

import AccountsAudit from "./Pages/AccountsAudit";

import {
  Audit,
  ForensicAudits,
  InternalAudits,
  StatutoryauditSupport,
  StockAudit,
  TaxAudit,
} from "./Pages/AccountsAudit/Audit";

import {
  Accounts,
  AssetsAccounting,
  Bookkeeping,
  HrFunction,
  Payroll,
  Quarterly,
  Receivable,
  RegularTax,
  Secretarial,
  Vendor,
} from "./Pages/AccountsAudit/Accounts";

import StatutoryCompliances from "./Pages/StatutoryCompliances";
import {
  GSTaudits,
  IncomeTaxAssesments,
  Noticehandling,
  Assesments,
} from "./Pages/StatutoryCompliances/Assesments";

import {
  LlpProprietorship,
  RegularCompliance,
  YearlyReturnsfiling,
  CompanyLawServices,
} from "./Pages/StatutoryCompliances/CompanyLawServices";

import {
  DirectTax,
  AdvanceTax,
  IncomeTaxReturns,
  PropertyTax,
  TaxAuditSupport,
  TdsTcsReturns,
  TransferPricingAudit,
} from "./Pages/StatutoryCompliances/DirectTax";

import {
  Customs,
  GSTAdvisory,
  GSTEInvoice,
  GSTEwaybill,
  GSTmonthlyReturnsfiling,
  GSTYearlyreturns,
  IECcompliance,
  IndirectTax,
} from "./Pages/StatutoryCompliances/IndirectTax";

import {
  ESICompliance,
  LLCServices,
  Pfcompliance,
  ProfessionalTax,
  Rera,
  Others,
} from "./Pages/StatutoryCompliances/Others";

import BusinessLegalServices from "./Pages/BusinessLegalServices";
import {
  BusinessLegalDrafting,
  CustomerAgreement,
  CustomerLitigation,
  JointVenture,
  LandLitigation,
  LandTitle,
} from "./Pages/BusinessLegalServices";
import PersonalService from "./Pages/PersonalService";

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
import SignUp from "./Pages/SignUp";
import PhoneLogin from "./Pages/PhoneLogin";
import AdminService from "./Pages/AdminService";
import AdminNotification from "./Pages/AdminNotification";
import { NotificationsContextProvider } from "./Context/NotificationsContext";
import PostCreate from "./Pages/PostCreate";
import PostShow from "./Pages/PostShow";
import PostEdit from "./Pages/PostEdit";

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
        path: "/login",
        element: <Login />,
      },
      { path: "/adminnotification", element: <AdminNotification /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/phonelogin", element: <PhoneLogin /> },
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
        element: <LoansCapital />,
      },
      {
        path: "/businesstermloans",
        element: <BusinessTermLoans />,
      },
      {
        path: "/talktoexperts",
        element: <TalkToExperts />,
      },
      {
        path: "/loandocumentationsupport",
        element: <LoanDocumentationSupport />,
      },
      {
        path: "/loansassets",
        element: <LoanAssets />,
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
        element: <BusinessLegalDrafting />,
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
        element: <OnePersonCompany />,
      },
      {
        path: "/privatelimitedcompany",
        element: <PrivateLimitedCompany />,
      },
      {
        path: "/producercompany",
        element: <ProducerCompany />,
      },
      {
        path: "/Publiclimitedcompany",
        element: <PublicLimitedCompany />,
      },
      {
        path: "/sectioncompany",
        element: <SectionCompany />,
      },
      {
        path: "/startyourbusiness",
        element: <StartYourBusiness />,
      },
      {
        path: "/companyservices",
        element: <CompanyServices />,
      },
      {
        path: "/trademark",
        element: <Trademark />,
      },
      {
        path: "/tan",
        element: <Tan />,
      },
      {
        path: "/statutoryregistration",
        element: <StatutoryRegistration />,
      },
      {
        path: "/pf",
        element: <Pf />,
      },
      {
        path: "/patent",
        element: <Patent />,
      },
      {
        path: "/pan",
        element: <Pan />,
      },
      {
        path: "/Msme",
        element: <Msme />,
      },
      {
        path: "/ieccode",
        element: <IecCode />,
      },
      {
        path: "/gst",
        element: <Gst />,
      },
      {
        path: "/fssai",
        element: <Fssai />,
      },
      {
        path: "/llp",
        element: <Llp />,
      },
      {
        path: "/professional",
        element: <Professional />,
      },
      {
        path: "/partnership",
        element: <Partnership />,
      },
      {
        path: "/propreitorship",
        element: <Propreitorship />,
      },
      {
        path: "/societies",
        element: <Societies />,
      },
      {
        path: "/trust",
        element: <Trust />,
      },
      {
        path: "/incorporation",
        element: <Incorporation />,
      },
      {
        path: "/assetsaccounting",
        element: <AssetsAccounting />,
      },
      {
        path: "/bookkeeping",
        element: <Bookkeeping />,
      },
      {
        path: "/hrfunction",
        element: <HrFunction />,
      },
      {
        path: "/Payroll",
        element: <Payroll />,
      },
      {
        path: "/quarterly",
        element: <Quarterly />,
      },
      {
        path: "/Receivable",
        element: <Receivable />,
      },
      {
        path: "/regulartax",
        element: <RegularTax />,
      },
      {
        path: "/secretarial",
        element: <Secretarial />,
      },
      {
        path: "/vendor",
        element: <Vendor />,
      },
      {
        path: "/accountsaudit",
        element: <AccountsAudit />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/audit",
        element: <Audit />,
      },
      {
        path: "/forensicaudits",
        element: <ForensicAudits />,
      },
      {
        path: "/internalaudits",
        element: <InternalAudits />,
      },
      {
        path: "/statutoryauditsupport",
        element: <StatutoryauditSupport />,
      },
      {
        path: "/stockaudit",
        element: <StockAudit />,
      },
      {
        path: "/taxaudit",
        element: <TaxAudit />,
      },
      {
        path: "/statutorycompliances",
        element: <StatutoryCompliances />,
      },
      {
        path: "/gstaudits",
        element: <GSTaudits />,
      },
      {
        path: "/incometaxassesments",
        element: <IncomeTaxAssesments />,
      },
      {
        path: "/noticehandling",
        element: <Noticehandling />,
      },
      {
        path: "/llpproprietorship",
        element: <LlpProprietorship />,
      },
      {
        path: "/regularcompliance",
        element: <RegularCompliance />,
      },
      {
        path: "/yearlyreturnsfiling",
        element: <YearlyReturnsfiling />,
      },
      {
        path: "/advancetax",
        element: <AdvanceTax />,
      },
      {
        path: "/directtax",
        element: <DirectTax />,
      },
      {
        path: "/incometaxreturns",
        element: <IncomeTaxReturns />,
      },
      {
        path: "/propertytax",
        element: <PropertyTax />,
      },
      {
        path: "/taxauditsupport",
        element: <TaxAuditSupport />,
      },
      {
        path: "/tdstcsReturns",
        element: <TdsTcsReturns />,
      },
      {
        path: "/transferpricingaudit",
        element: <TransferPricingAudit />,
      },
      {
        path: "/customs",
        element: <Customs />,
      },
      {
        path: "/gstadvisory",
        element: <GSTAdvisory />,
      },
      {
        path: "/gsteinvoice",
        element: <GSTEInvoice />,
      },
      {
        path: "/gstewaybill",
        element: <GSTEwaybill />,
      },
      {
        path: "/gstmonthlyreturnsfiling",
        element: <GSTmonthlyReturnsfiling />,
      },
      {
        path: "/gstyearlyreturns",
        element: <GSTYearlyreturns />,
      },
      {
        path: "/ieccompliance",
        element: <IECcompliance />,
      },
      {
        path: "/ESICompliance",
        element: <ESICompliance />,
      },
      {
        path: "/llcservices",
        element: <LLCServices />,
      },
      {
        path: "/pfcompliance",
        element: <Pfcompliance />,
      },
      {
        path: "/professionaltax",
        element: <ProfessionalTax />,
      },
      {
        path: "/rera",
        element: <Rera />,
      },
      {
        path: "/assesments",
        element: <Assesments />,
      },
      {
        path: "/indirecttax",
        element: <IndirectTax />,
      },
      {
        path: "/directtax",
        element: <DirectTax />,
      },
      {
        path: "/companylawservices",
        element: <CompanyLawServices />,
      },
      {
        path: "/others",
        element: <Others />,
      },
      {
        path: "/adminservice",
        element: <AdminService />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/createpost",
        element: <PostCreate />,
      },
      {
        path: "/post/:id",
        element: <PostShow />,
      },
      {
        path: "/postedit/:id",
        element: <PostEdit />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <NotificationsContextProvider>
        <RouterProvider router={router} />
        <GlobalLoading />
      </NotificationsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
