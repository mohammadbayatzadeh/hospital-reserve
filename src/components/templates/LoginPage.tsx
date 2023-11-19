import { useState } from "react";
import { ERROR_MSGS } from "../constants/errors";
import { utils } from "../../utils/helper";

function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const changeHandler = (e: any) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!form.username.match(/[a-z0-9]{3,20}\@[a-z]{2,10}\.[a-z]{2,5}/gim)) {
      return setError(ERROR_MSGS.USERNAME);
    } else if (form.password.length <= 5) {
      return setError(ERROR_MSGS.PASSWORD);
    } else {
      setError("");
    }
    console.log(form);
  };

  return (
    <div className="w-full my-10">
      <div className="flex bg-bg-secondary rounded-lg border-y-4 border-bg-primary">
        <form className="w-full flex flex-col items-center py-3 px-5">
          <h4 className="text-bg-primary font-bold text-xl">ورود</h4>
          <input
            className="w-full my-5 bg-transparent border-y-2 border-bg-primary rounded-lg p-2"
            placeholder="نام کاربری"
            name="username"
            type="text"
            value={form.username}
            onChange={changeHandler}
          />

          <input
            className="w-full my-5 bg-transparent border-y-2 border-bg-primary rounded-lg p-2"
            placeholder="رمز عبور"
            name="password"
            type="password"
            value={form.password}
            onChange={changeHandler}
          />
          {error && (
            <p className="text-sm bg-bg-tertiary p-1 rounded-md text-bg-primary font-bold">
              {error}
            </p>
          )}
          <button
            className="p-2 text-white bg-bg-primary rounded-lg mt-5 border-2 transition-all duration-500 hover:bg-bg-secondary hover:text-bg-primary hover:border-bg-primary"
            disabled={
              utils.isEmpty(form.password) || utils.isEmpty(form.username)
            }
            type="submit"
            onClick={submitHandler}
          >
            ورود
          </button>
          <p className="my-5 text-sm texxt-bg-primary">
            حساب کاربری ندارید ؟
            <a
              href="/register"
              className="text-bg-primary font-bold cursor-pointer"
            >
              ثبت نام کنید
            </a>
          </p>
        </form>
        <img
          src={require("../../images/auth.png")}
          alt="auth"
          className="w-full hidden md:flex min-h-full rounded-l-lg"
        />
      </div>
    </div>
  );
}

export default LoginPage;
