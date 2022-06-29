
import './strength-card.styles.scss';

const StrengthCard = ({ strength }) => {
	const { Icon, title, description } = strength;

	return (
		<div className="strength-card">
			<div>
				<Icon />
				<h4>{ title }</h4>
			</div>
			<p>{ description }</p>
		</div>
	)
}

export default StrengthCard;