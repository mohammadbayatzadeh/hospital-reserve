//swiper
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

//components
import BannerItem from "../elements/landing/BannerItem";

// Import Swiper styles
import "swiper/css";
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
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <BannerItem image="1" title="دسترسی بسیار آسان از تمامی مناطق کشور" />
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
