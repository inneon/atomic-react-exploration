import { render } from "@testing-library/react";
import { H1 } from "./h1";

describe("h1", () => {
  it("should contain the given text", () => {
    const { getByText } = render(<H1 size="M">Title</H1>);

    expect(getByText("Title")).toBeDefined();
  });
});
