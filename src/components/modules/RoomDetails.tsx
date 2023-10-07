//types
import { Room } from "../../types/type";

//icons
import RoomIcons from "../../icons/RoomIcons";

//components
import RoomDetail from "../elements/RoomDetail";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
          <SwiperSlide key={index} style={{ width: "fit-content" }}>
            <RoomDetail bed={bed} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RoomDetails;
