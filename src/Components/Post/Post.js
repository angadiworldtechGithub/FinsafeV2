import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostDelete from "../PostDelete";
import "./Post.css";
import {MdArticle,MdOutlineNewspaper,MdNotificationsActive} from "react-icons/md"
import {GoLaw} from "react-icons/go"
import {AiFillStar} from "react-icons/ai";
import { AuthContext } from "../../Context/AuthContext";
import{AiOutlineDoubleRight} from "react-icons/ai";
export default function Post(props) {
  dayjs.extend(relativeTime);

  const { isAdmin } = useContext(AuthContext);

  const { id, title, bodyMeta, identifier, comment } = props.post;

  console.log(comment);

  function renderAdmin() {
    return (
      <div className="menu">
        <div className="dropleft">
          <div className="dropdown-toggle" data-toggle="dropdown">
            <i className="fas fa-ellipsis-v"></i>
          </div>

          <div className="dropdown-menu">
            <Link className="dropdown-item" to={`/postedit/${id}`}>
              Edit
            </Link>
            <div className="dropdown-item">
              <PostDelete id={id} title={bodyMeta} />
            </div>
          </div>
        </div>
      </div>
    );
  }
 
  return (
    <div>

    <div>
    <center><h1 style={{paddingBottom:"30px",fontSize:"30px",color:"#923304"}}>Latest News & Upadates</h1></center> 
    <center><button className="post-button1"><i style={{padding:"5px 5px 5px 5px"}}><MdArticle/></i>Article</button>
    <button className="post-button2"><i style={{padding:"5px 5px 5px 5px"}}><MdOutlineNewspaper/></i>News</button>
    <button className="post-button3"><i style={{padding:"5px 5px 5px 5px"}}><GoLaw/></i>Judiciary</button>
    <button className="post-button4"><i style={{padding:"5px 5px 5px 5px"}}><MdNotificationsActive/></i>Notifications</button></center> 
    <hr></hr>
    </div>

  <div className="grid">
     <div className="box box1">
     <div className="post-card">
     <div className="post1">
    {isAdmin ? renderAdmin() : <></>}
    <div className="card-body mr-1">
      <h3 className="card-title">
        <AiOutlineDoubleRight/> <Link to={`/post/${id}`}>{title}</Link>
      </h3 >
      <p className="card-text">{bodyMeta}</p>
      <div className="row meta-data align-items-center">
        <div className="col-12 col-sm-6">{identifier}</div>
        <div className="col-12 col-sm-6">
          <span className="ml-4">
            <i className="far fa-comment"></i>
            {comment ? comment.length : 0} Comments
          </span>
        </div>
        </div>
      </div>
    </div> 
    </div>
  </div>
     
  <div className="box box2">
    <button className="box2-header"><AiFillStar/>Featured Posts</button>
     <div className="box2-body" style={{backgroundColor:" #A4E19B"}}>
     <ol>
     <li>
       Income returns ends on june Income returns ends on june
     </li>
     <li>
     Income returns ends on june Income returns ends on june
   </li>
   <li>
   Income returns ends on june Income returns ends on june Income returns ends on june
 </li>
 <li>
 Income returns ends on june Income returns ends on june Income returns ends on june
</li>
<li>
Income returns ends on june Income returns ends on june Income returns ends on june
</li>
<li>
Income returns ends on june Income returns ends on june Income returns ends on june
</li>
     </ol>
     </div>
  </div>
  </div>
  </div>
  );
}
