import BuildingIcon from "../../icons/BuildingIcon";
import { Floor, Hospital } from "../../types/type";

type Props = {
  floor: Floor;
  setBuilding: Function;
  hospital: Hospital;
  setFloor: Function;
};

function Buildingtab({ floor, setBuilding, hospital, setFloor }: Props) {
  const changeHandler = () => {
    const building = hospital.buildings.find(
      (build) => build.number === floor.building
    );
    setFloor(floor);
    setBuilding(building);
  };
  return (
    <div
      className="w-[250px] flex flex-col items-center text-sm cursor-pointer"
      onClick={changeHandler}
    >
      <BuildingIcon />
      {floor.number}
    </div>
  );
}

export default Buildingtab;
