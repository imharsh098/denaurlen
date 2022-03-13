import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userInfoReducer } from "./reducers/userReducer";
import { coinReducer } from "./reducers/coinReducer";
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  info: {
    userInfo: userInfoFromStorage,
  },
};
const reducer = combineReducers({
  info: userInfoReducer,
  coin: coinReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
