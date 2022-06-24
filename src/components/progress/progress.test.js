import { shallow } from "enzyme";
import Progress from "./progress.component";

describe("Progress component", () => {
	const mockSkillWithPercent = {
		title: "ReactJs",
		percent: 35,
		learning: true,
	};

	const wrapperWithPercent = shallow(<Progress skill={ mockSkillWithPercent } />);
	
	it("expect to render Progress component", () => {
		expect(wrapperWithPercent).toMatchSnapshot();
	});
	
	it("expect to NOT ADD 'other' className", () => {
		expect(wrapperWithPercent.hasClass('other')).toBeFalsy();
	});
	
	const mockSkillNoPercent = {
		title: "ReactJs",
		learning: false,
	};
	
	const wrapperNoPercent = shallow(<Progress skill={ mockSkillNoPercent } />);
	
	it("expect to ADD 'other' className", () => {
		expect(wrapperNoPercent.hasClass('other')).toBeTruthy();
	});
});
