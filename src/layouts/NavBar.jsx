import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconExpandMore,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  useDisclosure,
  useTrapFocus,
  SfInput,
  SfIconSearch,
  SfIconMenu,
} from "@storefront-ui/react";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { CSSTransition } from "react-transition-group";
import LogoGif from "../assets/logo.gif";

const actionItems = [
  {
    icon: <SfIconShoppingCart />,
    label: "",
    ariaLabel: "Cart",
    role: "button",
  },
  {
    icon: <SfIconFavorite />,
    label: "",
    ariaLabel: "Wishlist",
    role: "button",
  },
  {
    icon: <SfIconPerson />,
    label: "Log in",
    ariaLabel: "Log in",
    role: "login",
  },
];

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
  const drawerRef = useRef(null);
  const menuRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

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

  const search = (event) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  function openModal() {
    setLoginOpen(true);
  }

  return (
    <div className="w-full h-full">
      {/* {isOpen && (
        <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />
      )} */}
      <header
        ref={menuRef}
        className=" flex flex-wrap md:flex-nowrap justify-center w-full py-2 md:py-5 border-0 border-neutral-200 md:relative md:z-10"
      >
        <div className="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <SfButton
            className="block md:hidden !text-black bg-transparent font-body hover:bg-primary-800 hover:text-black  active:bg-primary-900 active:text-black "
            aria-haspopup="true"
            aria-expanded={isOpen}
            variant="tertiary"
            onClick={toggle}
            square
          >
            <SfIconMenu className=" !text-black " />
          </SfButton>
          <a
            href="#"
            aria-label="SF Homepage"
            className="flex shrink-0 ml-4 md:ml-0 mr-2 md:mr-10 !text-black focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source srcSet={LogoGif} />
              <img src={LogoGif} alt="Sf Logo" className="h-10 " />
            </picture>
          </a>
          <SfButton
            className="hidden md:flex !text-black bg-transparent font-body hover:bg-primary-800 hover:text-black  active:bg-primary-900 active:text-black "
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
                      <div className="flex items-center font-medium !text-black typography-text-lg">
                        Browse products
                      </div>
                      <SfButton
                        square
                        variant="tertiary"
                        aria-label="Close navigation menu"
                        onClick={close}
                        className="!text-black  ml-2"
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
                      className="!text-black hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    >
                      <SfIconClose className="text-neutral-500" />
                    </SfButton>
                  </SfDrawer>
                </CSSTransition>
              </li>
            </ul>
          </nav>
          <form
            role="search"
            className="hidden md:flex flex-[100%] ml-10"
            onSubmit={search}
          >
            <SfInput
              value={inputValue}
              type="search"
              className="[&::-webkit-search-cancel-button]:appearance-none"
              placeholder="Search"
              wrapperClassName="flex-1 h-10 pr-0"
              size="base"
              slotSuffix={
                <span className="flex items-center">
                  <SfButton
                    variant="tertiary"
                    square
                    aria-label="search"
                    type="submit"
                    className="rounded-l-none hover:bg-transparent active:bg-transparent"
                  >
                    <SfIconSearch className="!text-black" />
                  </SfButton>
                </span>
              }
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form>
          <nav
            className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1"
            aria-label="SF Navigation"
          >
            {actionItems.map((actionItem) => (
              <SfButton
                className="!text-black  bg-transparent hover:bg-primary-800 hover:text-black  active:bg-primary-900 active:text-black "
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
                onClick={openModal}
              >
                {actionItem.role === "login" && (
                  <p className="hidden lg:inline-flex whitespace-nowrap pr-2">
                    {actionItem.label}
                  </p>
                )}
              </SfButton>
            ))}
          </nav>
        </div>
        <form
          role="search"
          className="flex md:hidden flex-[100%] my-2 mx-4"
          onSubmit={search}
        >
          <SfInput
            value={inputValue}
            type="search"
            className="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search"
            wrapperClassName="flex-1 h-10 pr-0"
            size="base"
            slotSuffix={
              <span className="flex items-center">
                <SfButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  className="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            }
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
      </header>

      {isLoginOpen && (
        <>
          <div className="fixed inset-0 z-[999] h-screen w-full bg-black opacity-70"></div>

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
            className="z-[999]"
          >
            <div
              className="absolute cursor-pointer -right-5 -top-5 flex items-center justify-center w-12 h-12 rounded-full dark:bg-primary-400"
              onClick={() => {
                setLoginOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
              <h2 className="mb-3 text-3xl font-semibold text-center">
                Login to your account
              </h2>
              <p className="text-sm text-center dark:text-gray-400">
                Dont have account?
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="focus:underline hover:underline"
                >
                  Sign up here
                </a>
              </p>
              <div className="my-6 space-y-4">
                <button
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p>Login with Google</p>
                </button>
                <button
                  aria-label="Login with GitHub"
                  role="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                  <p>Login with GitHub</p>
                </button>
                <button
                  aria-label="Login with Twitter"
                  role="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                  <p>Login with Twitter</p>
                </button>
              </div>
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
              </div>
              <form action="" className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="leroy@jenkins.com"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-primary-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm">
                        Password
                      </label>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline dark:text-gray-400"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="*****"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-primary-400"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-primary-400 dark:text-gray-900"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
