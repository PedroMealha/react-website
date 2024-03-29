import { useSelector } from "react-redux/";
import { selectStacksMap } from '../../store/stacks/stacks.selector.js';

import Divider from "../divider/divider.component";
import LanguageCard from "../language-card/language-card.component";
import Skills from "../skills/skills.component";

import './personal-info-wrapper.style.scss';

const PersonalInfoWrapper = () => {
	const stackMap = useSelector(selectStacksMap);

	return (
		<div className="personal-info-wrapper">
			<div className="personal-info">
				<div className="location">
					<ul>
						<li>
							<h4>Location</h4>
							<p>Portugal</p>
						</li>
						<li>
							<h4>City</h4>
							<p>Lisbon</p>
						</li>
						<li>
							<h4>Experience</h4>
							<span>6+</span>
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
					<Skills />
				</div>
			</div>
			
			<div className="personal-info-shadow"></div>
		</div>
	)
}

export default PersonalInfoWrapper;