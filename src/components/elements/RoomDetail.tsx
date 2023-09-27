import { Bed } from "../../types/type";
import PatientIcon from "../../icons/PatientIcon";

type Props = { bed: Bed };

function RoomDetail({ bed }: Props) {
  return (
    <div className="w-[200px] flex flex-col items-center p-5 bg-white mx-2 rounded-lg">
      <span className="flex w-full justify-between bg-white">
        <PatientIcon color="#949EDA"  />
        تخت
        {bed.bed_number}
      </span>
      <span className="w-full text-text-secondary py-2 ">
        شماره تخت : {bed.bed_number}
      </span>
      <button className="w-full p-2 my-1 rounded-lg bg-bg-primary text-white">
        انتخاب تخت
      </button>
      <button className="w-full p-2 my-1 rounded-lg bg-bg-secondary text-bg-primary">
        مشاهده بیشتر
      </button>
    </div>
  );
}

export default RoomDetail;
