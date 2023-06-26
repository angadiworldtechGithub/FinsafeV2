import ACTIONS from "./actionTypes";
import { addData } from "../../API/createDoc";
import { editData } from "../../API/editDoc";
import { getAllDocs } from "../../API/readDoc";
import { POST_COLL_NAME } from "../../constants";

/* Data actions */
export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: ACTIONS.LOADING_DATA });
    const posts = await getAllDocs(POST_COLL_NAME);
    dispatch({ type: ACTIONS.FETCH_POST, payload: posts });
  };
};

// export const fetchPost = (id) => {
//   return (dispatch) => {
//     dispatch({ type: ACTIONS.LOADING_DATA });

//     FirebaseAPI.get(`/posts/${id}`)
//       .then((res) => {
//         dispatch({ type: ACTIONS.FETCH_POST, payload: res.data });
//         dispatch({ type: ACTIONS.CLEAR_ERROR });
//       })
//       .catch((error) => {
//         dispatch({
//           type: ACTIONS.SET_ERROR,
//           payload: error.response.status,
//         });
//       });
//   };
// };

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

// export const submitComment = (id, data) => {
//   return (dispatch) => {
//     FirebaseAPI.post(`/posts/${id}/comment`, data)
//       .then((res) => {
//         dispatch({ type: ACTIONS.SUBMIT_COMMENT, payload: res.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
