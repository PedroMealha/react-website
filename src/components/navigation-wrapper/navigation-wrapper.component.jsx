import NavButton from "../nav-button/nav-button.component";
import Logo from '../../assets/logo.svg';

import './navigation-wrapper.styles.scss';

const Navigation = () =>
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

export default Navigation;