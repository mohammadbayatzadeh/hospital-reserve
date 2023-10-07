function RegsiterPage() {
  return (
    <div className="w-full p-10 ">
      <div className="flex bg-bg-secondary rounded-lg">
        <form className="w-full flex flex-col items-center py-3 px-5">
          <h4 className="text-bg-primary font-bold text-xl">ثبت نام</h4>
          <input
            className="w-full my-5 bg-transparent border-y-2 border-bg-primary rounded-lg p-2"
            placeholder="نام کاربری"
          />
          <input
            className="w-full my-5 bg-transparent border-y-2 border-bg-primary rounded-lg p-2"
            placeholder=" رمز عبور"
            type="password"
          />
          <button className="p-2 text-white bg-bg-primary rounded-lg mt-5 border-2 transition-all duration-500 hover:bg-bg-secondary hover:text-bg-primary hover:border-bg-primary">
            ثبت نام
          </button>
          <p className="my-5 text-sm texxt-bg-primary">
             حساب کاربری دارید ؟
            <a href="/login" className="text-bg-primary font-bold cursor-pointer ">وارد شوید</a>
          </p>
        </form>
        <img
          src={require("../../images/auth.png")}
          alt="auth"
          className="w-full h-full rounded-l-lg"
        />
      </div>
    </div>
  );
}

export default RegsiterPage;
