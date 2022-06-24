import { shallow } from "enzyme";
import AvatarWrapper from "./avatar-wrapper.component";

describe("AvatarWrapper component", () => {
	it("expect to render", () => {
		const wrapper = shallow(<AvatarWrapper />)
		expect(wrapper).toMatchSnapshot();
	});
});
