import { shallow } from "enzyme";
import Skills from "./skills.component";

describe('Skill component', () => {

	const mockStack = {
		coding: [
			{
				0: {
					learning: false,
					percent: 95,
					title: 'HTML'
				}
			}
		]
	}

	const wrapper = shallow(<Skills stackMap={ mockStack } />)

	it('expect to render', () => {
		expect(wrapper).toMatchSnapshot();
	})
});
