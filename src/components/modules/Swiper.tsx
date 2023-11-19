//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//types
import { Floor, Hospital } from "../../types/type";

//functions

//components
import Buildingtab from "../elements/Buildingtab";
import { creators } from "../../utils/functions";

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
      {creators.floorsList(hospital).map((floor, index): any => (
        <SwiperSlide className="" key={index} style={{ width: "fit-content" }}>
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
