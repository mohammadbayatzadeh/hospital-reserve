type Props = { title: String };

function HospitalItem({ title }: Props) {
  return (
    <div className="w-[240px] h-[300px]">
      <a
        href={`/hospital-page/${title}`}
        className="w-full flex flex-col items-center rounded-lg border-t-4 border-solid border-bg-primary"
      >
        <img
          className="w-full h-[150px]"
          src={require(`../../images/hospitals/hospital${Math.floor(
            Math.random() * 7 + 1
          )}.jpg`)}
          alt="hospital"
        />

        <div className="w-full p-2 border-2 border-solid border-bg-primary rounded-b-lg bg-white">
          <p className="text-bg-primary font-bold text-base">
            بیمارستان {title}
          </p>
        </div>
      </a>
    </div>
  );
}

export default HospitalItem;
