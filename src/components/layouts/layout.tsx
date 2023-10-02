//components
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: any;
};

const Layout = (props: Props) => {
  return (
    <div className="w-11/12 py-2">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
