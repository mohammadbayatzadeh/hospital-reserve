import BannerItem from "../elements/BannerItem";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {

  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./styles.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function Banners() {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <BannerItem image="1" title="دسترسی بسیار آسان از تمامی مناطق کشور"  />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem image="2" title="سریع ترین روش رزرو تخت در کشور" />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem image="3" title="ما در کنار بیماران شما هستیم" />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem image="4" title="آسان ، سریع ، همراه" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banners;
