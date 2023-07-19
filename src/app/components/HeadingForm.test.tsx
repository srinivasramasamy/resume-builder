import { fireEvent, render } from "@testing-library/react";
import { Heading } from "../types/Heading";
import Name from "../types/Name";
import { Page } from "../types/Page";
import Resume from "../types/Resume";
import HeadingForm from "./HeadingForm";

describe("Heading Form", () => {
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
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("h1")?.textContent).toEqual("Heading");
  });

  it("renders first name", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#firstName")).toBeTruthy();
  });

  it("renders last name", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#lastName")).toBeTruthy();
  });

  it("renders city", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#city")).toBeTruthy();
  });

  it("renders state", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#state")).toBeTruthy();
  });

  it("renders zip", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#zip")).toBeTruthy();
  });

  it("renders phone", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#phoneNumber")).toBeTruthy();
  });

  it("renders email", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#email")).toBeTruthy();
  });

  it("renders back", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#back")).toBeTruthy();
  });

  it("renders next", () => {
    // Given
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#next")).toBeTruthy();
  });

  it("renders first name form local storage", () => {
    // Given
    const firstName: string = "First Name";
    const heading: Heading = new Heading({
      name: new Name({ firstName: firstName }),
    });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#firstName")?.getAttribute("value")).toBe(
      firstName
    );
  });

  it("renders last name form local storage", () => {
    // Given
    const lasstName: string = "Last Name";
    const heading: Heading = new Heading({
      name: new Name({ lastName: lasstName }),
    });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#lastName")?.getAttribute("value")).toBe(
      lasstName
    );
  });

  it("renders city form local storage", () => {
    // Given
    const city: string = "City";
    const heading: Heading = new Heading({ city: city });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#city")?.getAttribute("value")).toBe(city);
  });

  it("renders state form local storage", () => {
    // Given
    const state: string = "State";
    const heading: Heading = new Heading({ state: state });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#state")?.getAttribute("value")).toBe(
      state
    );
  });

  it("renders zip form local storage", () => {
    // Given
    const zip: string = "24450";
    const heading: Heading = new Heading({ zip: zip });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#zip")?.getAttribute("value")).toBe(zip);
  });

  it("renders phone form local storage", () => {
    // Given
    const phoneNumber: string = "1234567890";
    const heading: Heading = new Heading({ phoneNumber: phoneNumber });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#phoneNumber")?.getAttribute("value")).toBe(
      phoneNumber
    );
  });

  it("renders email form local storage", () => {
    // Given
    const email: string = "email@gmail.com";
    const heading: Heading = new Heading({ email: email });
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(new Resume(heading)));

    // When
    const { container } = render(<HeadingForm onPageChange={jest.fn()} />);

    // Then
    expect(container.querySelector("#email")?.getAttribute("value")).toBe(
      email
    );
  });

  it("should call on page change with welcome", () => {
    // Given
    const onPageChange = jest.fn();
    const { queryByText } = render(<HeadingForm onPageChange={onPageChange} />);
    const back: Element = queryByText("Back")!;

    // When
    fireEvent.click(back);

    // Then
    expect(onPageChange).toBeCalledWith(Page.Welcome);
  });

  it("should call on page change with professional form", () => {
    // Given
    const onPageChange = jest.fn();
    const { queryByText } = render(<HeadingForm onPageChange={onPageChange} />);
    const next: Element = queryByText("Next")!;

    // When
    fireEvent.click(next);

    // Then
    expect(onPageChange).toBeCalledWith(Page.ProfessionalSummaryForm);
  });
});
