import { shallow } from "enzyme";
import PersonalInfoWrapper from "./personal-info-wrapper.component";

describe("PersonalInfoWrapper component", () => {
	it("expect to render", () => {
		const wrapper = shallow(<PersonalInfoWrapper />)
		expect(wrapper).toMatchSnapshot();
	});
});
