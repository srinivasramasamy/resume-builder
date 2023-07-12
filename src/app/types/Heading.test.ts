import { Heading } from "./Heading";
import Name from "./Name";

describe("Heading", () => {
  it("should initialize with default values", () => {
    // Given
    const heading: Heading = new Heading();

    // Then
    expect(heading.name.firstName).toBe("");
    expect(heading.name.lastName).toBe("");
    expect(heading.phoneNumber).toBe("");
    expect(heading.email).toBe("");
    expect(heading.city).toBe("");
    expect(heading.state).toBe("");
    expect(heading.zip).toBe("");
    expect(heading.links).toStrictEqual([]);
  });

  it("should initialize with name", () => {
    // Given
    const name: Name = new Name({
      firstName: "First Name",
      lastName: "Last Name",
    });

    // When
    const heading: Heading = new Heading({ name: name });

    // Then
    expect(heading.name).toBe(name);
  });

  it("should initialize with phone number", () => {
    // Given
    const phoneNumber: string = "1234567890";

    // When
    const heading: Heading = new Heading({ phoneNumber: phoneNumber });

    // Then
    expect(heading.phoneNumber).toBe(phoneNumber);
  });

  it("should initialize with email", () => {
    // Given
    const email: string = "email@gmail.com";

    // When
    const heading: Heading = new Heading({ email: email });

    // Then
    expect(heading.email).toBe(email);
  });

  it("should initialize with city", () => {
    // Given
    const city: string = "City";

    // When
    const heading: Heading = new Heading({ city: city });

    // Then
    expect(heading.city).toBe(city);
  });

  it("should initialize with state", () => {
    // Given
    const state: string = "State";

    // When
    const heading: Heading = new Heading({ state: state });

    // Then
    expect(heading.state).toBe(state);
  });

  it("should initialize with zip", () => {
    // Given
    const zip: string = "29220";

    // When
    const heading: Heading = new Heading({ zip: zip });

    // Then
    expect(heading.zip).toBe(zip);
  });
});
