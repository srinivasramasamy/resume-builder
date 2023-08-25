import { fireEvent, render } from "@testing-library/react";
import { Page } from "../types/Page";
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

  it("removes skill", () => {
    // Given
    const skills: string[] = ["Javascript", "React", "HTML"];
    const reactIndex: number = skills.indexOf("React");
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume({ skills: skills })));
    const { getAllByRole, queryByText } = render(<SkillsForm />);
    const removeReact: HTMLElement = getAllByRole("button")[reactIndex];

    // When
    fireEvent.click(removeReact);

    // Then
    expect(queryByText(skills[reactIndex])).toBeFalsy();
  });

  it("should have a add skill input", () => {
    // Given
    const { getAllByPlaceholderText } = render(<SkillsForm />);

    // Then
    expect(getAllByPlaceholderText("Add Skill")).toBeTruthy();
  });

  it("should add a skill", () => {
    // Given
    const skill: string = "Java";
    const { queryByText, getByPlaceholderText } = render(<SkillsForm />);
    const skillInput: HTMLElement = getByPlaceholderText("Add Skill");
    fireEvent.change(skillInput, { target: { value: skill } });

    // When
    fireEvent.keyDown(skillInput, { code: "Enter" });

    // Then
    expect(queryByText(skill)).toBeTruthy();
  });

  it("should clear skill from input after adding", () => {
    // Given
    const { getByPlaceholderText } = render(<SkillsForm />);
    const skillInput: HTMLElement = getByPlaceholderText("Add Skill");
    fireEvent.change(skillInput, { target: { value: "Java" } });

    // When
    fireEvent.keyDown(skillInput, { code: "Enter" });

    // Then
    expect(skillInput.getAttribute("value")).toBe("");
  });

  it("should call set page with professional summary form", () => {
    // Given
    const setPage = jest.fn();
    const { queryByText } = render(<SkillsForm setPage={setPage} />);
    const back: Element = queryByText("Back")!;

    // When
    fireEvent.click(back);

    // Then
    expect(setPage).toBeCalledWith(Page.ProfessionalSummaryForm);
  });
});
