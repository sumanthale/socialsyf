import {
  SfIconShoppingCart,
  SfIconPerson,
  SfIconExpandMore,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  useDisclosure,
  useTrapFocus,
  SfIconMenu,
  SfIconAdd,
  SfIconCompareArrows,
  SfIconSafetyCheck,
} from "@storefront-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { CSSTransition } from "react-transition-group";
import Login from "../components/auth/Login";
import { AuthContext } from "../context/AuthContext";
import CustomSearch from "./CustomSearch";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../components/products/Cart";

const bannerDetails = {
  image:
    "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/watch.png",
  title: "New in designer watches",
};

const categoriesContent = [
  {
    heading: "Women",
    items: [
      {
        title: "All Women's",
        link: "#",
      },
      {
        title: "Clothing",
        link: "#",
      },
      {
        title: "Shoes",
        link: "#",
      },
      {
        title: "Accessories",
        link: "#",
      },
      {
        title: "Wearables",
        link: "#",
      },
      {
        title: "Food & Drinks",
        link: "#",
      },
    ],
  },
  {
    heading: "Men",
    items: [
      {
        title: "All Men’s",
        link: "#",
      },
      {
        title: "Clothing",
        link: "#",
      },
      {
        title: "Shoes",
        link: "#",
      },
      {
        title: "Accessories",
        link: "#",
      },
      {
        title: "Wearables",
        link: "#",
      },
      {
        title: "Food & Drinks",
        link: "#",
      },
    ],
  },
  {
    heading: "Kids",
    items: [
      {
        title: "All Kids",
        link: "#",
      },
      {
        title: "Clothing",
        link: "#",
      },
      {
        title: "Shoes",
        link: "#",
      },
      {
        title: "Accessories",
        link: "#",
      },
      {
        title: "Wearables",
        link: "#",
      },
      {
        title: "Food & Drinks",
        link: "#",
      },
    ],
  },
];

