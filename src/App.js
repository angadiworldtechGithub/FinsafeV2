import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import Take_Expert_Advice from "./Pages/TakeExpertAdvice/Take_Expert_Advice";
import {
  Business_Advisory,
  Certified_Financial,
  Chartered_Accountant,
  Company_Secretory,
  Cost_Accountant,
  Cyber_crime,
  Legal_Advisor,
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
        path: "/Business_Advisory",
        element: <Business_Advisory />,
      },
      {
        path: "/Certified_Financial",
        element: <Certified_Financial />,
      },
      {
        path:"/Chartered_Accountant",
        element:<Chartered_Accountant/>
      },
      {
        path:"/Company_Secretory",
        element:<Company_Secretory/>
      },
      {
        path:"/Cost_Accountant",
        element:<Cost_Accountant/>
      },
      {
        path:"/Cyber_crime",
        element:<Cyber_crime/>
      },
      {
        path:"/Legal_Advisor",
        element:<Legal_Advisor/>
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
