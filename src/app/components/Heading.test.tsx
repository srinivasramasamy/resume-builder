import { render } from "@testing-library/react";
import { Heading as HeadingType } from "../types/Heading";
import Name from "../types/Name";
import Resume from "../types/Resume";
import Heading from "./Heading";

describe("Heading component", () => {
  beforeEach(() => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume()));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
    expect(container.querySelector("#phoneNumber")).toBeTruthy();
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

  it("renders first name form local storage", () => {
    // Given
    const firstName: string = "First Name";
    const heading: HeadingType = new HeadingType({
      name: new Name({ firstName: firstName }),
    });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#firstName")?.getAttribute("value")).toBe(
      firstName
    );
  });

  it("renders last name form local storage", () => {
    // Given
    const lasstName: string = "Last Name";
    const heading: HeadingType = new HeadingType({
      name: new Name({ lastName: lasstName }),
    });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#lastName")?.getAttribute("value")).toBe(
      lasstName
    );
  });

  it("renders city form local storage", () => {
    // Given
    const city: string = "City";
    const heading: HeadingType = new HeadingType({ city: city });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#city")?.getAttribute("value")).toBe(city);
  });

  it("renders state form local storage", () => {
    // Given
    const state: string = "State";
    const heading: HeadingType = new HeadingType({ state: state });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#state")?.getAttribute("value")).toBe(
      state
    );
  });

  it("renders zip form local storage", () => {
    // Given
    const zip: string = "24450";
    const heading: HeadingType = new HeadingType({ zip: zip });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#zip")?.getAttribute("value")).toBe(zip);
  });

  it("renders phone form local storage", () => {
    // Given
    const phoneNumber: string = "1234567890";
    const heading: HeadingType = new HeadingType({ phoneNumber: phoneNumber });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#phoneNumber")?.getAttribute("value")).toBe(
      phoneNumber
    );
  });

  it("renders email form local storage", () => {
    // Given
    const email: string = "email@gmail.com";
    const heading: HeadingType = new HeadingType({ email: email });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<Heading />);

    // Then
    expect(container.querySelector("#email")?.getAttribute("value")).toBe(
      email
    );
  });
});
