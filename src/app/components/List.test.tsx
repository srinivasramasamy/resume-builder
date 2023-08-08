import { fireEvent, render } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("should render list", () => {
    // Given
    const { container } = render(<List items={[]} removeItem={jest.fn()} />);

    // Then
    expect(container).toBeTruthy();
  });

  it("should render items", () => {
    // Given
    const item1 = "Item1";
    const items: string[] = [item1];
    const { queryByText } = render(
      <List items={items} removeItem={jest.fn()} />
    );

    // Then
    expect(queryByText(item1)).toBeTruthy();
  });

  it("should render same number of items", () => {
    // Given
    const items: string[] = ["item1", "item2", "item3"];
    const { getAllByRole } = render(
      <List items={items} removeItem={jest.fn()} />
    );

    // Then
    expect(getAllByRole("listitem").length).toBe(items.length);
  });

  it("should render close button for each item", () => {
    // Given
    const items: string[] = ["item1", "item2", "item3"];
    const { getAllByRole } = render(
      <List items={items} removeItem={jest.fn()} />
    );

    // Then
    expect(getAllByRole("button").length).toBe(items.length);
  });

  it("should call remove item with item index", () => {
    // Given
    const items: string[] = ["item1", "item2", "item3"];
    const removeItem = jest.fn();
    const { getAllByRole } = render(
      <List items={items} removeItem={removeItem} />
    );
    const firstRemoveButton = getAllByRole("button")[0];

    // When
    fireEvent.click(firstRemoveButton);

    // Then
    expect(removeItem).toBeCalledWith(0);
  });
});
