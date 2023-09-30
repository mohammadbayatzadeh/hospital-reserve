import Feature from "../elements/Feature";
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
    <div className="w-full flex flex-wrap my-12">
      <Feature icon={<BiPlusMedical />} text="روند بهبود سریع " />
      <Feature icon={<FaBriefcaseMedical />} text="دسترسی" />
      <Feature icon={<FaClinicMedical />} text="اورژانس مجهز" />
      <Feature icon={<FaHandHoldingMedical />} text="ایجاد پروتده" />
      <Feature icon={<FaNotesMedical />} text="کادر مجرب" />
      <Feature icon={<FaTruckMedical />} text="دسترسی سریع" />
      <Feature icon={<FaPrescriptionBottleMedical />} text="دسترسی سریع" />
      <Feature icon={<GiMedicalThermometer />} text="دسترسی سریع" />
    </div>
  );
}

export default Features;
