import { createContext, useState, useEffect } from "react";

import { getStackFromFirestore } from "../utils/firebase/firebase.utils";

export const StackContext = createContext({
	stackMap: {}
})

export const StackProvider = ({ children }) => {
	const [stackMap, setStackMap] = useState({});

	useEffect(() => {
		const getStackMap = async () => {
			const skillMap = await getStackFromFirestore();
			setStackMap(skillMap);
		}

		getStackMap();
	}, []);

	const value = { stackMap };

	return (
		<StackContext.Provider value={ value }>{ children }</StackContext.Provider>
	)
}
