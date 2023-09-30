import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import "./cardstyles.css";
import HospitalItem from "../elements/HospitalItem";
import { HospitalData } from "../../utils/randomHospitalData";
import { Hospital } from "../../types/type";

type Props = {};

function Hospitals({}: Props) {
  return (
    <div className="w-full flex flex-col my-12">
      <h4 className="text-center text-3xl text-bg-primary mb-5">
        بیمارستان های تحت قرارداد
      </h4>
      <div className="w-full !flex justify-around ">
        <div className="flex flex-col items-center">
          <span className="text-bg-primary font-bold text-xl">تهران</span>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: "240px", height: "250px" }}
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
