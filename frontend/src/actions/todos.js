import axios from "axios";
import { GET_TODOS, ADD_TODO } from "./types";

// GET TODOS
export const getTodos = () => async (dispatch) => {
  const res = await axios.get("/api/todos/");
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};

