import React, { useState } from "react";
import HospitalIcon from "../../icons/HospitalIcon";
import { Hospital } from "../../types/type";
import SwiperComp from "./Swiper";

type Props = { hospital: Hospital };

function DetailsViewer({ hospital }: Props) {
  const [building, setBuilding] = useState(hospital.buildings[0]);
  const [floor, setFloor] = useState(building.floors[0]);

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
          hospital={hospital}
          setBuilding={setBuilding}
          setFloor={setFloor}
        />
      </div>
      <section className="w-full flex  bg-white p-3 rounded-lg mt-3 border border-text-tertiary border-solid rounded-lg">
        <h2 className=" text-md mb-8 -translate-y-6 bg-white px-2">
          اطلاعات تخت های {floor.number}:
        </h2>
      </section>
    </div>
  );
}

export default DetailsViewer;
