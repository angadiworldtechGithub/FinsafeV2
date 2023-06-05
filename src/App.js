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
import {
  BusinessAdvisory,
  CertifiedFinancial,
  CharteredAccountant,
  CompanySecretory,
  CostAccountant,
  CyberCrime,
  LegalAdvisor,
} from "./Pages/TakeExpertAdvice";
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
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/take_expert_advice",
        element: <TakeExpertAdvice />,
      },
      {
        path: "/business_advisory",
        element: <BusinessAdvisory />,
      },
      {
        path: "/certified_financial",
        element: <CertifiedFinancial />,
      },
      {
        path: "/chartered_accountant",
        element: <CharteredAccountant />,
      },
      {
        path: "/company_secretory",
        element: <CompanySecretory />,
      },
      {
        path: "/cost_accountant",
        element: <CostAccountant />,
      },
      {
        path: "/cyber_crime",
        element: <CyberCrime />,
      },
      {
        path: "/legal_advisor",
        element: <LegalAdvisor />,
      },
      {
        path: "/cfo_services",
        element: <CfoServices />,
      },
      {
        path: "/banking_relationship",
        element: <Bankingrelationship />,
      },
      {
        path: "/business_transaction",
        element: <BusinessTransaction />,
      },
      {
        path: "/capital_structuring",
        element: <CapitalStructuring />,
      },
      {
        path: "/internal_system",
        element: <InternalSystem />,
      },
      {
        path: "/business_planning",
        element: <BusinessPlanning />,
      },
      {
        path: "/investor_relationship",
        element: <Investorrelationship />,
      },
      {
        path: "/working_capital",
        element: <WorkingCapital />,
      },
      {
        path: "/jointventures",
        element: <JointVentures />,
      },
      {
        path: "/management_reporting",
        element: <ManagementReporting />,
      },
      {
        path: "/mergers_acquisitions",
        element: <MergersAcquisitions />,
      },
      {
        path: "/personal_service",
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
        path: "/income_tax",
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
