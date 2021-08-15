import { render, screen } from "@testing-library/react";
import App from "./App";

test("there is hello world", () => {
  const { container } = render(<App />);
  expect(container.querySelector("div.App")).toBeInTheDocument();
});
