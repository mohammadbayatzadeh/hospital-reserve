import { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import TextBox from "../elements/TextBox";

//helper
import { utils } from "../../utils/helper";

//constants
import { ERROR_MSGS } from "../constants/errors";

function RegsiterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!form.username.match(/[a-z0-9]{3,20}@[a-z]{2,10}\.[a-z]{2,5}/gim)) {
      return setError(ERROR_MSGS.USERNAME);
    } else if (form.password.length <= 5) {
      return setError(ERROR_MSGS.PASSWORD);
    } else {
      setError("");
    }
    navigate("/");
  };
  return (
    <div className="w-full my-10">
      <div className="flex bg-bg-secondary rounded-lg border-y-4 border-bg-primary">
        <form className="w-full flex flex-col items-center py-3 px-5">
          <h4 className="text-bg-primary font-bold text-xl">ثبت نام</h4>
          <TextBox form={form} name="username" setForm={setForm} />
          <TextBox form={form} name="password" setForm={setForm} />

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
            ثبت نام
          </button>
          <p className="my-5 text-sm texxt-bg-primary">
            حساب کاربری دارید ؟
            <a
              href="/login"
              className="text-bg-primary font-bold cursor-pointer "
            >
              وارد شوید
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

export default RegsiterPage;
