import { Bed } from "../../types/type";
import PatientIcon from "../../icons/PatientIcon";

type Props = { bed: Bed };

function RoomDetail({ bed }: Props) {
  return (
    <div className="w-[200px] flex flex-col items-center p-5 bg-white mx-2 rounded-lg">
      <span className="flex w-full justify-between bg-white items-center px-1">
        <PatientIcon color="#949EDA" w="48" h="36" />
        تخت
        {bed.bed_number.substring(1)}
      </span>
      <span className="w-full text-text-secondary py-2 text-center ">
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
