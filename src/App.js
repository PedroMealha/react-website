import { Routes, Route, Link } from "react-router-dom";

import { useContext } from 'react';

import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';

import NavButton from "./components/nav-button/nav-button.component";
import Divider from "./components/divider/divider.component";
import LanguageCard from "./components/language-card/language-card.component";
import Skills from "./components/skills/skills.component";

import { NavigationContext } from './context/navigation.context';

import Logo from './assets/logo.svg';

import './App.styles.scss';

const App = () => {
	const { isNavOpen, setIsNavOpen } = useContext(NavigationContext);

	const toggleIsCartOpen = () => setIsNavOpen(!isNavOpen);

	return (
		<div className="app-wrapper">
			<div className={ `app-details-wrapper ${isNavOpen ? 'open' : ''}` }>
				<div className="avatar-wrapper">
					<div className="avatar">
						<div className="avatar-picture"></div>
						<p className="name">Pedro Mealha</p>
						<p className="profession">Frontend Developer</p>
						<Link className="download" to="/CV_Pedro_Mealha.pdf" target="_blank" download>
							<button>Download CV</button>
						</Link>
					</div>
					<div className="avatar-shadow"></div>
				</div>
				<div className="personal-info-wrapper">
					<div className="personal-info">
						<div className="location">
							<ul>
								<li>
									<h4>Location:</h4>
									<span>Portugal</span>
								</li>
								<li>
									<h4>City:</h4>
									<span>Lisbon</span>
								</li>
							</ul>
						</div>
						<Divider />
						<div className="languages-wrapper">
							<h4>Languages</h4>
							<div className="languages">
								<LanguageCard language="Portuguese" percent="100" />
								<LanguageCard language="English" percent="95" />
							</div>
						</div>
						<Divider />
						<div className="skills-wrapper">
							<h4>Coding</h4>
							<p className="learning">* actively learning</p>
							<Skills skillType="coding" />
							<h4>Graphic</h4>
							<Skills skillType="graphic" />
						</div>
					</div>
				</div>
			</div>

			<div className="app-container-wrapper">
				<div className="app-container">
					<Routes>
						<Route path="/" element={ <About /> }></Route>
						<Route path="/contact" element={ <Contact /> }></Route>
					</Routes>
				</div>
			</div>

			<div className="app-navigation-wrapper">
				<img className="logo" src={ Logo } alt="logo" />

				<div className="app-navigation">
					<NavButton buttonType='about' />
					<NavButton buttonType='linkedin' />
					<NavButton buttonType='github' />
					<NavButton buttonType='behance' />
					<NavButton buttonType='contact' />
				</div>
			</div>
			<div className={ `toggle-details ${isNavOpen ? 'open' : ''}` } onClick={ toggleIsCartOpen }>
				<div className="top"></div>
				<div className="bottom"></div>
			</div>
		</div>
	)
}

export default App;
