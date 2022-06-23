import { shallow } from "enzyme";
import Header from "./header.component";

describe('Header component', () => {
	it('expect to render Header component', () => {
		expect(shallow(<Header section='about' />)).toMatchSnapshot();
	})
})