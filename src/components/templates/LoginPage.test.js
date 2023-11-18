import { render, screen } from "@testing-library/react";

import LoginPage from "./LoginPage";

describe("testing login page", () => {
  test("input must initialy empty", () => {
    render(<LoginPage />);
    const userNameElement = screen.getByRole('textbox', { name: "username" });
    expect(userNameElement.value).toBe("");
  });
});
