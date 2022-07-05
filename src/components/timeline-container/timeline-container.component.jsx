import TimelineItem from "../timeline-item/timeline-item.component";

import './timeline-container.styles.scss';

const TimelineContainer = ({ data }) =>
	<div className="timeline-item-container">
		<h3>{ data.area }</h3>
		<div className="items">
			{
				data.milestones.map(milestone => <TimelineItem key={ milestone.title } milestone={ milestone } />)
			}
		</div>
	</div>

export default TimelineContainer;