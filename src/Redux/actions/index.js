import ACTIONS from "./actionTypes";
import { addData } from "../../API/createDoc";
import { editData } from "../../API/editDoc";
import { getAllDocs, getDocById } from "../../API/readDoc";
import { POST_COLL_NAME, COMMENT_COLL_NAME } from "../../constants";

/* Data actions */
export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: ACTIONS.LOADING_DATA });
    const posts = await getAllDocs(POST_COLL_NAME);
    dispatch({ type: ACTIONS.FETCH_POSTS, payload: posts });
  };
};

export const fetchPost = (id) => {
  return async (dispatch) => {
    dispatch({ type: ACTIONS.LOADING_DATA });

    const post = await getDocById(POST_COLL_NAME, id);

    dispatch({ type: ACTIONS.FETCH_POST, payload: post });
    dispatch({ type: ACTIONS.CLEAR_ERROR });
  };
};

export const createPost = (data) => {
  return async (dispatch) => {
    await addData(POST_COLL_NAME, data);
    dispatch({ type: ACTIONS.CREATE_POST, payload: data });
    dispatch({
      type: ACTIONS.CLEAR_ERROR,
    });
  };
};

// export const editPost = (id, data) => {
//   return (dispatch) => {
//     FirebaseAPI.put(`/posts/${id}`, data)
//       .then((response) => {
//         dispatch({ type: ACTIONS.EDIT_POST, payload: response.data });
//         history.push("/");
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };
// };

export const submitComment = (data, postId) => {
  return async (dispatch) => {
    await addData(
      POST_COLL_NAME + "/" + postId + "/" + COMMENT_COLL_NAME,
      data
    );
    dispatch({ type: ACTIONS.SUBMIT_COMMENT, payload: data });
  };
};
