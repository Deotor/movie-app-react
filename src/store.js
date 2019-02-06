import {
  createStore,
  applyMiddleware
} from "C:/Users/Espada/AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
