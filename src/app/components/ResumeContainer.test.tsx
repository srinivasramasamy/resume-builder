import { fireEvent, render } from "@testing-library/react";
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

  it("should hide welcome on clicking start", () => {
    // Given
    const { queryByText } = render(<ResumeContainer />);
    const start: Element = queryByText("Start")!;

    // When
    fireEvent.click(start);

    // Then
    expect(queryByText("Start")).toBeFalsy();
  });

  it("should show heading form on clicking start", () => {
    // Given
    const { queryByText } = render(<ResumeContainer />);
    const start: Element = queryByText("Start")!;

    // When
    fireEvent.click(start);

    // Then
    expect(queryByText("Heading")).toBeTruthy();
  });

  it("should show welcome when back is clicked from heading form", () => {
    // Given
    const { queryByText } = render(<ResumeContainer />);
    const start: Element = queryByText("Start")!;
    fireEvent.click(start);
    const back: Element = queryByText("Back")!;

    // When
    fireEvent.click(back);

    // Then
    expect(queryByText("Start")).toBeTruthy();
  });

  it("should show professional summary form when next is clicked from heading form", () => {
    // Given
    const { queryByText } = render(<ResumeContainer />);
    const start: Element = queryByText("Start")!;
    fireEvent.click(start);
    const back: Element = queryByText("Next")!;

    // When
    fireEvent.click(back);

    // Then
    expect(queryByText("Professional Summary")).toBeTruthy();
  });
});
