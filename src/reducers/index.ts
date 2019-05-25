import { combineReducers } from "redux";
import * as fromHomePage from "./homePage";

export interface IState {
  reactTypescriptStarterKit: fromHomePage.IState;
}

export const initialState: IState = {
  reactTypescriptStarterKit: fromHomePage.initialState
};

export const reducer = combineReducers<IState>({
  // @ts-ignore
  reactTypescriptStarterKit: fromHomePage.reducer
});
