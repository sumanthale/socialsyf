import { Outlet } from "react-router-dom";
import BaseMegaMenu from "./NavBar";
import SideBar from "./SideBar";
import SmallSideBar from "./SmallSideBar";

const MainLayout = () => {
  let smallBar = true;

  return (
    <main>
      <div className="pb-[5rem]">
        <div className="fixed w-full  bg-white z-[999]">
          <BaseMegaMenu />
        </div>
      </div>

      <div className="flex gap-x-4">
        {smallBar ? (
          <>
            <div className="w-[14%]">
              <SideBar />
            </div>
            <div className="w-[83%]">
              <Outlet />
            </div>
          </>
        ) : (
          <>
            <div className="w-[5%]">
              <SmallSideBar />
            </div>
            <div className="w-[95%]">
              <Outlet />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default MainLayout;
