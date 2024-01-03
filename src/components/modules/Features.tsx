
//components
import Feature from "../elements/landing/Feature";

//icons
import { BiPlusMedical } from "react-icons/bi";
import {
  FaBriefcaseMedical,
  FaClinicMedical,
  FaHandHoldingMedical,
  FaNotesMedical,
} from "react-icons/fa";
import { FaTruckMedical, FaPrescriptionBottleMedical } from "react-icons/fa6";
import { GiMedicalThermometer } from "react-icons/gi";

function Features() {
  return (
    <div className="w-full flex flex-col my-12">
      <h4 className="text-center text-3xl text-bg-primary mb-5">ویژگی ها</h4>
      <div className="w-full flex flex-wrap ">
        <Feature icon={<BiPlusMedical />} text="روند بهبود سریع " />
        <Feature icon={<FaBriefcaseMedical />} text="دسترسی" />
        <Feature icon={<FaClinicMedical />} text="اورژانس مجهز" />
        <Feature icon={<FaHandHoldingMedical />} text="ایجاد پروتده" />
        <Feature icon={<FaNotesMedical />} text="کادر مجرب" />
        <Feature icon={<FaTruckMedical />} text="دسترسی سریع" />
        <Feature icon={<FaPrescriptionBottleMedical />} text="دسترسی سریع" />
        <Feature icon={<GiMedicalThermometer />} text="دسترسی سریع" />
      </div>
    </div>
  );
}

export default Features;
