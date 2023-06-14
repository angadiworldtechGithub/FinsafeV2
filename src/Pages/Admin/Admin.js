import "./Admin.css"
import { BsChevronRight } from "react-icons/bs";
export default function Admin() {
  return (
     <div>
     <div className="company-container">
     <p className="welcome">Welcome!</p>
     <div className="company-left">
       <p className="company-header">List of Companies</p>
       <button className="company-button">Company 1</button><i className="company-icon"><BsChevronRight/></i>
       <button className="company-button">Company 2</button><i className="company-icon"><BsChevronRight /></i>
       <button className="company-button">Company 2</button><i className="company-icon"><BsChevronRight/></i>
      </div>
     <div className="company-right">
     <p className="company-header">List of  Individuals</p>
      <button className="company-button">Individuals 1</button><i className="company-icon"><BsChevronRight/></i>
      <button className="company-button">Individuals 2</button><i className="company-icon"><BsChevronRight/></i>
     </div>
    </div>
    </div>
    );
}
