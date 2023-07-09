import { render } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading", () => {
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

  it("renders zip", () => {
    // Given
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#zip")).toBeTruthy();
  });

  it("renders phone", () => {
    // Given
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#phone")).toBeTruthy();
  });

  it("renders email", () => {
    // Given
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#email")).toBeTruthy();
  });

  it("renders back", () => {
    // Given
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#back")).toBeTruthy();
  });

  it("renders next", () => {
    // Given
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#next")).toBeTruthy();
  });
});
