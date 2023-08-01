import { Page } from "./Page";

describe("Page", () => {
  it("should return welcome", () => {
    // Given
    const welcome: string = Page.Welcome;

    // Then
    expect(welcome).toBe("Welcome");
  });

  it("should return heading form", () => {
    // Given
    const headingForm: string = Page.HeadingForm;

    // Then
    expect(headingForm).toBe("HeadingForm");
  });

  it("should return professional summary form", () => {
    // Given
    const professionalSummaryForm: string = Page.ProfessionalSummaryForm;

    // Then
    expect(professionalSummaryForm).toBe("ProfessionalSummaryForm");
  });

  it("should return skills summary form", () => {
    // Given
    const skillsForm: string = Page.SkillsForm;

    // Then
    expect(skillsForm).toBe("SkillsForm");
  });
});
