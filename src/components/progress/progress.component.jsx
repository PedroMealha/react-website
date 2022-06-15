import { Link } from "react-router-dom";
import './progress.styles.scss';

const Progress = ({ skill }) => {
	const { title, percent, learning } = skill;

	return (
		<div className="tool">
			<p>{ title }<span>{ learning ? ' *' : '' }</span></p>
			<div className="progress">
				<div style={ { width: `${percent}%` } }>
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Progress;