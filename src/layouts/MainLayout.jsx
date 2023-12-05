import { Outlet } from "react-router-dom";
import BaseMegaMenu from "./NavBar";

const MainLayout = () => {
  return (
    <main>
      <BaseMegaMenu />
      <Outlet />
    </main>
  );
};

export default MainLayout;
