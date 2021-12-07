import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import watchlistReducer from "./Watchlist/watchlistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["treesReducer"],
};

const rootReducer = combineReducers({
  watchlistReducer,
});

//export default rootReducer

export default persistReducer(persistConfig, rootReducer);
