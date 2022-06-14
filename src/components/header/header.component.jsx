import './header.styles.scss';

const HEADERS = {
	profile: {
		h1: 'about me',
		h3: 'Frontend Developer / Portugal'
	},
	skills: {
		h1: 'skills',
		h3: 'What I offer'
	},
	contact: {
		h1: 'contact',
		h3: 'Get in touch!'
	},
}

const Header = ({ section }) => {
	const { h1, h3 } = HEADERS[section];

	return (
		<div className="header">
			<h1>{ h1 }</h1>
			<h3>{ h3 }</h3>
		</div>
	)
}

export default Header;