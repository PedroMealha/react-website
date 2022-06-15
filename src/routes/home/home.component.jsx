import { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from '../../components/header/header.component';

import StackCard from "../../components/stack-card/stack-card.component";
import Progress from "../../components/progress/progress.component";

import './home.styles.scss';

const STACK_SKILLS = {
	0: {
		title: 'HTML',
		percent: 95,
		learning: false
	},
	1: {
		title: 'Javascript',
		percent: 95,
		learning: false
	},
	2: {
		title: 'CSS',
		percent: 95,
		learning: false
	},
	3: {
		title: 'ReactJs',
		percent: 40,
		learning: true
	},
	4: {
		title: 'VueJs',
		percent: 30,
		learning: true
	},
	5: {
		title: 'NodeJs',
		percent: 20,
		learning: false
	},
	6: {
		title: 'UI/UX',
		percent: 85,
		learning: false
	},
	7: {
		title: 'Adobe Photoshop',
		percent: 95,
		learning: false
	},
	8: {
		title: 'Adobe Illustrator',
		percent: 95,
		learning: false
	},
	9: {
		title: 'Adobe XD',
		percent: 80,
		learning: false
	},
	10: {
		title: 'Adobe After Effects',
		percent: 50,
		learning: false
	}
}

const Home = () => {
	return (
		<Fragment>
			<Header section={ 'profile' } />
			<div className="home">
				<p className="intro">Frontend Developer with <span>6+ years</span> of experience creating desktop & mobile web content with high focus on clean code, cross-browser compatibility, performance and asset management using <span>Javascript</span>, <span>HTML</span> and <span>CSS</span> (Less/Sass).<br /><br />
					I am a person who always strives to achieve the <span>highest possible standard</span> for anything that crosses my path and, having a <span>Design</span> background, I implement that knowledge on outputting work that won’t be just <span>functional</span> but also <span>appealing</span> to the end user.</p>

				<div className="strengths">
					<StackCard stackType="team" />
					<StackCard stackType="eye" />
					<StackCard stackType="books" />
				</div>

				<div className="stack">
					<StackCard stackType="stack" />
					{
						Object.values(STACK_SKILLS).map(skill => (<Progress skill={ skill } key={ skill.title } />))
					}
					<span>* actively learning</span>
				</div>

				<Link className="download" to="/CV_Pedro_Mealha.pdf" target="_blank" download><button>Download CV</button></Link>
			</div>
		</Fragment>
	)
}

export default Home;