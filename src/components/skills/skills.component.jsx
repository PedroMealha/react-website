import { Fragment } from "react";
import { useSelector } from "react-redux/";

import Progress from "../progress/progress.component";
import { selectStacksMap } from '../../store/stacks/stacks.selector.js';

import './skills.styles.scss';

const Skills = () => {
	const stackMap = useSelector(selectStacksMap);

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
									stack.map(skill => (
										<Progress key={ skill.title } skill={ skill } />)
									)
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