import React from "react";
import Logo from "../Logo";
import { render, screen } from "@testing-library/react";

test("render logo to my Name", () => {
  const { getByText } = render(<Logo content={"Le Nguyen Hoang Nhan"} />);
  const h1Elem = getByText(/Le Nguyen Hoang Nhan/i);
  expect(h1Elem).toBeInTheDocument();
});
test("render children tag", () => {
  render(<Logo content={"Hello"} />);
  expect(screen.queryByText("Hello")).toBeInTheDocument();
});

test("flow test", () => {
  render(<Logo content={<em>123</em>} />);
  expect(screen.queryByText("123")).toBeInTheDocument();
});
