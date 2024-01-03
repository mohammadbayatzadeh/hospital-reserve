//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

//swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

//any
import { Hospital } from "../../../types/type";

//data
import { HospitalData } from "../../../utils/randomHospitalData";

//components
import HospitalItem from "../HospitalItem";

type Props = { title: string };

function CityHospitals({ title }: Props) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-bg-primary font-bold text-xl">{title}</span>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{ width: "240px", height: "250px" }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {HospitalData.map((hospital: Hospital) => (
          <SwiperSlide style={{ width: "240px", height: "200px" }}>
            <HospitalItem title={hospital.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CityHospitals;
