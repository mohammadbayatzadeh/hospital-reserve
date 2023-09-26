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
        <SwiperComp hospital={hospital} setBuilding={setBuilding} />
      </div>
      
    </div>
  );
}

export default DetailsViewer;
