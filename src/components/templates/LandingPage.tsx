import Banners from "../modules/Banners";

function landingPage() {
  return (
    <div className="w-full overflow-hidden ">
      <header className="flex w-full flex-col">
        <a href="/" className="flex item-center">
          <img alt="logo" src={require("../../images/main.png")} className=" w-[60px] h-[60px]" />
          <h1 className="text-base md:text-3xl w-fit text-bg-primary mb-2 p-3 rounded-t-lg cursor-pointer z-10">
            سامانه رزور تخت
          </h1>
        </a>
        <nav className="w-full rounded-b-lg rounded-tl-lg z-10 w-fit">
          <ul className="flex text-[8px] sm:text-base border-solid border-t-2 border-bg-primary rounded-t-lg">
            <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white rounded-tr-lg">
              <a href="/details">تخصیص تخت</a>
            </li>
            <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white">
              <a href="/#">مشاورین</a>
            </li>
            <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white">
              <a href="/#">قوانین رزرو</a>
            </li>
            <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white">
              <a href="/#">درباره ما</a>
            </li>
            <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white">
              <a href="/#">ارتباط با ما</a>
            </li>
          </ul>
        </nav>
      </header>
      <Banners />
    </div>
  );
}

export default landingPage;
