import Heading from "./Heading";
import Resume from "./Resume";

describe("Resume", () => {
  it("should initialize with default values", () => {
    // Given
    const resume: Resume = new Resume();
    const heading: Heading = resume.heading;

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
