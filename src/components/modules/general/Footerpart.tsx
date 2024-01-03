import FooterItem from "../../elements/general/FooterItem";

type Props = { title: string; items: string[] };

function Footerpart({ title, items }: Props) {
  return (
    <div className="w-full lg:px-2 my-3 lg:m-0 ">
      <p className="text-text-primary font-bold">{title}</p>
      <ul className="w-full list-disc list-inside marker:text-bg-primary flex flex-wrap justify-between flex-row sm:flex-col">
        {items.map((item) => (
          <FooterItem title={item} />
        ))}
      </ul>
    </div>
  );
}

export default Footerpart;
