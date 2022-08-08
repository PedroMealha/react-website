import { render, screen } from "@testing-library/react";
import Skills from "./skills.component";

const mockStackMap = {
  coding: [
    {
      title: "JEST",
      percent: 50,
      learning: true,
    },
  ],
};

test("should show 'coding' stack and if a skill is currently on learning state", async () => {
  render(<Skills stackMap={mockStackMap} />);

  const codingHeader = screen.getByRole("heading", { name: /coding/i });
  expect(codingHeader).toBeInTheDocument();

  const learningSkills = screen.getAllByText("*");
  expect(learningSkills).toHaveLength(2);
});
