import { Link } from "react-router-dom";

import './avatar-wrapper.style.scss';

const AvatarWrapper = () =>
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

export default AvatarWrapper;