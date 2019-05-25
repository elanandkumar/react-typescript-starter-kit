import { IState } from "../reducers";
import { createSelector } from "reselect";

const getHeadingTitleState = (state: IState) => state.reactTypescriptStarterKit;

export const getHeadingTitle = createSelector(
  [getHeadingTitleState],
  s => s.headingTitle
);
