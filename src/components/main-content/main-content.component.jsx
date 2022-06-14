
import { useContext } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../header/header.component";

import Home from "../../routes/home/home.component";
import Skills from "../../routes/skills/skills.component";
import Contact from "../../routes/contact/contact.component";

import './main-content.styles.scss';

import { SectionContext } from "../../context/section.context";

const MainContent = () => {
	const { currentSection } = useContext(SectionContext);

	return (
		<div className="main-content">
			<Header section={ currentSection } />
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/skills' element={ <Skills /> } />
				<Route path='/contact' element={ <Contact /> } />
			</Routes>
		</div>
	)
}

export default MainContent;