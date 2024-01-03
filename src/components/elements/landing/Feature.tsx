type Props = { icon: any; text: String };

function Feature({ icon, text }: Props) {
  return (
    <div className="w-1/2 sm:w-1/4 flex flex-col items-center mb-10 transition-all">
      <span className="text-5xl transition-all duration-300 text-bg-primary rounded-lg border-solid border-y-2 border-bg-primary p-5 hover:rounded-[60px] hover:bg-bg-primary hover:text-white">
        {icon}
      </span>
      <p className="text-bg-primary mt-3">{text}</p>
    </div>
  );
}

export default Feature;
