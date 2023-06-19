import { useEffect, useState } from "react";
import { SERVICE_COLL_NAME } from "../../constants";
import "./Adminservice.css";
import { getAllDocs } from "../../API/readDoc";

export default function Adminservice() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const documents = await getAllDocs(SERVICE_COLL_NAME);
      setServices(documents);
    })();
  }, []);
  return (
    <div>
      <div className="Adminservice-container">
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
          </tr>
          {services.map((doc) => {
            return (
              <tr>
                <td>{doc.indetifier}</td>
                <td>{doc.serviceName}</td>
                <td>{doc.name}</td>
                <td>{doc.email}</td>
                <td>{doc.contact_number}</td>
                <td>{doc.organisation}</td>
                <td>{doc.services}</td>
                <td>{doc.city}</td>
                <td>{doc.state}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
