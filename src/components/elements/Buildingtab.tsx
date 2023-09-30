//icons
import BuildingIcon from "../../icons/BuildingIcon";

//types
import { Floor, Hospital } from "../../types/type";

type Props = {
  floor: Floor;
  setBuilding: Function;
  hospital: Hospital;
  setFloor: Function;
  currentFloor: Floor;
};

function Buildingtab({
  floor,
  setBuilding,
  hospital,
  setFloor,
  currentFloor,
}: Props) {
  const changeHandler = () => {
    const building = hospital.buildings.find(
      (build) => build.number === floor.building
    );
    setFloor(floor);
    setBuilding(building);
  };
  return (
    <div
      className={`w-[250px] flex flex-col items-center text-sm cursor-pointer  ${
        floor.number === currentFloor.number
          ? "border-b-4 border-solid border-bg-primary text-bg-primary"
          : null
      }`}
      onClick={changeHandler}
    >
      <BuildingIcon
        color={floor.number === currentFloor.number ? "#36459b" : null}
      />
      {floor.number}
    </div>
  );
}

export default Buildingtab;
