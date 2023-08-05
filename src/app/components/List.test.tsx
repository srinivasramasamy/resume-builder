import { render } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("should render list", () => {
    // Given
    const { container } = render(<List items={[]} />);

    // Then
    expect(container).toBeTruthy();
  });

  it("should render items", () => {
    // Given
    const item1 = "Item1";
    const items: string[] = [item1];
    const { queryByText } = render(<List items={items} />);

    // Then
    expect(queryByText(item1)).toBeTruthy();
  });

  it("should render same number of items", () => {
    // Given
    const items: string[] = ["item1", "item2", "item3"];
    const { getAllByRole } = render(<List items={items} />);

    // Then
    expect(getAllByRole("listitem").length).toBe(items.length);
  });
});
