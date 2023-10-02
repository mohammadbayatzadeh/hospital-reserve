type Props = { icon: any; text: String };

function Feature({ icon, text }: Props) {
  return (
    <div className="group w-1/2 sm:w-1/4 flex flex-col items-center mb-10 transition-all">
      <span className="text-5xl transition-all duration-300 text-bg-primary rounded-lg border-solid border-y-2 border-bg-primary p-5 group-hover:rounded-[60px] group-hover:bg-bg-primary group-hover:text-white">
        {icon}
      </span>
      <p className="text-bg-primary mt-3">{text}</p>
    </div>
  );
}

export default Feature;
