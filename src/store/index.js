import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../redux/reducers";
import { APP_STATE_KEY } from "../constants";
import { ICON_LOGIN_SUCCESS } from "../redux/actions/constants";
import { AsyncStorage } from "react-native";

const localStorageMiddleware = ({ getState }) => next => action => {
  const result = next(action);
  if (action.type === ICON_LOGIN_SUCCESS) {
    AsyncStorage.setItem(
      APP_STATE_KEY,
      JSON.stringify(getState().appStateReducer)
    );
  }
  return result;
};

export default function configureStore(navMiddleWare, initialState = {}) {
  // const middleware = [thunk, navMiddleWare, localStorageMiddleware, logger];
  const middleware = [thunk, navMiddleWare, localStorageMiddleware];
  const composeEnhancers =
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(reducer, initialState, enhancer);
  return store;
}
