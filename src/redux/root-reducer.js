import { combineReducers } from "redux";

import todosReducer from "./todos/todos.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  storage,
  whitelist: ["todosReducer"],
};

const rootReducer = combineReducers({
  todosReducer,
});

export default persistReducer(config, rootReducer);
