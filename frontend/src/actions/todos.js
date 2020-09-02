import axios from "axios";
import {
  GET_TODOS,
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  EDIT_CHECKED,
} from "./types";
import { reset, formValues } from "redux-form";
import history from "../history";

// GET TODOS
export const getTodos = () => async (dispatch) => {
  const res = await axios.get("/api/todos/");
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};

//GET TODO
export const getTodo = (id) => async (dispatch) => {
  const res = await axios.get(`/api/todos/${id}/`);
  dispatch({
    type: GET_TODO,
    payload: res.data,
  });
};

// ADD TODOS
export const addTodo = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/todos/", { ...formValues });
  dispatch({
    type: ADD_TODO,
    payload: res.data,
  });
  dispatch(reset("todoForm")); //clear form
};

//DELETE TODO
export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`/api/todos/${id}/`);
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
  history.push("/");
};

//EDIT TODO
export const editTodo = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/todos/${id}/`, formValues);
  dispatch({
    type: EDIT_TODO,
    payload: res.data,
  });
  history.push("/");
};

//UPDATE CHECKED
export const updateChecked = (id, formValue) => async (dispatch) => {
  console.log(id);
  const res = await axios.put(`/api/todos/${id}/`, formValue);
  dispatch({
    type: EDIT_CHECKED,
    payload: res.data,
  });
};
