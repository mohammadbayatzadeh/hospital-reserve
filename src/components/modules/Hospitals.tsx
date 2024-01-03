//swiper
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

//swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

//components
import CityHospitals from "../elements/landing/CityHospitals";

function Hospitals() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="w-full flex flex-col my-12" id="supportes">
      <h4 className="text-center text-3xl text-bg-primary mb-5">
        بیمارستان های تحت قرارداد
      </h4>
      <div className="w-full flex flex-col md:!flex-row justify-around ">
        <CityHospitals title="تهران" />
        <CityHospitals title="اهواز" />
        <CityHospitals title="اصفهان" />
      </div>
    </div>
  );
}

export default Hospitals;
