import IHeadingTitle from "../models/HeadingTitle";

export enum ActionTypes {
  SHOW_MESSAGE = "[homePage] SHOW_MESSAGE"
}

export interface ShowMessageAction {
  type: ActionTypes.SHOW_MESSAGE;
  payload: IHeadingTitle;
}

export interface IShowMessage {
  (text: string): ShowMessageAction;
}
export function showMessage(text: string): ShowMessageAction {
  return {
    type: ActionTypes.SHOW_MESSAGE,
    payload: {
      text
    }
  };
}
export type Action = ShowMessageAction;
