import React, { useContext } from "react";
import { usePreventUnAuthUser } from "../../Hooks/redirect";
import PostList from "../../Components/PostList";
import "./Blog.css";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Blog() {
  const { auth } = useContext(AuthContext);
  usePreventUnAuthUser("blog", auth);
  return (
    <div className="row justify-content-center mt-4">
      <section className="col-12 col-sm-8 blogs-list">
        <PostList />
      </section>

      <button type="button" class="btn" style={{ margin:"10px 10px 10px 10px", padding:"10px 10px 10px 10px",fontsize: "15px", fontweight: "400", color: "white", backgroundColor: "rgb(7, 47, 95)",border: "2px solid rgb(7, 47, 95)", borderRadius: "5px"}}>
      <Link to="/createpost" style={{fontSize:"30px",color:"#FFF"}}><center>Create Post</center></Link>
      </button>

    </div>
  );
}
