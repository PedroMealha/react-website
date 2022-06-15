
import { Routes, Route } from "react-router-dom";

import About from "../../routes/about/about.component";
import Skills from "../../routes/skills/skills.component";
import Contact from "../../routes/contact/contact.component";

import './main-content.styles.scss';

const MainContent = () => {
	return (
		<div className="main-content">
			
			<Routes>
				<Route path='/' element={ <About /> } />
				<Route path='/skills' element={ <Skills /> } />
				<Route path='/contact' element={ <Contact /> } />
			</Routes>
		</div>
	)
}

export default MainContent;