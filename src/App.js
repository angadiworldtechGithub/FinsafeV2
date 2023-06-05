import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import CfoServices from "./Pages/CfoServices/CfoServices";
import{
  Bankingrelationship,
  BusinessTransaction,
  CapitalStructuring,
  InternalSystem,
  Investorrelationship,
  JointVentures,
  WorkingCapital,
  BusinessPlanning,
  ManagementReporting,
  MergersAcquisitions} from "./Pages/CfoServices";
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
        path: "/Takeexpertadvice",
        element: <TakeExpertAdvice />,
      },
      {
        path: "/BusinessAdvisory",
        element: <BusinessAdvisory />,
      },
      {
        path: "/CertifiedFinancial",
        element: <CertifiedFinancial />,
      },
      {
        path: "/CharteredAccountant",
        element: <CharteredAccountant />,
      },
      {
        path: "/CompanySecretory",
        element: <CompanySecretory />,
      },
      {
        path: "/CostAccountant",
        element: <CostAccountant />,
      },
      {
        path: "/CyberCrime",
        element: <CyberCrime />,
      },
      {
        path: "/LegalAdvisor",
        element: <LegalAdvisor />,
      },
      {
        path:"/CfoServices",
        element:<CfoServices/>
      },
      {
        path:"/Bankingrelationship",
        element:<Bankingrelationship/>
      },
      {
        path: "/BusinessTransaction",
        element: <BusinessTransaction />,
      },
      {
        path: "/CapitalStructuring",
        element: <CapitalStructuring />,
      },
      {
        path: "/InternalSystem",
        element: <InternalSystem/>,
      },
      {
         path: "/BusinessPlanning",
         element:<BusinessPlanning/>,
      },
      {
        path: "/Investorrelationship",
        element: <Investorrelationship/>,
      },
      {
          path: "/WorkingCapital",
          element: <WorkingCapital/>,
      },
      {
        path: "/JointVentures",
        element: <JointVentures/>,
      },
      {
        path: "/ManagementReporting",
        element: <ManagementReporting/>,
      },
      {
        path: "/MergersAcquisitions",
        element: <MergersAcquisitions/>,
      },
      {
        path: "/PersonalService",
        element:<PersonalService/>
      },
      {
        path: "/Investment",
        element:<Investment />
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
