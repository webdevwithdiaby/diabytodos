import { createSelector } from "reselect";

const selectTodosReducer = (state) => state.todosReducer;

export const selectTodos = createSelector(
  [selectTodosReducer],
  (todosReducer) => todosReducer.todos
);

export const selectTodosForDisplay = createSelector([selectTodos], (todos) => {
  const todosObj = todos.byId;
  const keysArr = todos.allIds;
  return keysArr.map((key) => todosObj[key]);
});
