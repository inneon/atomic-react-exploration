import { render } from "@testing-library/react";
import { Button } from "./button";
describe("button", () => {
  it("renders the button with the correct text", () => {
    const buttonText = "Click me";

    const { getByText } = render(<Button>{buttonText}</Button>);

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeDefined();
  });

  it("performs an action when clicked", () => {
    const buttonText = "Click me";
    const handleClick = vi.fn();

    const { getByText } = render(
      <Button onClick={handleClick}>{buttonText}</Button>,
    );

    const buttonElement = getByText(buttonText);
    buttonElement.click();

    expect(handleClick).toHaveBeenCalled();
  });

  it("does not perform an action when disabled", () => {
    const buttonText = "Click me";
    const handleClick = vi.fn();

    const { getByText } = render(
      <Button onClick={handleClick} disabled>
        {buttonText}
      </Button>,
    );

    const buttonElement = getByText(buttonText) as HTMLButtonElement;
    buttonElement.click();

    expect(buttonElement.disabled).toBe(true);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
