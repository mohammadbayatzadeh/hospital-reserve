//types
import { Bed } from "../../types/type";

//icons
import PatientIcon from "../../icons/PatientIcon";

type Props = { bed: Bed };

function RoomDetail({ bed }: Props) {
  let disabled: Boolean = true;
  const selectColor = (): string => {
    if (bed.reserved) {
      return "#636366";
    } else if (!bed.ready) {
      return "#ffc684";
    } else {
      disabled = false;
      return "#949EDA";
    }
  };
  const color = selectColor();
  return (
    <div className="w-[200px] flex flex-col items-center p-5 bg-white mx-2 rounded-lg backdrop-blur">
      {disabled && (
        <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur opacity-60 bg-gray-400 rounded-lg"></div>
      )}
      <span className="flex w-full justify-between bg-white items-center px-1">
        <PatientIcon color={color} w="48" h="36" />
        تخت
        {bed.bed_number.substring(1)}
      </span>
      <span className="w-full text-text-secondary py-2 text-center ">
        شماره تخت : {bed.bed_number}
      </span>
      <button className="w-full p-2 my-1 rounded-lg bg-bg-primary text-white">
        انتخاب تخت
      </button>
      <button
        className="w-full p-2 my-1 rounded-lg bg-bg-secondary text-bg-primary"
        onClick={() => console.log(bed)}
      >
        مشاهده بیشتر
      </button>
    </div>
  );
}

export default RoomDetail;
