import TimelineContainer from "../timeline-container/timeline-container.component";
import TIMELINE_DATA from './timeline-data.js'

import './timeline-wrapper.styles.scss';

const TimelineWrapper = () => {

	return (
		<div className="timeline-wrapper">
			{
				Object.keys(TIMELINE_DATA).map(data => <TimelineContainer key={ data } data={ TIMELINE_DATA[data] } />)
			}
		</div>
	)
}

export default TimelineWrapper;