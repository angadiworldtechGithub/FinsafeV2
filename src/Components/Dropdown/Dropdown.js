import { addHide } from "../Navbar/Navbar"
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom'

export default function Dropdown ({isActive, setIsActive, headerName, subHeaders}) {

    return (
    <>
        <div className="navbar_text">
                <Link to="/" className='navbar_link'>
                    {headerName}
                </Link>
                <MdArrowDropDown className="icon" onClick={setIsActive}/>
              </div>
        
              <div className={isActive ? 'dropdown' : addHide('dropdown')}>
                  <ul>
                    {subHeaders.map(subHeader => <li><Link to={subHeader.link} className='navbar_link'>{subHeader.title}</Link></li>)}
                 </ul>
        </div>
    </>
    )
}
  
