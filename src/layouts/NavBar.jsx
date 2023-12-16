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
  SfIconLocationOn,
} from "@storefront-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { CSSTransition } from "react-transition-group";
import Login from "../components/auth/Login";
import { AuthContext } from "../context/AuthContext";
import CustomSearch from "./CustomSearch";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../components/products/Cart";
import { StandaloneSearchBox } from "@react-google-maps/api";

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
      type: "action",
      action: () => {
        setLoginOpen(true);
      },
    },
  ];

  const buyerItems = [
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
      label: user?.name,
      ariaLabel: user?.name,
      type: "action",
      action: () => null,
    },
    {
      icon: <SfIconCompareArrows />,
      label: "",
      ariaLabel: "Checkout Seller",
      type: "action",
      action: () => {
        setUser({
          type: "Seller",
          name: "Prime Craft",
          url: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        });
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
      icon: <SfIconAdd />,
      label: "Add Promo",
      ariaLabel: "Add Promo",
      type: "action",
      action: () => null,
    },
    {
      icon: <SfIconPerson />,
      label: user?.name,
      ariaLabel: user?.name,
      type: "action",
      action: () => null,
    },
    {
      icon: <SfIconCompareArrows />,
      label: "",
      ariaLabel: "Checkout Buyer",
      type: "action",
      action: () => {
        setUser({
          type: "Buyer",
          name: "Sumanth",
          url: "https://sumanthale.netlify.app/sumanthlogo.91ec0aabdc81f0b683a3.jpg",
        });
      },
    },
  ];

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        setLoginOpen(true);
      }, 3000);
    }
  }, []);

  const items =
    user !== null
      ? user?.type === "Seller"
        ? sellerItems
        : buyerItems
      : unauthenticatedItems;
  const drawerRef = useRef(null);
  const menuRef = useRef(null);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showMaps, setShowMaps] = useState(false);
  const [searchQuery, setSearchQuery] = useState("Hyderabad, India");
  const handleChange = async () => {
    const query = textSearchRef.current.value;
    setSearchQuery(query);
    setShowMaps(false);
  };
  const textSearchRef = useRef(null);

  useEffect(() => {
    if (isLoginOpen || showMaps) {
      document.getElementById("body").style.overflow = "hidden";
    } else {
      document.getElementById("body").style.overflow = "auto";
    }
  }, [isLoginOpen, showMaps]);

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
  const handleNotificationClick = () => {
    setShowNotification(false);
    navigate("/order");
  };

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
          {user?.type === "Buyer" && (
            <h1
              className="flex items-center cursor-pointer"
              onClick={() => setShowMaps(!showMaps)}
            >
              <SfIconLocationOn className="mt-1" />
              <div className="w-32 ml-1">
                <h1 className="text-[11px] text-[#ccc]">Delivery to Ale</h1>
                <h1 className="text-[11px] text-white font-bold line-clamp-1">
                  {searchQuery}
                </h1>
              </div>
            </h1>
          )}

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
              All
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
                                className="typography-text-base md:typography-text-sm py-4 md:py-1.5 text-black"
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
                      <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base text-black">
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
          <div className="mx-3 w-full">
            <CustomSearch />
          </div>
          <nav
            className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1"
            aria-label="SF Navigation"
          >
            {user?.type === "Seller" && (
              <SfButton
                type="button"
                className="!text-white  bg-transparent hover:bg-primary-800 hover:text-white  active:bg-primary-900 active:text-white relative mr-2 "
                variant="tertiary"
                slotPrefix={<i className="fa fa-bell"></i>}
                square
                onClick={() => {
                  setShowNotification(!showNotification);
                }}
              >
                <span className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-syf inline">
                  <span className="absolute right-0 -z-1 inline-flex h-full w-full animate-ping rounded-full bg-syf opacity-75"></span>
                </span>
              </SfButton>
            )}
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

            {showNotification && (
              <ul className="text-sm  lg:shadow-soft-3xl duration-250 min-w-44  dark:bg-gray-950 absolute left-0 top-16 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all  sm:-mr-6 lg:absolute lg:left-auto right-40 w-fit lg:mt-2 lg:block lg:cursor-pointer transform-dropdown-show ">
                <li className="relative mb-2" onClick={handleNotificationClick}>
                  <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 !bg-gray-200 !text-slate-700  lg:transition-colors">
                    <div className="flex py-1">
                      <div className="my-auto">
                        <img
                          src="https://sumanthale.netlify.app/sumanthlogo.91ec0aabdc81f0b683a3.jpg"
                          className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                          <span className="font-semibold">New Order</span> from
                          Sumanth
                        </h6>
                        <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                          <i
                            className="mr-1 fa fa-clock"
                            aria-hidden="true"
                          ></i>
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="relative mb-2">
                  <a
                    className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                    href="javascript:;"
                  >
                    <div className="flex py-1">
                      <div className="my-auto">
                        <img
                          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                          <span className="font-semibold">Order Delivered</span>{" "}
                          to Sara
                        </h6>
                        <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                          <i
                            className="mr-1 fa fa-clock"
                            aria-hidden="true"
                          ></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                    href="javascript:;"
                  >
                    <div className="flex py-1">
                      <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 43 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>credit-card</title>
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              transform="translate(-2169.000000, -745.000000)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path
                                    className="color-background"
                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                    opacity="0.593633743"
                                  ></path>
                                  <path
                                    className="color-background"
                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                          Payment successfully completed
                        </h6>
                        <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                          <i
                            className="mr-1 fa fa-clock"
                            aria-hidden="true"
                          ></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
      <Cart open={open} setOpen={setOpen} />
      {isLoginOpen && <Login setLoginOpen={setLoginOpen} />}
      {showMaps && (
        <>
          <div className="fixed inset-0 z-[990] h-screen w-full bg-black opacity-70"></div>

          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            }}
            className="z-[990]  w-1/2 h-1/2"
          >
            <div
              className="absolute cursor-pointer -right-5 -top-5 flex items-center justify-center w-12 h-12 rounded-full bg-primary-400"
              onClick={() => {
                setShowMaps(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <div className="w-full  p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleChange();
                }}
              >
                <div className="flex w-2/3 mx-auto py-4">
                  <div className="relative w-full">
                    <StandaloneSearchBox onPlacesChanged={handleChange}>
                      <input
                        ref={textSearchRef}
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 pr-4  "
                        placeholder="Search Places..."
                        required
                      />
                    </StandaloneSearchBox>

                    <button
                      type="submit"
                      className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black "
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
