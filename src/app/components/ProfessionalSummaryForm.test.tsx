import { fireEvent, render } from "@testing-library/react";
import { Page } from "../types/Page";
import Resume from "../types/Resume";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";

describe("Professional Summary Form", () => {
  beforeEach(() => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume()));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render professional summary heading", () => {
    // Given
    const { queryAllByText } = render(
      <ProfessionalSummaryForm setPage={jest.fn()} />
    );

    // Then
    expect(queryAllByText("Professional Summary")).toBeTruthy();
  });

  it("renders professional summary form local storage", () => {
    // Given
    const professionalSummary: string = "Professional Summary";
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(
        JSON.stringify(new Resume({ professionalSummary: professionalSummary }))
      );

    // When
    const { container } = render(
      <ProfessionalSummaryForm setPage={jest.fn()} />
    );

    // Then
    expect(container.querySelector("#professionalSummary")?.textContent).toBe(
      professionalSummary
    );
  });

  it("should call set page with professional form on back click", () => {
    // Given
    const setPage = jest.fn();
    const { queryByText } = render(
      <ProfessionalSummaryForm setPage={setPage} />
    );
    const back: Element = queryByText("Back")!;

    // When
    fireEvent.click(back);

    // Then
    expect(setPage).toBeCalledWith(Page.HeadingForm);
  });

  it("should call set page with skills form on next click", () => {
    // Given
    const setPage = jest.fn();
    const { queryByText } = render(
      <ProfessionalSummaryForm setPage={setPage} />
    );
    const next: Element = queryByText("Next")!;

    // When
    fireEvent.click(next);

    // Then
    expect(setPage).toBeCalledWith(Page.SkillsForm);
  });
});
