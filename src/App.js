import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import './App.styles.scss';

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Skills from "./routes/skills/skills.component";
import Contact from "./routes/contact/contact.component";

const App = () =>
	<div className="routes">
		<Routes>
			<Route path='/' element={ <Navigation /> }>
				<Route index element={ <Home /> } />
				<Route path='/skills' element={ <Skills /> } />
				<Route path='/contact' element={ <Contact /> } />
			</Route>
		</Routes>
	</div>

export default App;
