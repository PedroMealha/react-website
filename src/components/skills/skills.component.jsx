import { Fragment } from "react";

import Progress from "../progress/progress.component";

import './skills.styles.scss';

const Skills = ({ stackMap }) => {

	return (
		<Fragment>
			{
				Object.keys(stackMap).map(area => {
					const stack = stackMap[area];

					return (
						stack &&
						<Fragment key={ area }>
							<h4>{ area }</h4>
							<div className="skills">
								{
									stack.map((skill, idx) =>
										<Progress key={ skill.title } skill={ skill } />)
								}
							</div>
						</Fragment>
					)
				})
			}
			<p className="learning"><span>*</span> actively learning</p>
		</Fragment>
	)
}

export default Skills;