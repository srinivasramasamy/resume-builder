import { Link } from "./Link";

describe("List", () => {
  it("should initialize link", () => {
    // Given
    const name: string = "LinkedIn";
    const url: string = "linkedin.com";

    // When
    const link: Link = new Link(name, url);

    // Then
    expect(link.name).toBe(name);
    expect(link.url).toBe(url);
  });
});
