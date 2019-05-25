import { createStore, applyMiddleware } from "redux";
import { IState, reducer, initialState } from "../reducers";
import { Action } from "../actions/homePage";
// import logger from "redux-logger";

const store = createStore<IState, Action, any, any>(reducer, initialState);
// @ts-ignore
window.storeD = store;
export default store;
