import React from "react";
import { shallow } from "enzyme";
import DetailsWrapper from "./details-wrapper.component";
import { NavigationContext } from '../../context/navigation.context';

describe('DetailsWrapper component', () => {
	const wrapper = shallow(<DetailsWrapper />);

	it('expect to render DetailsWrapper component', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('expect isNavOpen to start as false', () => {
		expect(wrapper.find("isNavOpen").exists()).toBeFalsy();
	})

	it("expect isNavOpen=true to add 'open' class", () => {
		jest.spyOn(React, 'useContext').mockImplementation(() => ({
			isNavOpen: true
		}));

		const ContextComponent = () => (
			<NavigationContext.Provider>
				<DetailsWrapper />
			</NavigationContext.Provider>
		);

		const wrapper = shallow(<ContextComponent />);
		expect(wrapper.dive().dive().find('.app-details-wrapper').hasClass('open')).toBeTruthy();
	});
})