import { STACKS_ACTION_TYPES } from "./stacks.types";

const STACKS_INITIAL_STATE = {
	stacks: []
};

export const stacksReducer = (
	state = STACKS_INITIAL_STATE,
	action = {}
) => {
	const { type, payload } = action;

	switch (type) {
		case STACKS_ACTION_TYPES.SET_STACKS:
			return { ...state, stacks: payload };
		default:
			return state;
	}
};
