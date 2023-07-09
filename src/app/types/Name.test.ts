import Name from "./Name";

describe("Name", () => {
  it("should initialize with default values", () => {
    // Given
    const name: Name = new Name();

    // Then
    expect(name.firstName).toBe("");
  });
});
