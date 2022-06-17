import { ReactComponent as Team } from '../../assets/team.svg';
import { ReactComponent as Eye } from '../../assets/eye.svg';
import { ReactComponent as Books } from '../../assets/books.svg';
import { ReactComponent as Stack } from '../../assets/stack.svg';

import './stack-card.styles.scss';

const StackCard = ({ stackType }) => {
	const STACK_CARDS = {
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
		},
		stack: {
			Icon: Stack,
			title: 'My Stack',
			description: `Forever looking to expand my tech stack, I bring a variety of knowledge on different programs as well as programming languages such as:`
		}
	}

	const { Icon, title, description } = STACK_CARDS[stackType];

	return (
		<div className="stack-card">
			<div>
				<Icon />
				<h3>{ title }</h3>
			</div>
			<p>{ description }</p>
		</div>
	)
}

export default StackCard;