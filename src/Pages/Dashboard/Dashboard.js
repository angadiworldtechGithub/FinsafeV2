import "./Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <h1>Dashboard</h1>
      {auth ? <h1>{auth.email}</h1> : <h1>Please Login To View this page.</h1>}
    </>
  );
}
