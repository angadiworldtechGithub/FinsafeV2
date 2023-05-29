import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import PersonalService from "./Pages/PersonalService";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";

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
        path: "",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/personal_service",
        element: <PersonalService />,
      },
      {
        path: "/about",
        element: <About />,
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
