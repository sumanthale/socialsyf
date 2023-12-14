import { Outlet } from "react-router-dom";
import BaseMegaMenu from "./NavBar";
import SideBar from "./SideBar";
import SmallSideBar from "./SmallSideBar";

const MainLayout = () => {
  let smallBar = true;
  // let color = "#131921";

  return (
    <main>
      <div className="pb-[5rem]">
        <div className="fixed w-full  bg-[#222831] text-white z-[999]">
          <BaseMegaMenu />
        </div>
      </div>

      <div className="flex">
        {smallBar ? (
          <>
            <div className="w-[14%] bg-[#222831]  text-white">
              <SideBar />
            </div>
            <div className="w-[86%] p-2">
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
