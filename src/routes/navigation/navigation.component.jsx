import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import NavButton from "../../components/nav-button/nav-button.component";

import './navigation.styles.scss';

const Navigation = () => {

	return (
		<Fragment>
			<div className="navigation">
				<div className="nav-external">
					<NavButton buttonType='profile' />
					<NavButton buttonType='skills' />
					<NavButton buttonType='linkedin' />
					<NavButton buttonType='github' />
					<NavButton buttonType='behance' />
					<NavButton buttonType='contact' />
				</div>
			</div>
			<Outlet />
		</Fragment >
	)
}

export default Navigation;