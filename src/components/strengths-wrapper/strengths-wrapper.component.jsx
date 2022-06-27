import StrengthCard from "../strength-card/strength-card.component";

import { ReactComponent as Team } from '../../assets/team.svg';
import { ReactComponent as Eye } from '../../assets/eye.svg';
import { ReactComponent as Books } from '../../assets/books.svg';

import './strengths-wrapper.styles.scss';


const STRENGTHS_CARDS = {
	team: {
		Icon: Team,
		title: 'Team Focused',
		description: `Keen to share my knowledge, help, discuss, teach and learn from others`
	},
	eye: {
		Icon: Eye,
		title: 'Detail Oriented',
		description: `Always on the lookout for possible issues and overall quality of my work to match or overcome it's expectations`
	},
	books: {
		Icon: Books,
		title: 'Knowledge Seeker',
		description: 'Continuously focused on how to improve my skills so I can deliver my work with the best outcome possible'
	}
}

const StrengthsWrapper = () =>
	<div className="strengths-wrapper">
		{
			Object.keys(STRENGTHS_CARDS).map(strength => <StrengthCard key={ strength } strength={ STRENGTHS_CARDS[strength] } />)
		}
	</div>

export default StrengthsWrapper;