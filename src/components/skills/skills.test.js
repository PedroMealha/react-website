import { shallow } from "enzyme";
import Skills from "./skills.component";

describe('Skill component', () => {
	it('expect to render', () => {
		expect(shallow(<Skills skillType="other" />)).toMatchSnapshot();
	})
});
