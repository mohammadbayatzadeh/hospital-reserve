//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

//components
import HospitalItem from "../elements/HospitalItem";

//data
import { HospitalData } from "../../utils/randomHospitalData";

//types
import { Hospital } from "../../types/type";

function Hospitals() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="w-full flex flex-col my-12" id="supportes">
      <h4 className="text-center text-3xl text-bg-primary mb-5">
        بیمارستان های تحت قرارداد
      </h4>
      <div className="w-full flex flex-col md:!flex-row justify-around ">
        <div className="flex flex-col items-center">
          <span className="text-bg-primary font-bold text-xl">تهران</span>
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
        <div className="flex flex-col items-center">
          <span className="text-bg-primary font-bold text-xl">اهواز</span>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: "240px", height: "250px" }}
            autoplay={{
              delay: 2000,
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
        <div className="flex flex-col items-center">
          <span className="text-bg-primary font-bold text-xl">اصفهان</span>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: "240px", height: "250px" }}
            autoplay={{
              delay: 1000,
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
      </div>
    </div>
  );
}

export default Hospitals;
