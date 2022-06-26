import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import './nav-button.styles.scss';

import { selectIsNavOpen } from "../../store/navigation/navigation.selector";
import { setIsNavOpen } from "../../store/navigation/navigation.actions";

import { ReactComponent as About } from '../../assets/about.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Behance } from '../../assets/behance.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { ReactComponent as Skills } from '../../assets/skills.svg';

const NavButton = ({ buttonType }) => {
	const isNavOpen = useSelector(selectIsNavOpen);
	const dispatch = useDispatch();

	const toggleIsCartOpen = e => {
		e.preventDefault();
		dispatch(setIsNavOpen(true));
	}

	const navigate = useNavigate();

	const handleInternalClick = path => {
		navigate(path);
	};

	const handleExternalClick = url => window.open(url);

	const handleClick = e => {
		e.preventDefault();
		if (isNavOpen) toggleIsCartOpen();
		url();
	}

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

	const { Icon, url } = BUTTON_TYPES[buttonType];

	return (
		<div className="nav-button" onClick={ handleClick } >
			<Icon className="nav-icon" />
		</div>
	)
}

export default NavButton;