import { useContext } from 'react';
import { Link } from "react-router-dom";

import { NavigationContext } from '../../context/navigation.context';

import Divider from "../divider/divider.component";
import LanguageCard from "../language-card/language-card.component";
import Skills from "../skills/skills.component";

import './details-wrapper.styles.scss';

const DetailsWrapper = () => {
	const { isNavOpen } = useContext(NavigationContext);

	return (
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
	)
}

export default DetailsWrapper;