type Props = { icon: any };

function SupporterItem({ icon }: Props) {
  return (
    <div className="transition-all duration-500 hover:text-bg-primary">
      {icon}
    </div>
  );
}

export default SupporterItem;
