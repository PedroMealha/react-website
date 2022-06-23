import { shallow } from "enzyme";
import React from "react";
import Progress from "./progress.component";

describe("Progress component", () => {
  it("expect to render Progress component", () => {
    const mockSkill = {
      title: "ReactJs",
      percent: 35,
      learning: true,
    };

    expect(shallow(<Progress skill={mockSkill} />)).toMatchSnapshot();
  });
});
