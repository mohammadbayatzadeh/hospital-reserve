import { useState } from "react";
import { HospitalData } from "../../data/hospital";
import { Hospital } from "../../types/type";


type Props = {
  hospital: Hospital;
  setHospital: any;
};

const Navbar = (props: Props) => {
  const { hospital, setHospital } = props;
  return (
    <nav className="w-full bg-white rounded-lg flex items-center  my-4">
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-4 px-3 border-l-2 border-solid border-text-tertiary"
      >
        {HospitalData.map((data, index) => (
          <option value={"option" + index} onClick={() => setHospital(data)}>
            بیمارستان {data.name}
          </option>
        ))}
      </select>
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-4 px-3 border-l-2 border-solid border-text-tertiary"
      >
        {hospital.buildings.map((data, index) => (
          <option value={"option" + index}>ساختمان شماره {data.number}</option>
        ))}
      </select>
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-4 px-3 border-l-2 border-solid border-text-tertiary"
      >
        <option value="all">انتخاب نوع تخت</option>
        <option value="special">ویژه</option>
        <option value="normal">معمولی</option>
      </select>
      <select id="mon-menu-deroulant" className="bg-white w-full py-4 px-3 ">
        <option value="all">مرد</option>
        <option value="special">زن</option>
        <option value="special">کودک</option>
      </select>
      <button className="bg-bg-primary h-full py-4 px-6 rounded-l-lg text-white">
        جستحو
      </button>
    </nav>
  );
};

export default Navbar;
