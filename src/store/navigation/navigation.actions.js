import { NAV_ACTION_TYPES } from "./navigation.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsNavOpen = bool =>
	createAction(NAV_ACTION_TYPES.SET_CURRENT_NAV, bool);
