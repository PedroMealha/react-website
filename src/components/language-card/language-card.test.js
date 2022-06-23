import { shallow } from "enzyme";
import LanguageCard from "./language-card.component";

describe('LanguageCard component', () => {
	it('expect to render LanguageCard component', () => {
		expect(shallow(<LanguageCard />)).toMatchSnapshot();
	})
})