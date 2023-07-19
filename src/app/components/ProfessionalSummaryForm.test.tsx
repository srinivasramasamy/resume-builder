import { render } from "@testing-library/react";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";

describe("Professional Summary Form", () => {
  it("should render professional summary heading", () => {
    // Given
    const { queryByText } = render(<ProfessionalSummaryForm />);

    // Then
    expect(queryByText("Professional Summary")).toBeTruthy();
  });
});
