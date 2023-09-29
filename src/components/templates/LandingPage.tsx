import Banners from "../modules/Banners";

function landingPage() {
  return (
    <div className="w-full overflow-hidden ">
      <header className="flex w-full flex-col">
        <h1 className=" text-base md:text-3xl w-fit mb-2 p-3 rounded-t-lg cursor-pointer z-10">
          سامانه رزور تخت
        </h1>
        <nav className="w-full rounded-b-lg rounded-tl-lg z-10 w-fit">
          <ul className="flex p-2 text-[8px] sm:text-base">
            <li className="ml-5 border-solid transition-all border-bg-primary hover:border-b hover:text-bg-primary p-b-1 ">
              <a href="/details">تخصیص تخت</a>
            </li>
            <li className="ml-5 border-solid transition-all border-bg-primary hover:border-b hover:text-bg-primary p-b-1">
              <a href="/#">مشاورین</a>
            </li>
            <li className="ml-5 border-solid transition-all border-bg-primary hover:border-b hover:text-bg-primary p-b-1">
              <a href="/#">قوانین رزرو</a>
            </li>
            <li className="ml-5 border-solid transition-all border-bg-primary hover:border-b hover:text-bg-primary p-b-1">
              <a href="/#">درباره ما</a>
            </li>
            <li className="ml-5 border-solid transition-all border-bg-primary hover:border-b hover:text-bg-primary p-b-1">
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
