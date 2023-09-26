import { Hospital } from "../../types/type";
import PatientIcon from "../../icons/PatientIcon";
import { bedsDetails, roomsCounter } from "../../utils/functions";

type Props = { hospital: Hospital };

function HospitalInfo({ hospital }: Props) {
  const bedDetails = bedsDetails(hospital);

  return (
    <div className="w-full flex justify-between ">
      <h3 className="-translate-y-6 bg-white px-2">لیست ساختمان ها و تخت های بیمارستان {hospital.name}:</h3>
      <div className="flex flex-col w-[400px] p-2 rounded-lg bg-bg-secondary text-xs text-text-fourth ">
        <span className="w-full py-1 flex justify-between items-center">
          <p className="w-full ">
            تعداد ساختمان ها : {hospital.buildings.length} عدد
          </p>
          <p className="w-full flex">
            <PatientIcon color="#36459b" />
            قابل رزرو : {bedDetails.ready.length} عدد
          </p>
        </span>
        <span className="w-full py-1 flex justify-between items-center">
          <p className="w-full ">
            تعداد کل اتاق ها : {roomsCounter(hospital)} عدد
          </p>
          <p className="w-full flex">
            <PatientIcon color="#ffc684" />
            غیر قابل رزرو : {bedDetails.notReady.length} عدد
          </p>
        </span>
        <span className="w-full py-1 flex justify-between items-center">
          <p className="w-full ">
            تعداد کل تخت ها : {hospital.beds_count.length} عدد
          </p>
          <p className="w-full flex">
            <PatientIcon color="#636366" />
            پر : {bedDetails.reserved.length} عدد
          </p>
        </span>
      </div>
    </div>
  );
}

export default HospitalInfo;
