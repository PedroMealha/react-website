import { useContext } from "react";

import { NavigationContext } from '../../context/navigation.context';

import './toggle-details.styles.scss';

const ToggleDetails = () => {
	const { isNavOpen, setIsNavOpen } = useContext(NavigationContext);
	const toggleIsCartOpen = () => setIsNavOpen(!isNavOpen);

	return (
		<div className={ `toggle-details ${isNavOpen ? 'open' : ''}` } onClick={ toggleIsCartOpen }>
			<div className="top"></div>
			<div className="bottom"></div>
		</div>
	)
}

export default ToggleDetails;