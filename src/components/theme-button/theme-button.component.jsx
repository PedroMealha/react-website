import './theme-button.styles.scss';

const getUserTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
if (getUserTheme) document.body.classList.add('light');

const updateCurrentTheme = () => document.body.classList.toggle('light-mode');

const ThemeButton = () =>
	<button className="theme-button" onClick={ updateCurrentTheme }></button>

export default ThemeButton;