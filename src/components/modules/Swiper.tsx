import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

import { Floor, Hospital } from "../../types/type";
import { floorsList } from "../../utils/functions";
import Buildingtab from "../elements/Buildingtab";

type Props = {
  hospital: Hospital;
  setBuilding: Function;
  setFloor: Function;
  currentFloor: Floor;
};

function SwiperComponent({
  hospital,
  setBuilding,
  setFloor,
  currentFloor,
}: Props) {
  return (
    <Swiper slidesPerView={"auto"} centeredSlides={false}>
      {floorsList(hospital).map((floor, index): any => (
        <SwiperSlide className="" key={index}>
          <Buildingtab
            floor={floor}
            setFloor={setFloor}
            setBuilding={setBuilding}
            hospital={hospital}
            currentFloor={currentFloor}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
