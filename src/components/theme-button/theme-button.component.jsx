import './theme-button.styles.scss';

const getUserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (getUserTheme) document.body.classList.add('dark-mode');

const updateCurrentTheme = () => document.body.classList.toggle('dark-mode');

const ThemeButton = () =>
	<button className="theme-button" onClick={ updateCurrentTheme }></button>

export default ThemeButton;