import Name from "./Name";

describe("Name", () => {
  it("should initialize first name with default value", () => {
    // Given
    const name: Name = new Name();

    // Then
    expect(name.firstName).toBe("");
  });

  it("should initialize last name with default value", () => {
    // Given
    const name: Name = new Name();

    // Then
    expect(name.lastName).toBe("");
  });

  it("should initialize with first name", () => {
    // Given
    const firstName: string = "First Name";
    const name: Name = new Name({ firstName: firstName });

    // Then
    expect(name.firstName).toBe(firstName);
  });

  it("should initialize with last name", () => {
    // Given
    const lastName: string = "Last Name";
    const name: Name = new Name({ lastName: lastName });

    // Then
    expect(name.lastName).toBe(lastName);
  });
});
