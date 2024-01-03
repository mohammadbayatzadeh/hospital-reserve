//layout
import Layout from "./components/layouts/layout";

//routers
import MainRouter from "./Routers";

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
