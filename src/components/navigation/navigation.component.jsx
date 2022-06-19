import NavButton from "../../components/nav-button/nav-button.component";

import './navigation.styles.scss';

const Navigation = () =>
	<div className="navigation">
		<div className="nav-external">
			<NavButton buttonType='about' />
			<NavButton buttonType='linkedin' />
			<NavButton buttonType='github' />
			<NavButton buttonType='behance' />
			<NavButton buttonType='contact' />
		</div>
	</div>

export default Navigation;