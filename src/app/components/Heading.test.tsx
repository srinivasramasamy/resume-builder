import { render } from "@testing-library/react";
import Heading from "./Heading";

it("renders heading", () => {
  // Given
  const { container } = render(<Heading />);

  // Then
  expect(container.querySelector("h1")?.textContent).toEqual("Heading");
});

it("renders first name", () => {
  // Given
  const { container } = render(<Heading />);

  // Then
  expect(container.querySelector("#firstName")).toBeTruthy();
});
