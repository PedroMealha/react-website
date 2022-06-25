import { useSelector, useDispatch } from "react-redux";

import { selectIsNavOpen } from "../../store/navigation/navigation.selector";
import { setIsNavOpen } from "../../store/navigation/navigation.actions";

import './toggle-details.styles.scss';

const ToggleDetails = () => {
	const isNavOpen = useSelector(selectIsNavOpen);
	const dispatch = useDispatch();

	const toggleIsCartOpen = e => {
		e.preventDefault();
		dispatch(setIsNavOpen(!isNavOpen));
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