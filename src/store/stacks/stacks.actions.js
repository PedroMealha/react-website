import { STACKS_ACTION_TYPES } from "./stacks.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setStacks = stacksArray =>
	createAction(STACKS_ACTION_TYPES.SET_STACKS, stacksArray);
