/* eslint-disable default-case */
import { mountains } from '../mocks/mocks';
import { ActionType } from './action';

const initialState = {
  mountainsList: mountains,
  currentMountain: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_MOUNTAIN:
      return {
        ...state,
        currentMountain: action.payload
      };
  };

  return state;
};

export {reducer};
