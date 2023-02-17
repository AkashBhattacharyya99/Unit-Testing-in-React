import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";

describe("Test the App Component", () => {
  test("header renders with react unit testing", () => {
     render(<App />);
    const linkElement = screen.getByText(/React unit testing POC/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in doucment", () => {
    const { getByLabelText } = render(<App />);
    const childElement = getByLabelText("Email");
    expect(childElement).toBeTruthy();
  });
});
