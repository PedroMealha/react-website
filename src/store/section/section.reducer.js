import { SECTION_ACTION_TYPES } from "./section.types";

const INITIAL_STATE = {
	currentSection: 'profile'
};

export const sectionReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SECTION_ACTION_TYPES.SET_SECTION:
      return { ...state, currentSection: payload };
    default:
      return state;
  }
};
