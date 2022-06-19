import Header from '../../components/header/header.component';
import StackCard from "../../components/stack-card/stack-card.component";

import Logo from '../../assets/logo.svg';

import './about.styles.scss';

const About = () =>
	<div className="about">
		<Header section={ 'about' } />
		<img className="logo" src={ Logo } alt="logo" />

		<p className="intro">Frontend Developer with <span>6+ years</span> of experience creating desktop & mobile web content with high focus on clean code, cross-browser compatibility, performance and asset management as well as technical expertise on <span>interactive</span>, <span>dynamic</span> and <span>complex creatives</span> using <span>Javascript</span>, <span>HTML</span> and <span>CSS</span> (Less/Sass).<br /><br />
			I am a person who always strives to achieve the <span>highest possible standard</span> for anything that crosses my path and, having a <span>Design</span> background, I implement that knowledge on outputting work that won’t be just <span>functional</span> but also <span>appealing</span> to the end user.</p>

		<div className="strengths">
			<StackCard stackType="team" />
			<StackCard stackType="eye" />
			<StackCard stackType="books" />
			{/* <StackCard stackType="stack" /> */}
		</div>
	</div>

export default About;