import { useSelector } from "react-redux";
import { selectIsNavOpen } from "../../store/navigation/navigation.selector";

import AvatarWrapper from "../avatar-wrapper/avatar-wrapper.component";
import PersonalInfoWrapper from "../personal-info-wrapper/personal-info-wrapper.component";

import './details-wrapper.styles.scss';

const DetailsWrapper = () => {
	const isNavOpen = useSelector(selectIsNavOpen);

	return (
		<div className={ `app-details-wrapper ${isNavOpen ? 'open' : ''}` }>
			<AvatarWrapper />
			<PersonalInfoWrapper />
		</div>
	)
}

export default DetailsWrapper;