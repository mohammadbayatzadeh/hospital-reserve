type Props = { title: string };

function FooterItem({ title }: Props) {
  return <li className="min-w-fit">{title}</li>;
}

export default FooterItem;
