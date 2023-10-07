function Navbar() {
  return (
    <header className="flex w-full flex-col">
      <nav className="w-full rounded-t-lg">
        <ul className="flex text-[8px] sm:text-base border-solid border-t-4 border-bg-primary rounded-t-lg">
          <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white rounded-tr-lg">
            <a href="/hospital-page">تخصیص تخت</a>
          </li>
          <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white">
            <a href="/#">مشاورین</a>
          </li>
          <li className="ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white">
            <a href="/auth">رزرو</a>
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
  );
}

export default Navbar;
