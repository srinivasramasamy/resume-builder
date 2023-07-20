import { render } from "@testing-library/react";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";

describe("Professional Summary Form", () => {
  it("should render professional summary heading", () => {
    // Given
    const { queryAllByText } = render(<ProfessionalSummaryForm />);

    // Then
    expect(queryAllByText("Professional Summary")).toBeTruthy();
  });
});
