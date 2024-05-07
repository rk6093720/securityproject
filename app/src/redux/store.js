import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { thunk } from "redux-thunk";
import {reducer as Auth} from "./Auth/reducer";
// import {reducer as App} from "./App/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({Auth});
const Store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export {
    Store
};
