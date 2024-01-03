import NavItem from "../elements/landing/NavItem";

function Navbar() {
  return (
    <header className="flex w-full flex-col">
      <nav className="w-full rounded-t-lg">
        <ul className="flex text-[8px] sm:text-base border-solid border-t-4 border-bg-primary rounded-t-lg">
          <NavItem title="تخصیص تخت" to="#supportes" style="rounded-tr-lg" />
          <NavItem title="مشاورین" to="#doctors" />
          <NavItem title="رزرو" to="/login" />
          <NavItem title="درباره ما" to="#supportes" />
          <NavItem title="ارتباط با ما" to="#supportes" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
