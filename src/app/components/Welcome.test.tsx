import { fireEvent, render } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome", () => {
  it("should render start", () => {
    // Given
    const { container } = render(<Welcome onStart={jest.fn()} />);

    // Then
    expect(container.querySelector("#start")).toBeTruthy();
  });

  it("should call on start method", () => {
    // Given
    const onStart = jest.fn();
    const { queryByText } = render(<Welcome onStart={onStart} />);
    const start: Element = queryByText("Start")!;

    // When
    fireEvent.click(start);

    // Then
    expect(onStart).toBeCalled();
  });
});
