import Navigation from "./components/navigation/navigation.component";
import Highlight from "./components/highlight/highlight.component";
import MainContent from "./components/main-content/main-content.component";

import './App.styles.scss';

const App = () =>
	<div className="routes">
		<MainContent />
		<Highlight />
		<Navigation />
	</div >

export default App;
