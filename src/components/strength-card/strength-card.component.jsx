
import './strength-card.styles.scss';

const StrengthCard = ({ strength }) => {
	const { Icon, title, description } = strength;

	return (
		<div className="strength-card">
			<div>
				<Icon />
				<h3>{ title }</h3>
			</div>
			<p>{ description }</p>
		</div>
	)
}

export default StrengthCard;