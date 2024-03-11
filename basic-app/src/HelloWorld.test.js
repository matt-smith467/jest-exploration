import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import HelloWorld from "./components/HelloWorld.js";

test('renders the "Hello World" message', () => {
  render(<HelloWorld />);
  const helloWorldText = screen.getByText("Hello World");
  expect(helloWorldText).toBeInTheDocument();
});

it("performs snapshot testing", () => {
  const tree = renderer.create(<HelloWorld />).toJSON();
  expect(tree).toMatchSnapshot();
});
