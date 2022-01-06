import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "../types";

export const addTask = (task) => {
  return {
    type: ADDTASK,
    payload: task
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETETASK,
    payload: id
  };
};

export const donetask = (id) => {
  return {
    type: DONETASK,
    payload: id
  };
};
export const editTask = (id, task) => {
  return {
    type: EDITTASK,
    payload: { id, task }
  };
};
