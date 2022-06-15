import UnderConstruction from "../under-construction/under-construction.component";

import './highlight.styles.scss';
import Logo from '../../assets/logo.svg';

const Highlight = () =>
	<div className="highlight">
		<img className="logo" src={ Logo } alt="logo" />
		{/* <UnderConstruction /> */}
	</div>

export default Highlight;