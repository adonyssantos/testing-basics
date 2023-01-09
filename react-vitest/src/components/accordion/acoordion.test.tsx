import Accordion from "./accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  let title: HTMLElement;;

  beforeEach(() => {
    render(
      <Accordion title="Hello">
        <p>Lorem ipsum dolor</p>
        <p>Sit amet consectetur</p>
      </Accordion>
    );

    title = screen.getByText(/Hello/i);
  });

  test("should show the title all time", () => {
    expect(title).toBeDefined();
    fireEvent.click(title);
    expect(title).toBeDefined();
  });

  test("should not show the children in the first render", () => {
    expect(screen.queryByText(/Lorem/i)).toBeNull();
  });

  test("should show the children when the title is clicked", () => {
    const content = screen.queryByText(/Lorem/i);

    fireEvent.click(title);

    expect(content).toBeDefined();
    expect(content).not.toBeNull();
  });

  test("should hide the children when the title is clicked twice", () => {
    const content = screen.queryByText(/Lorem/i);

    fireEvent.click(title);

    expect(content).toBeDefined();
    expect(content).not.toBeNull();

    fireEvent.click(title);

    expect(content).toBeNull();
    expect(content).not.toBeDefined();
  });
});
