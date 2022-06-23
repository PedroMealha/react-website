import { Fragment, useContext } from "react";
import { StackContext } from '../../context/stack.context';

import Progress from "../progress/progress.component";

import './skills.styles.scss';

const Skills = () => {

	const { stackMap } = useContext(StackContext);

	return (
		<Fragment>
			{
				Object.keys(stackMap).map(area =>
					<Fragment key={ area }>
						<h4>{ area }</h4>
						<div className="skills">
							{
								stackMap[area].map(skill => (
									<Progress key={ skill.id } skill={ skill } />)
								)
							}
						</div>
					</Fragment>
				)
			}
		</Fragment>
	)
}

export default Skills;