import { render } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  it("render skills heading", () => {
    // Given
    const { container } = render(<Skills />);

    // Then
    expect(container.querySelector("h1")?.textContent).toEqual("Skills");
  });
});
