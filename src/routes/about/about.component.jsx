import Header from '../../components/header/header.component';
import StrengthsWrapper from "../../components/strengths-wrapper/strengths-wrapper.component";
import TimelineWrapper from "../../components/timeline-wrapper/timeline-wrapper.component";

import Logo from '../../assets/logo.svg';

import './about.styles.scss';

const About = () =>
	<div className="about">
		<Header section={ 'about' } />
		<img className="logo" src={ Logo } alt="logo" />

		<div className="intro">
			<p><span>Frontend Developer</span> with <span>6+ years</span> of experience creating desktop & mobile web content with high focus on clean code, cross-browser compatibility, responsive layout, performance and asset management as well as technical expertise on <span>interactive</span>, <span>dynamic</span> and <span>complex creatives</span> using <span>Javascript</span>, <span>HTML</span> and <span>CSS</span>.</p>
			<br />
			<p>I also have experience with <span>React.js</span> - including <span>Redux</span>, Testing (<span>RTL</span>/<span>Jest</span>/<span>Enzyme</span>), <span>Firebase</span> and Cloud <span>Firestore</span> and some <span>Typescript</span>.</p><br />
			<p><span>Learning</span>, <span>evolving</span>, <span>team play</span> focus, <span>company growth</span> are my passions on a work environment and I love learning on my time off in ways that are <span>beneficial</span> not only for <span>me</span> but for the <span>company</span> i'm at.</p>
			<br />
			<p>I am a person who always strives to achieve the <span>highest possible standard</span> for anything that crosses my path and, having a <span>Design</span> background, I implement that knowledge on outputting work that won`t be just <span>functional</span> but also <span>appealing</span> to the end user.</p><br />
			<p>On a personal note, i'm a <span>passionate learner</span> who loves to explore the world of programming doing the most random mini projects as I evolve. A <span>responsible</span> and <span>down-to-earth</span> individual but also a <span>goofy</span>, outgoing <span>chill</span> person who enjoys the perks of team dynamics and a good laugh!</p>
		</div>

		<StrengthsWrapper />
		<TimelineWrapper />
	</div>

export default About;