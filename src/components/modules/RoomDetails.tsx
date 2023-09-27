import { Room } from "../../types/type";
import RoomIcons from "../../icons/RoomIcons";
import RoomDetail from "../elements/RoomDetail";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

type Props = { room: Room };

function RoomDetails({ room }: Props) {
  return (
    <div className="w-full bg-bg-secondary rounded-lg my-3 p-2">
      <span className="flex items-center">
        <RoomIcons />
        اتاق {room.number}
      </span>
      <Swiper slidesPerView={"auto"} centeredSlides={false}>
        {room.beds.map((bed, index) => (
          <SwiperSlide key={index}>
            <RoomDetail bed={bed} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RoomDetails;
