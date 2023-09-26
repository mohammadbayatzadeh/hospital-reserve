import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Scrollbar, A11y } from "swiper/modules";

import { Hospital } from "../../types/type";
import { floorsList } from "../../utils/functions";
import Buildingtab from "../elements/Buildingtab";

type Props = {
  hospital: Hospital;
  setBuilding: Function;
  setFloor: Function;
};

function SwiperComponent({ hospital, setBuilding, setFloor }: Props) {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      slidesPerView={"auto"}
      centeredSlides={false}
    >
      {floorsList(hospital).map((floor, index): any => (
        <SwiperSlide className="mb-3 pb-4" key={index}>
          <Buildingtab
            floor={floor}
            setFloor={setFloor}
            setBuilding={setBuilding}
            hospital={hospital}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
