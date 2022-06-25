import { createSelector } from "reselect";

const selectStackReducer = (state) => state.stacks;

export const selectStacks = createSelector(
	[selectStackReducer],
	(stacksSlice) => stacksSlice.stacks
);

export const selectStacksMap = createSelector(
	[selectStacks],
	(stacks) => {
		console.log('stacks:', stacks);

		return stacks.reduce((acc, stack) => {
			const { area, skills } = stack;
			acc[area.toLowerCase()] = skills;
			return acc;
		}, {})
	}
); 