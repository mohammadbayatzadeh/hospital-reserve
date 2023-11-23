import { Route, Routes } from "react-router-dom";

//pages
import HospitalDetails from "./components/templates/HospitalDetails";
import LandingPage from "./components/templates/LandingPage";
import RegsiterPage from "./components/templates/RegsiterPage";
import LoginPage from "./components/templates/LoginPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegsiterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hospital-page/:slug" element={<HospitalDetails />} />
      <Route path="/hospital-page/" element={<HospitalDetails />} />
    </Routes>
  );
}

export default MainRouter;
