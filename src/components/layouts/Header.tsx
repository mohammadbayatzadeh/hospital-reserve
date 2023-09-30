function Header() {
  return (
    <a href="/" className="flex item-center w-fit">
      <img
        alt="logo"
        src={require("../../images/main.png")}
        className=" w-[60px] h-[60px]"
      />
      <h1 className="text-base md:text-3xl w-fit text-bg-primary mb-2 p-3 rounded-t-lg cursor-pointer z-10">
        سامانه رزور تخت
      </h1>
    </a>
  );
}

export default Header;
