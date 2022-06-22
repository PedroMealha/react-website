import DetailsWrapper from "./components/details-wrapper/details-wrapper.component";
import Container from "./components/container-wrapper/container-wrapper.component";
import Navigation from "./components/navigation-wrapper/navigation-wrapper.component";
import ToggleDetails from "./components/toggle-details/toggle-details.component";

import './App.styles.scss';

const App = () => {
	return (
		<div className="app-wrapper">
			<DetailsWrapper />
			<Container />
			<Navigation />
			<ToggleDetails />
			<div className="app-shadow"></div>
		</div>
	)
}

export default App;
