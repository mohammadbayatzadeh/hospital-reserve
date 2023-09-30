//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//types
import { Floor, Hospital } from "../../types/type";

//functions
import { floorsList } from "../../utils/functions";

//components
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
