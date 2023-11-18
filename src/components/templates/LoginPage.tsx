function LoginPage() {
  return (
    <div className="w-full my-10">
      <div className="flex bg-bg-secondary rounded-lg border-y-4 border-bg-primary">
        <form className="w-full flex flex-col items-center py-3 px-5">
          <h4 className="text-bg-primary font-bold text-xl">ورود</h4>
          <input
            className="w-full my-5 bg-transparent border-y-2 border-bg-primary rounded-lg p-2"
            placeholder="نام کاربری"
            name="username"
          />
          <input
            className="w-full my-5 bg-transparent border-y-2 border-bg-primary rounded-lg p-2"
            placeholder=" رمز عبور"
            name="password"
            type="password"
          />
          <button className="p-2 text-white bg-bg-primary rounded-lg mt-5 border-2 transition-all duration-500 hover:bg-bg-secondary hover:text-bg-primary hover:border-bg-primary">
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
