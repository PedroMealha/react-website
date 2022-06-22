import Progress from "../progress/progress.component";

import './skills.styles.scss';

const CODING_SKILLS = {
	0: {
		title: 'HTML',
		percent: 95,
		learning: false
	},
	1: {
		title: 'Javascript',
		percent: 90,
		learning: false
	},
	2: {
		title: 'CSS',
		percent: 95,
		learning: false
	},
	3: {
		title: 'ReactJs',
		percent: 35,
		learning: true
	},
	4: {
		title: 'VueJs',
		percent: 25,
		learning: true
	}
}

const GRAPHIC_SKILLS = {
	0: {
		title: 'Adobe Photoshop',
		percent: 95,
		learning: false
	},
	1: {
		title: 'Adobe Illustrator',
		percent: 95,
		learning: false
	},
	2: {
		title: 'Adobe XD',
		percent: 80,
		learning: false
	},
	3: {
		title: 'Adobe After Effects',
		percent: 50,
		learning: false
	}
}

const OTHER_SKILLS = {
	0: {
		title: 'UI/UX',
		learning: false
	},
	1: {
		title: 'SCSS/LESS',
		learning: false
	},
	2: {
		title: 'Git',
		learning: false
	},
	3: {
		title: 'NodeJs',
		learning: false
	}
}

const SKILL_TYPES = {
	coding: CODING_SKILLS,
	graphic: GRAPHIC_SKILLS,
	other: OTHER_SKILLS
}

const Skills = ({ skillType }) =>
	<div className="skills">
		{
			Object.values(SKILL_TYPES[skillType]).map(skill => (<Progress skill={ skill } key={ skill.title } />))
		}
	</div>

export default Skills;