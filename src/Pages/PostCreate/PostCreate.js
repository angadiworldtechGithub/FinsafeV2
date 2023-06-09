import { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import MarkdownEditor from "../../Components/MarkdownEditor";
import { createPost } from "../../Redux/actions";
import { isBlank, isEmptyObj } from "../utilities";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const PostCreate = (props) => {
  const [title, setTitle] = useState("");
  const [bodyMeta, setBodyMeta] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const { getIdentifier } = useContext(AuthContext);
  const navigate = useNavigate();
  // page title
  useEffect(() => {
    document.title = "Create a New Post";
  }, []);

  useEffect(() => {
    if (props.errors) setErrors(props.errors);
  }, [props.errors]);

  const onCreatePost = (event) => {
    event.preventDefault();

    const post = {
      title,
      identifier: getIdentifier(),
      bodyMeta,
      body,
      comment: [],
    };

    let err = {};
    if (isBlank(post.title)) err.title = "This can't be empty!";
    if (isBlank(post.bodyMeta)) err.bodyMeta = "This can't be empty!";
    if (isBlank(post.body)) err.body = "This can't be empty!";

    if (isEmptyObj(err)) {
      props.createPost(post);
      navigate("/blog");
    } else {
      setErrors(err);
    }
  };

  return (
    <div className="container" style={{padding:"20px 40px 20px 20px",margin:"20px 20px 20px 20px",border:"2px solid #000",backgroundColor:"#f2f2f2"}}>
      <form className="post-create-form mt-2">
        <h1 style={{textAlign:"center",color:"#923304"}}>Publish a new post</h1>
        <div className="form-group mt-4" style={{padding:"10px 10px 10px 10px",fontSize:"25px",fontWeight:"600"}}>
          <label>Title</label>
          <input style={{borderBottom: "2px solid #072f5f"}}
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          {errors.title ? (
            <small className="error-message">{errors.title}</small>
          ) : null}
        </div>
        <div className="form-group" style={{padding:"10px 10px 10px 10px",fontSize:"25px",fontWeight:"600"}}>
          <label>Short Description</label>
          <textarea style={{borderBottom: "2px solid #072f5f"}}
            type="textarea"
            className="form-control"
            rows="1"
            value={bodyMeta}
            onChange={(event) => setBodyMeta(event.target.value)}
          ></textarea>
          {errors.bodyMeta ? (
            <small className="error-message">{errors.bodyMeta}</small>
          ) : null}
        </div>
        <div className="form-group" style={{padding:"10px 10px 10px 10px",fontSize:"25px",fontWeight:"600"}}>
          <label>Post Content</label>
          <MarkdownEditor style={{border: "2px solid #072f5f"}}
            editorPlaceholder="Write your content (markdown supported)"
            editorRows="25"
            editorValue={body}
            editorSetValue={setBody}
            previewBg={true}
          />
          {errors.body ? (
            <small className="error-message">{errors.body}</small>
          ) : null}
        </div>
        <div className="form-group row justify-content-center">
          <button type="button" className="btn" onClick={onCreatePost}
          style={{padding:"10px 10px 10px 10px",
          fontSize:"20px",
          fontWeight:"600",
          color:"white",
          backgroundColor:"#072f5f",
          border: "2px solid #072f5f",
          borderRadius:"5px"
         }}>
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.ui.errors,
  };
};
export default connect(mapStateToProps, { createPost })(PostCreate);
