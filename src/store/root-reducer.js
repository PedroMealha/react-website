import { combineReducers } from "redux";

import { navigationReducer } from "./navigation/navigation.reducer";
import { sectionReducer } from "./section/section.reducer";
import { stacksReducer } from "./stacks/stacks.reducer";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  section: sectionReducer,
  stacks: stacksReducer,
});
