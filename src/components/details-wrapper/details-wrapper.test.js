import { shallow } from "enzyme";
import DetailsWrapper from "./details-wrapper.component";

describe('DetailsWrapper component', () => {
	const wrapper = shallow(<DetailsWrapper />);

	it('expect to render DetailsWrapper component', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('verify if isNavOpen starts as false', () => {
		expect(wrapper.find("isNavOpen").exists()).toEqual(false);
	})

	it('verify if isNavOpen adds class', () => {
		expect(wrapper.find('.app-details-wrapper').hasClass('open')).toEqual(false);
	})
})