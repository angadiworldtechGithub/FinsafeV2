import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";

const Base = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
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
