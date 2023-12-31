//components
import Doctor from "../elements/landing/Doctor";

function Doctors() {
  return (
    <div className="w-full flex flex-col my-12" id="doctors">
      <h4 className="text-center text-3xl text-bg-primary mb-5">مشاورین</h4>
      <div className="w-full flex flex-wrap ">
        <Doctor image="1" />
        <Doctor image="2" />
        <Doctor image="3" />
        <Doctor image="4" />
      </div>
    </div>
  );
}

export default Doctors;
