import { Hospital } from "../../types/type";
import { HospitalData } from "../../utils/randomHospitalData";

type Props = {
  hospital: Hospital;
  setHospital: Function;
};

const Navbar = (props: Props) => {
  const { hospital, setHospital } = props;
  return (
    <nav className="w-full bg-white rounded-lg flex flex-wrap md:flex-nowrap items-center my-4">
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-4 px-3 md:border-l  border-solid border-text-tertiary rounded-t-lg md:rounded-l-lg"
      >
        {HospitalData.map((data, index) => (
          <option
            value={"option" + index}
            onClick={() => setHospital(data)}
            key={index}
          >
            بیمارستان {data.name}
          </option>
        ))}
      </select>
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-4 px-3 md:border-l border-solid border-text-tertiary md:rounded-l-lg"
      >
        {hospital.buildings.map((data, index) => (
          <option value={"option" + index} key={index}>
            ساختمان شماره {data.number}
          </option>
        ))}
      </select>
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-4 px-3 md:border-l border-solid border-text-tertiary md:rounded-l-lg"
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
      <button className="bg-bg-primary w-full h-full py-4 px-6 md:rounded-l-lg md:rounded-r-none rounded-b-lg text-white">
        جستحو
      </button>
    </nav>
  );
};

export default Navbar;
