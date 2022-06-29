import DetailsWrapper from "./components/details-wrapper/details-wrapper.component";
import Container from "./components/container-wrapper/container-wrapper.component";
import Navigation from "./components/navigation-wrapper/navigation-wrapper.component";
import ToggleDetails from "./components/toggle-details/toggle-details.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getStackFromFirestore } from './utils/firebase/firebase.utils';
import { setStacks } from "./store/stacks/stacks.actions";

import './App.styles.scss';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getStackMap = async () => {
			const stacksArray = await getStackFromFirestore('my_stack');
			dispatch(setStacks(stacksArray));
		};

		getStackMap();
	}, [dispatch]);

	return (
		<div className="app-wrapper">
			<DetailsWrapper />
			<Container />
			<Navigation />
			<ToggleDetails />
			<div className="container-shadow"></div>
			<div className="container-shadow"></div>
		</div>
	)
}

export default App;
