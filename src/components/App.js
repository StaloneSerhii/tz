import { Route, Routes } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import("./Layout"));
const Cards = lazy(() => import("../pages/cards/cards"));
const Home = lazy(() => import("../pages/home/homePage"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Cards />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
