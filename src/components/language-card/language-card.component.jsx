import './language-card.styles.scss';

const LanguageCard = ({ ...props }) => {
	const { language, percent } = props;
	const strokeDashoffset = 564.5731811523438 - (percent / 100) * 564.5731811523438;

	return (
		<div className="language-card">
			<svg viewBox="0 0 200 200">
				<circle cx="100" cy="100" r="90" fill="none" strokeMiterlimit="10" strokeWidth="12" strokeDashoffset={ strokeDashoffset } transform="rotate(-90)" />
				<text x="100" y="115" textAnchor="middle" fontSize="50">{ percent }%</text>
			</svg>
			<div>{ language }</div>
		</div>
	)
}

export default LanguageCard;