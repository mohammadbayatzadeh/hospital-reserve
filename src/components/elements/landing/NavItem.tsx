type Props = { title: String; style?: any; to: string };

function NavItem({ title, style = "", to }: Props) {
  return (
    <li
      className={`ml-5 p-2 text-bg-primary border-solid transition-all border-bg-primary hover:bg-bg-primary hover:text-white ${style}`}
    >
      <a href={to}>{title}</a>
    </li>
  );
}

export default NavItem;
