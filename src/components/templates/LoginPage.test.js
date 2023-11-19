import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

import LoginPage from "./LoginPage";
import { ERROR_MSGS } from "../constants/errors";
import { utils } from "../../utils/helper";

const getElement = (elm) => {
  const elements = {
    Email: screen.getByPlaceholderText("نام کاربری"),
    Password: screen.getByPlaceholderText("رمز عبور"),
    Button: screen.getByRole("button", { type: "submit" }),
  };
  if (elements[elm]) return elements[elm];
};

const changeElement = (elm, value) => {
  act(() => {
    userEvent.type(getElement(elm), value);
  });
};

beforeEach(() => {
  render(<LoginPage />);
});

describe("testing login page", () => {
  test("input must initialy empty", () => {
    expect(getElement("Email").value).toBe("");
    expect(getElement("Password").value).toBe("");
  });

  test("type in email", () => {
    changeElement("Email", "mamad@gmail.com");
    expect(getElement("Email").value).toBe("mamad@gmail.com");
  });

  test("type in password", () => {
    changeElement("Password", "123456");
    expect(getElement("Password").value).toBe("123456");
  });

  test("button must disable when all inputs are empty", () => {
    expect(getElement("Button")).toBeDisabled();
  });

  test("check the usEmpty calling", () => {
    //spyOn
    const isEmpty = jest.spyOn(utils, "isEmpty");
    utils.isEmpty(getElement("Email").value);
    expect(isEmpty).toHaveBeenCalledTimes(1);
  });

  test("button must enable when all inputs are filled", () => {
    changeElement("Email", "mamad");
    changeElement("Password", "123456");
    expect(getElement("Button")).toBeEnabled();
  });
});

describe("errors handling", () => {
  beforeEach(() => {
    expect(screen.queryByText(ERROR_MSGS.PASSWORD)).not.toBeInTheDocument();
    expect(screen.queryByText(ERROR_MSGS.USERNAME)).not.toBeInTheDocument();
  });

  test("show email error when email is invalid", () => {
    changeElement("Email", "mamad");
    changeElement("Password", "123456");
    act(() => {
      userEvent.click(getElement("Button"));
    });
    expect(screen.queryByText(ERROR_MSGS.USERNAME)).toBeInTheDocument();
  });

  test("show password error when password is short", () => {
    changeElement("Email", "mamad@gmail.com");
    changeElement("Password", "1234");
    act(() => {
      userEvent.click(getElement("Button"));
    });
    expect(screen.queryByText(ERROR_MSGS.PASSWORD)).toBeInTheDocument();
  });
});
