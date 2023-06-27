import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostDelete from "../PostDelete";
import "./Post.css";
import { AuthContext } from "../../Context/AuthContext";

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
    <div className="card">
      {isAdmin ? renderAdmin() : <></>}
      <div className="card-body mr-1">
        <h5 className="card-title">
          <Link to={`/post/${id}`}>{title}</Link>
        </h5>
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
  );
}
