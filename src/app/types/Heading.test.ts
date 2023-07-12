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
});
