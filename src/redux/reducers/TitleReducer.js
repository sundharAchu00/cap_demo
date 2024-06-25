import { ActionTypes } from "../contants/ActionTypes";

/*
This is an example for separate reducer
where you can include your reducers in a separate file
*/

const initialState = {
  //example initial value
  title: "",
};

export const TitleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_APPICATION_TITLE:
      return {
        ...state,
        title: payload,
      };

    default:
      return state;
  }
};
