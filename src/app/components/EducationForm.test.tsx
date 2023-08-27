import { render } from "@testing-library/react";
import EducationForm from "./EducationForm";

describe("Education form", () => {
  it("should render heading", () => {
    // Given
    const { queryByText } = render(<EducationForm />);

    // Then
    expect(queryByText("Education")).toBeTruthy();
  });
});
