import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

import LoginPage from "./LoginPage";

const getElement = (elm) => {
  const elements = {
    Email: screen.getByRole("textbox", { type: "text" }),
    Password: screen.getByRole("textbox", { type: "password" }),
    Button: screen.getByRole("button", { type: "submit" }),
  };
  if (elements[elm]) return elements[elm];
};

const changeElement = (elm, value) => {
  act(() => {
    userEvent.type(getElement(elm), value);
  });
};

describe("testing login page", () => {
  beforeEach(() => {
    render(<LoginPage />);
  });

  test("input must initialy empty", () => {
    expect(getElement("Email").value).toBe("");
    expect(getElement("Password").value).toBe("");
  });

  test("type in email", () => {
    fireEvent.change(getElement("Email"), {
      target: { value: "mamad@gmail.com" },
    });
    expect(getElement("Email").value).toBe("mamad@gmail.com");
  });

  test("type in password", () => {
    changeElement("Password", "123456");
    expect(getElement("Password").value).toBe("123456");
  });

  test("button must disable when all inputs are empty", () => {
    expect(getElement("Button")).toBeDisabled();
  });
});
