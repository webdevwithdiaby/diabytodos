import TODOS_DATA from "./todos.data";
import { TodosActionsTypes } from "./todos.types";
import omit from "lodash/omit";

const INITIAL_DATA = {
  todos: TODOS_DATA,
};

const todosReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case TodosActionsTypes.SET_COMPLETED:
      return {
        ...state,
        todos: {
          ...state.todos,
          byId: {
            ...state.todos.byId,
            [action.payload.id]: {
              ...action.payload,
              isCompleted: !action.payload.isCompleted,
            },
          },
        },
      };
    case TodosActionsTypes.ADD_TODO:
      return {
        ...state,
        todos: {
          allIds: [action.payload.id, ...state.todos.allIds],
          byId: {
            ...state.todos.byId,
            [action.payload.id]: action.payload,
          },
        },
      };

    case TodosActionsTypes.DELETE_TODO:
      return {
        ...state,
        todos: {
          allIds: state.todos.allIds.filter((id) => id !== action.payload.id),
          byId: omit(state.todos.byId, [action.payload.id]),
        },
      };
    default:
      return state;
  }
};

export default todosReducer;
