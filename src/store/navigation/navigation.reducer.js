import { NAV_ACTION_TYPES } from "./navigation.types";

const INITIAL_STATE = {
  isNavOpen: false,
};

export const navigationReducer = (
	state = INITIAL_STATE,
	action = {}
) => {
	const { type, payload } = action;

  switch (type) {
    case NAV_ACTION_TYPES.SET_CURRENT_NAV:
      return { ...state, isNavOpen: payload };
    default:
      return state;
  }
};
