
import './header.styles.scss';

// import ThemeButton from "../theme-button/theme-button.component";

const Header = ({ section }) => {
	const HEADERS = {
		about: {
			h1: 'about me',
			h3: 'Who am I?'
		},
		contact: {
			h1: 'contact',
			h3: 'Let\'s talk?'
		},
	}
	
	const { h1, h3 } = HEADERS[section];

	return (
		<div className="header">
			<div className="gradient"></div>
			<div className="copy">
				<h1>{ h1 }</h1>
				<h3>{ h3 }</h3>
			</div>
			{/* <ThemeButton /> */}
		</div>
	)
}

export default Header;