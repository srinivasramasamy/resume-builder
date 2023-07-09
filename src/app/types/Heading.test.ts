import Heading from "./Heading";

describe("Heading", () => {
  it("should initialize with default values", () => {
    // Given
    const heading: Heading = new Heading();

    // Then
    expect(heading.name.firstName).toBe("");
    expect(heading.name.lastName).toBe("");
    expect(heading.phoneNumber).toBeNull();
    expect(heading.email).toBe("");
    expect(heading.city).toBe("");
    expect(heading.state).toBe("");
    expect(heading.zip).toBe("");
    expect(heading.links).toStrictEqual([]);
  });
});
