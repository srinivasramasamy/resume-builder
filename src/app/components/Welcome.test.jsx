import { render } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome", () => {
  it("should render start", () => {
    // Given
    const { container } = render(<Welcome />);

    // Then
    expect(container.querySelector("#start")).toBeTruthy();
  });
});
