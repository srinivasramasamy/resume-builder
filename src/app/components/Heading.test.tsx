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

it("renders last name", () => {
  // Given
  const { container } = render(<Heading />);

  // Then
  expect(container.querySelector("#lastName")).toBeTruthy();
});

it("renders city", () => {
  // Given
  const { container } = render(<Heading />);

  // Then
  expect(container.querySelector("#city")).toBeTruthy();
});

it("renders state", () => {
  // Given
  const { container } = render(<Heading />);

  // Then
  expect(container.querySelector("#state")).toBeTruthy();
});
