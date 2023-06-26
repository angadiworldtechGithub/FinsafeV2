import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { fetchPost } from "../../Redux/actions";
import Comments from "../../Components/Comments";
import CommentForm from "../../Components/CommentForm";
import Loader from "../../Components/Loader";
import MarkdownRenderer from "../../Components/MarkdownEditor/MarkdownRenderer";
import "./PostShow.css";

const BlogShow = (props) => {
  dayjs.extend(relativeTime);

  const [showComments, setShowComments] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    props.fetchPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    loading,
    post: { title, bodyMeta, body, comments },
  } = props.data;

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <div className="post-show">
          <div className="row justify-content-center">
            <div className="col-12 post-body">
              <h1 className="post-title">{title}</h1>
              <h5 className="mt-3">{bodyMeta}</h5>
              <div className="post-text mt-4">
                <MarkdownRenderer content={body} />
              </div>
            </div>
          </div>
          <div className="post-footer">
            <div className="row">
              <div className="col">
                <span
                  className="ml-4"
                  onClick={() => setShowComments((prevState) => !prevState)}
                >
                  <i className="far fa-comment"></i>{" "}
                  {comments ? comments.length : 0} Comments
                </span>
              </div>
            </div>

            {showComments && (
              <>
                <hr />
                <CommentForm />
                <Comments comments={comments} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { fetchPost })(BlogShow);
