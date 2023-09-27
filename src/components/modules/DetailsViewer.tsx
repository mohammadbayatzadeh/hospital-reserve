import { useState } from "react";
import HospitalIcon from "../../icons/HospitalIcon";
import { Hospital } from "../../types/type";
import SwiperComp from "./Swiper";
import PatientIcon from "../../icons/PatientIcon";
import { floorsDetails } from "../../utils/functions";
import RoomDetails from "./RoomDetails";

type Props = { hospital: Hospital };

function DetailsViewer({ hospital }: Props) {
  const [building, setBuilding] = useState(hospital.buildings[0]);
  const [floor, setFloor] = useState(building.floors[0]);
  const floorDetails = floorsDetails(floor);

  return (
    <div>
      <div className="w-full flex flex-col items-center mb-5">
        <HospitalIcon w="100" h="100" />
        <p className="text-text-primary font-bold">
          ساختمان شماره {building.number}
        </p>
        <p className="text-text-secondary text-sm">بیمارستان {hospital.name}</p>
      </div>
      <div className="w-full">
        <SwiperComp
          currentFloor={floor}
          hospital={hospital}
          setBuilding={setBuilding}
          setFloor={setFloor}
        />
      </div>
      <section className=" bg-white flex flex-col p-3 rounded-lg  border border-text-tertiary border-solid rounded-lg">
        <div className="w-full md:flex flex-cols justify-between">
          <h2 className=" text-md px-2 mb-3">
            اطلاعات تخت های {floor.number}:
          </h2>

          <div className="flex flex-col w-[400px] max-w-full p-2 rounded-lg bg-bg-secondary text-xs text-text-fourth ">
            <span className="w-full py-1 flex justify-between items-center">
              <p className="w-full ">
                تعداد کل اتاق ها : {floorDetails.rooms_count} عدد
              </p>
              <p className="w-full flex">
                <PatientIcon color="#36459b" />
                قابل رزرو : {floorDetails.ready.length} عدد
              </p>
            </span>
            <span className="w-full py-1 flex justify-between items-center">
              <p className="w-full ">
                تعداد کل تخت ها : {floorDetails.beds_count} عدد
              </p>
              <p className="w-full flex">
                <PatientIcon color="#ffc684" />
                غیر قابل رزرو : {floorDetails.notReady.length} عدد
              </p>
            </span>
          </div>
        </div>
        {floor.rooms.map((room) => (
          <RoomDetails room={room} />
        ))}
      </section>
    </div>
  );
}

export default DetailsViewer;
