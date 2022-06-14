import { createContext, useReducer } from "react";

const SECTION_TYPES = {
	SET_SECTION: 'SET_SECTION'
};

const INITIAL_SECTION = {
	currentSection: 'profile'
}

const sectionReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case SECTION_TYPES.SET_SECTION:
			return {
				...{ state },
				currentSection: payload
			}
		default:
			throw new Error(`Unhandled type ${type} in SectionReducer`)
	}
}

export const SectionContext = createContext({
	currentSection: '',
	setCurrentSection: () => { }
})

export const SectionProvider = ({ children }) => {
	const [{ currentSection }, dispatch] = useReducer(sectionReducer, INITIAL_SECTION);

	const setCurrentSection = section => {
		dispatch({
			type: SECTION_TYPES.SET_SECTION,
			payload: section
		})
	}

	const value = { currentSection, setCurrentSection };

	return <SectionContext.Provider value={ value }>{ children }</SectionContext.Provider>
}