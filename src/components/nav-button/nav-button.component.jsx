import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import './nav-button.styles.scss';

import ToolTip from '../tooltip/tooltip.component';

import { SectionContext } from "../../context/section.context";
import { NavigationContext } from "../../context/navigation.context";

import { ReactComponent as About } from '../../assets/about.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Behance } from '../../assets/behance.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { ReactComponent as Skills } from '../../assets/skills.svg';

const toolTipMOnMouseMove = e => {
	const pos = {
		x: e.pageX,
		y: e.pageY
	}

	const button = e.target;
	const tooltip = e.target.children[1];
	tooltip.style.opacity = 1;

	const newPos = {
		x: pos.x - button.offsetLeft,
		y: pos.y - button.offsetTop - tooltip.clientHeight / 2
	}
	tooltip.style.transform = `translate(${newPos.x}px, ${newPos.y}px)`;
}

const toolTipMOnMouseLeave = e => {
	const tooltip = e.target.children[1];
	tooltip.style.opacity = 0;
}

const NavButton = ({ buttonType }) => {
	const { isNavOpen, setIsNavOpen } = useContext(NavigationContext);
	const toggleIsCartOpen = () => setIsNavOpen(false);


	const navigate = useNavigate();
	const { setCurrentSection } = useContext(SectionContext);
	const updateCurrentSection = () => setCurrentSection(buttonType);

	const handleInternalClick = path => {
		updateCurrentSection();
		navigate(path);
	};

	const handleExternalClick = url => window.open(url);

	const BUTTON_TYPES = {
		about: {
			Icon: About,
			url: () => handleInternalClick('/'),
			tooltip: 'About'
		},
		linkedin: {
			Icon: LinkedIn,
			url: () => handleExternalClick('https://www.linkedin.com/in/pedromealha/'),
			tooltip: 'LinkedIn'
		},
		github: {
			Icon: GitHub,
			url: () => handleExternalClick('https://github.com/pedromealha'),
			tooltip: 'Github'
		},
		behance: {
			Icon: Behance,
			url: () => handleExternalClick('https://behance.net/pedromealha'),
			tooltip: 'Behance'
		},
		contact: {
			Icon: Contact,
			url: () => handleInternalClick('/contact'),
			tooltip: 'Contact'
		},
		skills: {
			Icon: Skills,
			url: () => handleInternalClick('/skills'),
			tooltip: 'Skills'
		}
	}

	const { Icon, url, tooltip } = BUTTON_TYPES[buttonType];

	const handleClick = () => {
		if (isNavOpen) toggleIsCartOpen();
		url();
	}

	return (
		<div className="nav-button" onClick={ handleClick } >
			<Icon className="nav-icon" />
			{/* <ToolTip tooltip={ tooltip } /> */ }
		</div>
	)
}

export default NavButton;