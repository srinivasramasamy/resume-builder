import { render } from "@testing-library/react";
import Resume from "../types/Resume";
import SkillsForm from "./SkillsForm";

describe("SkillsForm", () => {
  beforeEach(() => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume()));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("render skills heading", () => {
    // Given
    const { container } = render(<SkillsForm />);

    // Then
    expect(container.querySelector("h1")?.textContent).toEqual("Skills");
  });

  it("renders skills form local storage", () => {
    // Given
    const skills: string[] = ["Javascript", "React"];
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume({ skills: skills })));

    // When
    const { getAllByRole } = render(<SkillsForm />);

    // Then
    expect(getAllByRole("listitem").map((li) => li.textContent)).toEqual(
      skills
    );
  });
});