import { Route, Routes } from "react-router-dom";

//pages
import HospitalDetails from "./components/templates/HospitalDetails";
import LandingPage from "./components/templates/LandingPage";
import RegsiterPage from "./components/templates/RegsiterPage";
import LoginPage from "./components/templates/LoginPage";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hospital-page/:slug" element={<HospitalDetails />} />
      <Route path="/hospital-page/" element={<HospitalDetails />} />
      <Route path="/register" element={<RegsiterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Routers;
