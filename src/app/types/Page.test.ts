import { Page } from "./Page";

describe("Page", () => {
  it("should return welcome", () => {
    // Given
    const welcome: string = Page.Welcome;

    // Then
    expect(welcome).toBe("Welcome");
  });

  it("should return headingForm", () => {
    // Given
    const headingForm: string = Page.HeadingForm;

    // Then
    expect(headingForm).toBe("HeadingForm");
  });
});
