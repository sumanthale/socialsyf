import {
  SfIconAdd,
  SfIconContactSupport,
  SfIconGridView,
  SfIconHome,
  SfIconInfo,
  SfIconPackage,
  SfIconPercent,
  SfIconShoppingCart,
  SfIconTune,
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
    name: "Offers",
    icon: <SfIconPercent />,
    link: "",
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
    name: "Add Product",
    icon: <SfIconAdd />,
    link: "",
  },
  {
    name: "My Products",
    icon: <SfIconPackage />,
    link: "/allproducts",
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
      <div className="flex flex-col items-center w-full h-full overflow-hidden text-black  rounded">
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 ">
            {items.map((item) => (
              <Link
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-syf"
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
