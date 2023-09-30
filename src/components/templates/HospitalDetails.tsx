import { useState } from "react";
import SearchBar from "../layouts/SearchBar";
import { HospitalData } from "../../utils/randomHospitalData";
import DetailsViewer from "../modules/DetailsViewer";
import HospitalInfo from "../elements/HospitalInfo";

const HospitalDetails = () => {
  const [hospital, setHospital] = useState(HospitalData[0]);
  return (
    <div>
      <h4 className="font-bold text-lg">تخصیص تخت</h4>
      <SearchBar hospital={hospital} setHospital={setHospital} />
      <section className="w-full flex flex-col bg-white p-3 rounded-lg ">
        <h2 className="text-2xl font-bold mb-8">
          <p> اطلاعات بیمارستان {hospital.name}</p>
        </h2>
        <div className=" p-2 border border-text-tertiary border-solid rounded-lg">
          <HospitalInfo hospital={hospital} />
          <div>
            <DetailsViewer hospital={hospital} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalDetails;
