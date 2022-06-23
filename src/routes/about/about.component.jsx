import Header from '../../components/header/header.component';
import StackCard from "../../components/stack-card/stack-card.component";

import Logo from '../../assets/logo.svg';

import './about.styles.scss';

const About = () =>
	<div className="about">
		<Header section={ 'about' } />
		<img className="logo" src={ Logo } alt="logo" />

		<div className="intro">
			<p><span>Frontend Developer</span> with <span>6+ years</span> of experience creating desktop & mobile web content with high focus on clean code, cross-browser compatibility, responsive layout, performance and asset management as well as technical expertise on <span>interactive</span>, <span>dynamic</span> and <span>complex creatives</span> using <span>Javascript</span>, <span>HTML</span> and <span>CSS</span>.</p>
			<br />
			<p>I also have some experience with <span>Vue.js</span> and i started learning <span>React.js</span> due to high demand of the frontend's tech requirements - <span>including</span> Redux, Unit Testing, GraphQL, Firebase and Cloud Firestore with a final project of a fully functional online web store.</p><br />
			<p><span>Learning</span>, <span>evolving</span>, <span>team play</span> focus, <span>company growth</span> are my passions on a work environment and I love learning on my time off in ways that are <span>beneficial</span> not only for <span>me</span> but for the <span>company</span> i'm at.</p>
			<br />
			<p>I am a person who always strives to achieve the <span>highest possible standard</span> for anything that crosses my path and, having a <span>Design</span> background, I implement that knowledge on outputting work that won’t be just <span>functional</span> but also <span>appealing</span> to the end user.</p><br />
			<p>On a personal note, i'm a <span>passionate learner</span> who loves to explore the world of programming doing the most random mini projects as I evolve. A <span>responsible</span> and <span>down-to-earth</span> individual but also a <span>goofy</span>, outgoing <span>chill</span> person who enjoys the perks of team dynamics and a good laugh!</p>
		</div>

		<div className="strengths">
			<StackCard stackType="team" />
			<StackCard stackType="eye" />
			<StackCard stackType="books" />
			{/* <StackCard stackType="stack" /> */ }
		</div>
	</div>

export default About;