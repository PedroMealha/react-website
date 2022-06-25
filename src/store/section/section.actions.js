import { SECTION_ACTION_TYPES } from "./section.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentSection = str =>
	createAction(SECTION_ACTION_TYPES.SET_SECTION, str);
