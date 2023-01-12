import Accordion from "./accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  let getTitle: () => HTMLElement;
  let getContent: () => HTMLElement | null;

  beforeAll(() => {
    getTitle = () => screen.getByText(/Accordion Title/i);
    getContent = () => screen.queryByText(/content/i);
  });

  beforeEach(() => {
    render(
      <Accordion title="Accordion Title">
        <p>This is the Accordion content</p>
      </Accordion>
    );
  });

  test("should show the title all time", () => {
    expect(getTitle()).toBeDefined();
    fireEvent.click(getTitle());
    expect(getTitle()).toBeDefined();
  });

  test("should not show the content in the first render", () => {
    expect(getContent()).toBeNull();
  });

  test("should show the children when the title is clicked", () => {
    fireEvent.click(getTitle());

    console.log(getContent());
    expect(getContent()).toBeDefined();
    expect(getContent()).not.toBeNull();
  });

  test("should hide the children when the title is clicked twice", () => {
    fireEvent.click(getTitle());

    expect(getContent()).toBeDefined();
    expect(getContent()).not.toBeNull();

    fireEvent.click(getTitle());

    expect(getContent()).toBeNull();
  });
});
