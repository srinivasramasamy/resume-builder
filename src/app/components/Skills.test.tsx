import { render } from "@testing-library/react";
import Resume from "../types/Resume";
import Skills from "./Skills";

describe("Skills", () => {
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
    const { container } = render(<Skills />);

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
    const { getAllByRole } = render(<Skills />);

    // Then
    expect(getAllByRole("listitem").map((li) => li.textContent)).toEqual(
      skills
    );
  });
});
