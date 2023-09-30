import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

//data
import { HospitalData } from "../../utils/randomHospitalData";

//components
import SearchBar from "../layouts/SearchBar";
import DetailsViewer from "../modules/DetailsViewer";
import HospitalInfo from "../elements/HospitalInfo";

//types
import { Hospital } from "../../types/type";

const HospitalDetails = () => {
  const { slug } = useParams();
  const [hospital, setHospital] = useState(HospitalData[0]);

  useLayoutEffect(() => {
    if (slug) {
      const choosenHospital: Hospital | undefined = HospitalData.find(
        (hos) => hos.name === slug
      );
      choosenHospital && setHospital(choosenHospital);
    }
  }, [slug]);

  return (
    <div>
      <h4 className="font-bold text-lg rounded-t-lg border-t-4 border-bg-primary p-3">
        تخصیص تخت
      </h4>
      <SearchBar hospital={hospital} />
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
