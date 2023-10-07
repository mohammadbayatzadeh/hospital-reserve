import { Route, Routes } from "react-router-dom";

//pages
import HospitalDetails from "./components/templates/HospitalDetails";
import LandingPage from "./components/templates/LandingPage";
import AuthPage from "./components/templates/AuthPage";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hospital-page/:slug" element={<HospitalDetails />} />
      <Route path="/hospital-page/" element={<HospitalDetails />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default Routers;
