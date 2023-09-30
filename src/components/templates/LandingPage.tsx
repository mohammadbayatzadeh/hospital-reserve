import Navbar from "../layouts/Navbar";
import Banners from "../modules/Banners";
import Doctors from "../modules/Doctors";
import Features from "../modules/Features";

function landingPage() {
  return (
    <>
      <Navbar />
      <Banners />
      <Features />
      <Doctors />
    </>
  );
}

export default landingPage;
