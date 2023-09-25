import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BuildingTab from "../elements/Buildingtab";
import { SwiperOptions } from "swiper/types";

function SwiperComp() {
  const swiperParams: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
  };

  const SwiperRow: any = new Swiper(".swiper", swiperParams);
  return (
    <SwiperRow
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      <BuildingTab>Slide 1</BuildingTab>
      <BuildingTab>Slide 2</BuildingTab>
      <BuildingTab>Slide 3</BuildingTab>
      <BuildingTab>Slide 4</BuildingTab>
    </SwiperRow>
  );
}

export default SwiperComp;
