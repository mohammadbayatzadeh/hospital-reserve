import { useState } from "react";
import Navbar from "../layouts/Navbar";
import { HospitalData } from "../../utils/randomHospitalData";

type Props = {};

const HospitalDetails = (props: Props) => {
  const [hospital, setHospital] = useState(HospitalData[0]);
  console.log(hospital)

  return (
    <div>
      <h2 className="font-bold text-lg">تخصیص تخت</h2>
      <Navbar hospital={hospital} setHospital={setHospital} />
    </div>
  );
};

export default HospitalDetails;
