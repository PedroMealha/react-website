import { createContext, useState } from 'react';

export const NavigationContext = createContext({
	isNavOpen: false
});

export const NavigationProvider = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	
	const value = { isNavOpen, setIsNavOpen };
	return <NavigationContext.Provider value={ value }>{ children }</NavigationContext.Provider>;
};
