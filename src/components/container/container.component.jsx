
import { Routes, Route } from "react-router-dom";

import About from "../../routes/about/about.component";
import Skills from "../../routes/skills/skills.component";
import Contact from "../../routes/contact/contact.component";

const Container = () =>
	<Routes>
		<Route path='/' element={ <About /> } />
		<Route path='/skills' element={ <Skills /> } />
		<Route path='/contact' element={ <Contact /> } />
	</Routes>

export default Container;