import { render } from "@testing-library/react";
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
    const { queryAllByText } = render(<ProfessionalSummaryForm />);

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
    const { container } = render(<ProfessionalSummaryForm />);

    // Then
    expect(container.querySelector("#professionalSummary")?.textContent).toBe(
      professionalSummary
    );
  });
});
