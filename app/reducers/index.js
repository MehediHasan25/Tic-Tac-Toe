import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import playerReducer from "./players";
import boardReducer from "./board";
import showReducer from "./show";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["show"],
};

const allReducers = combineReducers({
  players: playerReducer,
  board: boardReducer,
  show: showReducer,
});

export default persistReducer(persistConfig, allReducers);
