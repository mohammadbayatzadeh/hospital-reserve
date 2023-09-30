import HospitalIcon from "../../icons/HospitalIcon";

type Props = { title: String };

function HospitalItem({ title }: Props) {
  return (
    <div className="w-[240px] h-[300px]">
      <div className="w-full  flex flex-col items-center rounded-lg border-t-4 border-solid border-bg-primary">
        <div className=" w-full h-full bg-white flex justify-center">
          <HospitalIcon h="150" w="150" />
        </div>
        <div className="w-full p-2 border-2 border-solid border-bg-primary rounded-b-lg bg-white">
          <p className="text-bg-primary font-bold text-base">
            بیمارستان {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HospitalItem;
