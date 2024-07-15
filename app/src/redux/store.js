import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { thunk } from "redux-thunk";
import {reducer as Auth} from "./Auth/reducer";
import {reducer as App} from "./App/reducer";
import {reducer as NewsRoom} from "./NewsRoom/reducer";
import {reducer as Service} from "./Service/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({Auth,App,NewsRoom,Service});
const Store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export {
    Store
};
