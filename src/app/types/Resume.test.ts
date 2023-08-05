import { Heading } from "./Heading";
import Resume from "./Resume";

describe("Resume", () => {
  it("should initialize heading with default values", () => {
    // Given
    const resume: Resume = new Resume();
    const heading: Heading = resume.heading;

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

  it("should initialize professional summary with default value", () => {
    // Given
    const resume: Resume = new Resume();
    const professionalSummary: string = resume.professionalSummary;

    // Then
    expect(professionalSummary).toBe("");
  });

  it("should initialize skills with default value", () => {
    // Given
    const resume: Resume = new Resume();
    const skills: string[] = resume.skills;

    // Then
    expect(skills).toEqual([]);
  });
});
