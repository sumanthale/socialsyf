import {
  SfIconContactSupport,
  SfIconGridView,
  SfIconHome,
  SfIconInfo,
  SfIconLogout,
  SfIconPackage,
  SfIconPercent,
  SfIconPublishedWithChanges,
  SfIconShoppingCart,
  SfIconTune,
  SfIconWarehouse,
} from "@storefront-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const buyerItems = [
  {
    name: "Home",
    icon: <SfIconHome />,
    link: "/",
  },
  {
    name: "Shop",
    icon: <SfIconShoppingCart />,
    link: "/shop",
  },
  {
    name: "All Products",
    icon: <SfIconWarehouse />,
    link: "/products",
  },
  {
    name: "My Orders",
    icon: <SfIconWarehouse />,
    link: "/myorder",
  },
  {
    name: "Offers",
    icon: <SfIconPercent />,
    link: "/offers",
  },
  {
    name: "Apply",
    icon: <SfIconPublishedWithChanges />,
    link: "/apply",
  },
  {
    name: "Help Center",
    icon: <SfIconContactSupport />,
    link: "",
  },
  {
    name: "Settings",
    icon: <SfIconTune />,
    link: "",
  },
  {
    name: "AboutUs",
    icon: <SfIconInfo />,
    link: "",
  },
  {
    name: "Logout",
    icon: <SfIconLogout />,
    link: "",
  },
];

const sellerItems = [
  {
    name: "Home",
    icon: <SfIconHome />,
    link: "/",
  },
  {
    name: "Dashboard",
    icon: <SfIconGridView />,
    link: "/dashboard",
  },
  {
    name: "Orders",
    icon: <SfIconWarehouse />,
    link: "/orders",
  },
  {
    name: "My Products",
    icon: <SfIconPackage />,
    link: "/allproducts",
  },
  {
    name: "My Profile",
    icon: <SfIconPackage />,
    link: "/profile",
  },
  {
    name: "Help Center",
    icon: <SfIconContactSupport />,
    link: "",
  },
  {
    name: "Settings",
    icon: <SfIconTune />,
    link: "",
  },
  {
    name: "Logout",
    icon: <SfIconLogout />,
    link: "",
  },
];

const SideBar = () => {
  const { user } = useContext(AuthContext);
  const items =
    user !== null
      ? user.type === "Seller"
        ? sellerItems
        : buyerItems
      : buyerItems;
  return (
    <div className="flex items-center justify-center fixed w-[12%]">
      <div className="flex flex-col items-center w-full h-full overflow-hidden text-white  rounded">
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 ">
            {items.map((item) => (
              <Link
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-syf  hover:text-black"
                to={item.link}
                key={item.name}
              >
                {item.icon}
                <span className="ml-2 text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
