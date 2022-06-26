import { combineReducers } from "redux";

import { navigationReducer } from "./navigation/navigation.reducer";
import { stacksReducer } from "./stacks/stacks.reducer";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  stacks: stacksReducer,
});
