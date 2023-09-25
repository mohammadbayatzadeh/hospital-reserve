import { useState } from "react";
import Navbar from "../layouts/Navbar";
import { HospitalData } from "../../utils/randomHospitalData";
import { bedsDetails, roomsCounter } from "../../utils/functions";
import PatientIcon from "../../icons/PatientIcon";
import HospitalIcon from "../../icons/HospitalIcon";
import SwiperComp from "../modules/Swiper";

type Props = {};

const HospitalDetails = (props: Props) => {
  const [hospital, setHospital] = useState(HospitalData[0]);
  const [building, setBuilding] = useState(hospital.buildings[0]);
  const bedDetails = bedsDetails(hospital);
  return (
    <div>
      <h4 className="font-bold text-lg">تخصیص تخت</h4>
      <Navbar hospital={hospital} setHospital={setHospital} />
      <section className="w-full flex flex-col bg-white p-3 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">
          لیست تخت های بیمارستان {hospital.name}
        </h2>
        <div className="w-full flex justify-between ">
          <h3>لیست ساختمان ها و تخت های بیمارستان {hospital.name}:</h3>
          <div className="flex flex-col w-[400px] p-2 rounded-lg bg-bg-secondary text-xs text-text-fourth ">
            <span className="w-full py-1 flex justify-between items-center">
              <p className="w-full ">
                تعداد ساختمان ها : {hospital.buildings.length} عدد
              </p>
              <p className="w-full flex">
                <PatientIcon color="#36459b" />
                قابل رزرو : {bedDetails.ready.length} عدد
              </p>
            </span>
            <span className="w-full py-1 flex justify-between items-center">
              <p className="w-full ">
                تعداد کل اتاق ها : {roomsCounter(hospital)} عدد
              </p>
              <p className="w-full flex">
                <PatientIcon color="#ffc684" />
                غیر قابل رزرو : {bedDetails.notReady.length} عدد
              </p>
            </span>
            <span className="w-full py-1 flex justify-between items-center">
              <p className="w-full ">
                تعداد کل تخت ها : {hospital.beds_count.length} عدد
              </p>
              <p className="w-full flex">
                <PatientIcon color="#636366" />
                پر : {bedDetails.reserved.length} عدد
              </p>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mb-5">
          <HospitalIcon w="100" h="100" />
          <p className="text-text-primary font-bold">
            ساختمان شماره {building.number}
          </p>
          <p className="text-text-secondary text-sm">
            بیمارستان {hospital.name}
          </p>
        </div>
        <div className="w-full">
          <SwiperComp />
        </div>
      </section>
    </div>
  );
};

export default HospitalDetails;
