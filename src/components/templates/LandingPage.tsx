//components
import Navbar from "../layouts/Navbar";
import Banners from "../modules/Banners";
import Doctors from "../modules/Doctors";
import Features from "../modules/Features";
import Hospitals from "../modules/Hospitals";

function landingPage() {
  return (
    <>
      <Navbar />
      <Banners />
      <Hospitals />
      <Features />
      <Doctors />
    </>
  );
}

export default landingPage;
