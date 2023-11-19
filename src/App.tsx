//layout
import MainRouter from "./Routers";
import Layout from "./components/layouts/layout";

//routers

function App() {
  return (
    <div className="w-full flex items-center bg-bg-body flex-col min-h-screen">
      <Layout>
        <MainRouter />
      </Layout>
    </div>
  );
}

export default App;
