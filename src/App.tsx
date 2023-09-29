import Layout from "./components/layouts/layout";
import Routers from "./Routers";

function App() {
  return (
    <div className="w-full flex items-center bg-bg-body flex-col min-h-screen">
      <Layout>
        <Routers />
      </Layout>
    </div>
  );
}

export default App;
