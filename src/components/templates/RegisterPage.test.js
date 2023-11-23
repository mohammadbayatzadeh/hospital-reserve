import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

//templates
import RegisterPage from "./RegsiterPage";
import { utils } from "../../utils/helper";

const getElement = (elm) => {
  const elements = {
    username: screen.getByPlaceholderText("نام کاربری"),
    password: screen.getByPlaceholderText("رمز عبور"),
    button: screen.getByRole("button", { type: "submit" }),
  };
  if (elements[elm]) return elements[elm];
};
const changeElement = (elm, value) => {
  fireEvent.change(getElement(elm), { target: { value } });
};

beforeEach(() => {
  render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>
  );
});

describe("test inputs", () => {
  test("input must initialy empty", () => {
    expect(getElement("username").value).toBe("");
    expect(getElement("password").value).toBe("");
  });

  test("username input working", () => {
    changeElement("username", "salam");
    expect(getElement("username").value).toBe("salam");
  });

  test("password input working", () => {
    changeElement("password", "123456");
    expect(getElement("password").value).toBe("123456");
  });

  test("check the usEmpty calling", () => {
    //spyOn
    const isEmpty = jest.spyOn(utils, "isEmpty");
    utils.isEmpty(getElement("username").value);
    expect(isEmpty).toHaveBeenCalledTimes(1);
  });

  test("button must initially be disable", () => {
    expect(getElement("button")).toBeDisabled();
  });

  test("button must enable", () => {
    changeElement("username", "salam");
    changeElement("password", "123456");
    expect(getElement("button")).toBeEnabled();
  });
});
