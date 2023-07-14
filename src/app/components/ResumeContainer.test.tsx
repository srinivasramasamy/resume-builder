import { render } from "@testing-library/react";
import Resume from "../types/Resume";
import ResumeContainer from "./ResumeContainer";

describe("Resume container", () => {
  beforeEach(() => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume()));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.todo("Should set default resume to local storage");

  it("should hide heading form", () => {
    // Given
    const { queryByText } = render(<ResumeContainer />);

    // Then
    expect(queryByText("Heading")).toBeFalsy();
  });

  it("should show welcome", () => {
    // Given
    const { container } = render(<ResumeContainer />);

    // Then
    expect(container.querySelector("#start")).toBeTruthy();
  });
});
