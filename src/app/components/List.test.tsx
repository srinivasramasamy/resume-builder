import { render } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("should render list", () => {
    // Given
    const { container } = render(<List />);

    // Then
    expect(container).toBeTruthy();
  });
});
