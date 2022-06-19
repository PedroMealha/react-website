
import { Routes, Route } from "react-router-dom";

import About from "../../routes/about/about.component";
import Contact from "../../routes/contact/contact.component";

import './container-wrapper.styles.scss';

const Container = () =>
	<div className="app-container-wrapper">
		<div className="app-container">
			<Routes>
				<Route path="/" element={ <About /> }></Route>
				<Route path="/contact" element={ <Contact /> }></Route>
			</Routes>
		</div>
	</div>

export default Container;