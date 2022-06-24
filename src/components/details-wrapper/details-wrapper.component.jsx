import { useContext } from 'react';

import { NavigationContext } from '../../context/navigation.context';

import AvatarWrapper from "../avatar-wrapper/avatar-wrapper.component";
import PersonalInfoWrapper from "../personal-info-wrapper/personal-info-wrapper.component";

import './details-wrapper.styles.scss';

const DetailsWrapper = () => {
	const { isNavOpen } = useContext(NavigationContext);

	return (
		<div className={ `app-details-wrapper ${isNavOpen ? 'open' : ''}` }>
			<AvatarWrapper />
			<PersonalInfoWrapper />
		</div>
	)
}

export default DetailsWrapper;