import { render, fireEvent } from "@testing-library/react";
import { TextInput } from "./textInput";
describe("textInput", () => {
  it("renders the text input with the label and placeholder", () => {
    const placeholderText = "Enter your user name";
    const label = "User name";

    const { getByPlaceholderText, getByText } = render(
      <TextInput placeholder={placeholderText} label={label} />,
    );

    const inputElement = getByPlaceholderText(placeholderText);
    const labelElement = getByText(label);

    expect(inputElement).toBeDefined();
    expect(labelElement).toBeDefined();
  });

  it("fires an event with the changed text", () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <TextInput
        placeholder="placeholder"
        label="Some label"
        onChange={onChange}
      />,
    );

    fireEvent.change(getByPlaceholderText("placeholder"), {
      target: { value: "updated" },
    });

    expect(onChange).toHaveBeenCalledWith("updated");
  });
});
