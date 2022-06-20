import { useContext } from "react";

import { NavigationContext } from '../../context/navigation.context';

import './toggle-details.styles.scss';

const ToggleDetails = () => {
	const { isNavOpen, setIsNavOpen } = useContext(NavigationContext);

	const toggleIsCartOpen = e => {
		e.preventDefault();
		setIsNavOpen(!isNavOpen);
	}

	return (
		<div className={ `toggle-details ${isNavOpen ? 'open' : ''}` } onClick={ toggleIsCartOpen }>
			<div className="toggle-button">
				<div className="top"></div>
				<div className="mid"></div>
				<div className="bot"></div>
			</div>
		</div>
	)
}

export default ToggleDetails;