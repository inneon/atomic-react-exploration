import { render } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("renders the card content", () => {
    const { getByText } = render(<Card size="M">This is the content</Card>);

    expect(getByText("This is the content")).toBeDefined();
  });
});
