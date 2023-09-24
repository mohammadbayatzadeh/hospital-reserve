import Layout from "./components/layouts/layout";
import HospitalDetails from "./components/templates/HospitalDetails";

function App() {
  return (
    <div className="w-full flex items-center bg-bg-body flex-col min-h-screen">
      <Layout>
        <HospitalDetails />
      </Layout>
    </div>
  );
}

export default App;
