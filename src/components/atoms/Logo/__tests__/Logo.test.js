import React from "react";
import Logo from "../Logo";
import { render, screen } from "@testing-library/react";

test("render logo to my Name", () => {
  const { getByText } = render(<Logo>Le Nguyen Hoang Nhan</Logo>);
  const h1Elem = getByText(/Le Nguyen Hoang Nhan/i);
  expect(h1Elem).toBeInTheDocument();
});
test("render children tag", () => {
  render(
    <Logo>
      <em>Hello</em>
    </Logo>
  );
  expect(screen.queryByText("Hello")).toBeInTheDocument();
});
