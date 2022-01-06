import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "../types";

const initState = {
  todos: [
    {
      id: 1,
      task: "learn html",
      done: false
    },
    {
      id: 2,
      task: "learn css",
      done: false
    }
  ]
};
function todoReducer(state = initState, action) {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Math.random(), done: false, task: action.payload }
        ]
      };
    case DELETETASK:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload)
      };
    case DONETASK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload ? { ...el, done: !el.done } : el
        )
      };
    case EDITTASK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload.id
            ? { ...el, task: action.payload.task }
            : el
        )
      };
    default:
      return state;
  }
}
export default todoReducer;
