import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export const persistor = persistStore(store);

export default {store, persistor};
