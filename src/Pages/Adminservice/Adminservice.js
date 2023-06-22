import { useEffect, useState, useContext } from "react";
import { SERVICE_COLL_NAME, ADMIN_EMAILS } from "../../constants";
import { AuthContext } from "../../Context/AuthContext";
import "./AdminService.css";
import { getAllDocs } from "../../API/readDoc";
import { sortDateList } from "../utilities";

export default function AdminService() {
  const { auth } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (auth) {
      (async () => {
        const documents = await getAllDocs(SERVICE_COLL_NAME);
        documents.sort(sortDateList);
        setServices(documents);
      })();
    }
  }, [auth]);

  if (!auth || (auth && !ADMIN_EMAILS.includes(auth.email))) {
    return (
      <div className="dashboard_container">
        <h1>Admin Services</h1>
        <h1>Please login with a admin account to view this page.</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="adminservice-container">
        <table>
          <tr>
            <th>User ID</th>
            <th>User Registred Service</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Phone Number</th>
            <th>Organisation Name</th>
            <th>Services</th>
            <th>User State</th>
            <th>User City</th>
            <th>Date Created</th>
          </tr>
          {services.map((doc) => {
            return (
              <tr>
                <td>{doc.indentifier}</td>
                <td>{doc.serviceName}</td>
                <td>{doc.name}</td>
                <td>{doc.email}</td>
                <td>{doc.contact_number}</td>
                <td>{doc.organisation}</td>
                <td>{doc.services}</td>
                <td>{doc.city}</td>
                <td>{doc.state}</td>
                <td>{doc.dateCreated.toDate().toString()}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