export default function BaseMegaMenu() {
  const { close, toggle, isOpen } = useDisclosure();
  const { user, setUser, setOpen, open } = useContext(AuthContext);
  const navigate = useNavigate();

  const unauthenticatedItems = [
    {
      icon: <SfIconPerson />,
      label: "Log in",
      ariaLabel: "Log in",
    },
  ];

  const buyerItems = [
    {
      icon: <SfIconSafetyCheck />,
      label: "Buyer",
      ariaLabel: "Buyer",
      type: "link",
      action: "/",
    },
    {
      icon: <SfIconCompareArrows />,
      label: "Checkout Seller",
      ariaLabel: "Checkout Seller",
      type: "action",
      action: () => {
        setUser({
          type: "Seller",
        });
      },
    },
    {
      icon: <SfIconShoppingCart />,
      label: "",
      ariaLabel: "Cart",
      type: "action",
      action: () => {
        setOpen(true);
      },
    },

    {
      icon: <SfIconPerson />,
      label: "Sumanth",
      ariaLabel: "Sumanth",
      type: "action",
      action: () => {
        setLoginOpen(true);
      },
    },
  ];
  const sellerItems = [
    {
      icon: <SfIconSafetyCheck />,
      label: "Seller",
      ariaLabel: "Seller",
      type: "link",
      action: () => null,
    },
    {
      icon: <SfIconCompareArrows />,
      label: "Checkout Buyer",
      ariaLabel: "Checkout Buyer",
      type: "action",
      action: () => {
        setUser({
          type: "Buyer",
        });
      },
    },
    {
      icon: <SfIconAdd />,
      label: "Add Product",
      ariaLabel: "Add Product",
      type: "action",
      action: () => null,
    },
    {
      icon: <SfIconPerson />,
      label: "Sumanth",
      ariaLabel: "Sumanth",
      type: "action",
      action: () => null,
    },
  ];

  const items =
    user !== null
      ? user.type === "Seller"
        ? sellerItems
        : buyerItems
      : unauthenticatedItems;
  const drawerRef = useRef(null);
  const menuRef = useRef(null);
  const [isLoginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (isLoginOpen) {
      document.getElementById("body").style.overflow = "hidden";
    } else {
      document.getElementById("body").style.overflow = "auto";
    }
  }, [isLoginOpen]);

  useTrapFocus(drawerRef, {
    activeState: isOpen,
    arrowKeysUpDown: true,
    initialFocus: "container",
  });
  useClickAway(menuRef, () => {
    close();
  });

  // function openModal() {
  //   setLoginOpen(true);
  // }

  return (
    <div className="w-full h-full">
      <header
        ref={menuRef}
        className=" flex flex-wrap md:flex-nowrap justify-center w-full py-2 md:py-5 border-0 border-neutral-200 md:relative md:z-10"
      >
        <div className="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <SfButton
            className="block md:hidden !text-white bg-transparent font-body hover:bg-primary-800 hover:text-white  active:bg-primary-900 active:text-white "
            aria-haspopup="true"
            aria-expanded={isOpen}
            variant="tertiary"
            onClick={toggle}
            square
          >
            <SfIconMenu className=" !text-white " />
          </SfButton>
          <Link
            to="/"
            aria-label="SF Homepage"
            className="flex shrink-0 ml-4 md:ml-0 mr-2 md:mr-10 !text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source
                srcSet={"https://www.synchrony.com/syc/img/synchrony_logo.svg"}
              />
              <img
                src={"https://www.synchrony.com/syc/img/synchrony_logo.svg"}
                alt="Sf Logo"
                className="h-10 "
              />
            </picture>
          </Link>
          <SfButton
            className="hidden md:flex !text-white bg-transparent font-body hover:bg-primary-800 hover:text-white  active:bg-primary-900 active:text-white "
            aria-haspopup="true"
            aria-expanded={isOpen}
            slotSuffix={<SfIconExpandMore className="hidden md:inline-flex" />}
            variant="tertiary"
            onClick={toggle}
            square
          >
            <span className="hidden md:inline-flex whitespace-nowrap px-2">
              Browse products
            </span>
          </SfButton>
          <nav>
            <ul>
              <li role="none">
                <CSSTransition
                  in={isOpen}
                  timeout={500}
                  unmountOnExit
                  classNames={{
                    enter: "-translate-x-full md:opacity-0 md:translate-x-0",
                    enterActive:
                      "translate-x-0 md:opacity-100 transition duration-500 ease-in-out",
                    exitActive:
                      "-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out",
                  }}
                >
                  <SfDrawer
                    ref={drawerRef}
                    open
                    disableClickAway
                    placement="top"
                    className="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-20 max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                  >
                    <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-primary-700 md:hidden">
                      <div className="flex items-center font-medium !text-white typography-text-lg">
                        Browse products
                      </div>
                      <SfButton
                        square
                        variant="tertiary"
                        aria-label="Close navigation menu"
                        onClick={close}
                        className="!text-white  ml-2"
                      >
                        <SfIconClose />
                      </SfButton>
                    </div>
                    {categoriesContent.map(({ heading, items }) => (
                      <div
                        key={heading}
                        className="[&:nth-child(2)]:pt-0 pt-6 md:pt-0"
                      >
                        <h2
                          role="presentation"
                          className="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
                        >
                          {heading}
                        </h2>
                        <hr className="mb-3.5" />
                        <ul>
                          {items.map((item) => (
                            <li key={item.title}>
                              <SfListItem
                                as="a"
                                size="sm"
                                role="none"
                                href={item.link}
                                className="typography-text-base md:typography-text-sm py-4 md:py-1.5"
                              >
                                {item.title}
                              </SfListItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="flex flex-col items-center justify-center overflow-hidden md:rounded-md bg-neutral-100 border-neutral-300 grow">
                      <img
                        src={bannerDetails.image}
                        alt={bannerDetails.title}
                        className="object-contain"
                      />
                      <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                        {bannerDetails.title}
                      </p>
                    </div>
                    <SfButton
                      square
                      size="sm"
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      onClick={close}
                      className="!text-white hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    >
                      <SfIconClose className="text-neutral-500" />
                    </SfButton>
                  </SfDrawer>
                </CSSTransition>
              </li>
            </ul>
          </nav>
          <CustomSearch />
          <nav
            className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1"
            aria-label="SF Navigation"
          >
            {items.map((actionItem, idx) => (
              <SfButton
                type="button"
                className="!text-white  bg-transparent hover:bg-primary-800 hover:text-white  active:bg-primary-900 active:text-white "
                key={idx}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
                onClick={() => {
                  if (actionItem.type === "action") {
                    actionItem.action();
                  } else {
                    navigate(actionItem.action);
                  }
                }}
              >
                {actionItem.label !== "" ? (
                  <p className="hidden lg:inline-flex whitespace-nowrap pr-2">
                    {actionItem.label}
                  </p>
                ) : (
                  ""
                )}
              </SfButton>
            ))}
          </nav>
        </div>
      </header>
      <Cart open={open} setOpen={setOpen} />
      {isLoginOpen && <Login setLoginOpen={setLoginOpen} />}
    </div>
  );
}
