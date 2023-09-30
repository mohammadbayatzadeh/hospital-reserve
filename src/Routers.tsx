import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/templates/LandingPage";
import HospitalDetails from "./components/templates/HospitalDetails";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hospital-page" element={<HospitalDetails />} />
    </Routes>
  );
}

export default Routers;
