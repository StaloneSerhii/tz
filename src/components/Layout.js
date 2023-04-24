import { Suspense } from "react";
import { Outlet } from "react-router";
import SiteBar from "./siteBar/siteBar";

const Layout = () => {
  return (
    <div>
      <header>
        <SiteBar />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
