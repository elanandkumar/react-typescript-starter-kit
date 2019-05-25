import IHeadingTitle from "../models/HeadingTitle";

import { Action, ActionTypes, ShowMessageAction } from "../actions/homePage";
export interface IState {
  headingTitle: IHeadingTitle;
}

export const initialState: IState = {
  headingTitle: {
    text: "Hello React App"
  }
};

const showMessage = (state: IState, action: ShowMessageAction) => {
  const { text } = action.payload;
  return {
    ...state,
    headingTitle: { ...state.headingTitle, text }
  };
};

export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SHOW_MESSAGE:
      return showMessage(state, action);
    default:
      return state;
  }
}
