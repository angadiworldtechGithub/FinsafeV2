import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostDelete from "../PostDelete";
import "./Post.css";
import { AuthContext } from "../../Context/AuthContext";
import { MdArticle,MdCircleNotifications,MdNewspaper } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";
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
     <h1 style={{textAlign:"center",paddingBottom:"30px",fontSize:"30px",color:"#923304"}}>Latest News & Upadates</h1>
     <center>
     <button className="post-button1"><MdArticle/>Articles</button>
     <button className="post-button2"><MdNewspaper/>News</button>
     <button className="post-button3"><ImHammer2/>Judiciary</button>
     <button className="post-button4"><MdCircleNotifications/>Notification</button>
     </center>
     <hr></hr>
    <div className="post-card">
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
  );
}
