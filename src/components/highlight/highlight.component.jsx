import './highlight.styles.scss';
import Logo from '../../assets/logo.svg';

const Highlight = () =>
	<div className="highlight">
		<img className="logo" src={ Logo } alt="logo" />
		<div className="under-construction">
			<div>
				<div>UNDER CONSTRUCTION</div>
				<p>some sections might not be complete</p>
			</div>
		</div>
	</div>

export default Highlight;