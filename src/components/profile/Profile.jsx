import { useContext, useRef, useState } from "react";
import classNames from "classnames";
import { FLASH_SALE } from "../data/cards";
import {
  SfButton,
  SfIconFavorite,
  SfLink,
  SfScrollable,
} from "@storefront-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function getPreviousIndex(current, elements) {
  for (let index = current - 1; index >= 0; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = elements.length - 1; index > -1; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

function getNextIndex(current, elements) {
  for (let index = current + 1; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = 0; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

const tabs = [{ label: "Posts" }, { label: "Recomended Products" }];

const Profile = () => {
  const tablistRef = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const isActive = (tab) => activeTab.label === tab.label;
  const tabId = (label) => `${label}-tab`;
  const panelId = (label) => `${label}-panel`;
  const { user } = useContext(AuthContext);

  const handleKeyDown = (event) => {
    const elements = Array.from(
      tablistRef.current?.querySelectorAll <
        HTMLButtonElement >
        '[role="tab"]' || []
    );
    const current = elements.findIndex((el) => event.currentTarget === el);
    const nextTab = getNextIndex(current, elements);
    const prevTab = getPreviousIndex(current, elements);
    const lastTab = elements.length - 1;

    const goTo = (index) => () => {
      event.stopPropagation();
      event.preventDefault();
      const goToElement = elements[index];
      goToElement.focus();
      goToElement.click();
      goToElement.scrollIntoView();
    };

    const interactionsMap = new Map([
      ["ArrowLeft", goTo(prevTab)],
      ["ArrowRight", goTo(nextTab)],
      ["Home", goTo(0)],
      ["End", goTo(lastTab)],
    ]);

    const interaction = interactionsMap.get(event.key);
    interaction?.();
  };
  const post = {
    retailName: "Woods LTD",
    avatar:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/gallery_7.png",
    src: "https://oliversapparel.com/cdn/shop/articles/ali-kazal-gcOMSDzWvR8-unsplash_900x.jpg?v=1653675309",
    images: [
      {
        src: "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766176/woods-chilkoot-70l-038ab86d-5b8f-463a-9018-a426781d4697-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
        name: "Woods",
        price: "1,410.77",
        discount: "38",
      },
      {
        src: "https://m.media-amazon.com/images/I/71GxZAYa6UL._AC_UL480_FMwebp_QL65_.jpg",
        name: "FUR JADEN",
        price: "849",
        discount: "46",
      },
      {
        src: "https://m.media-amazon.com/images/I/71w0jq73ZqL._AC_UL480_FMwebp_QL65_.jpg",
        name: "Impulse",
        price: "1755",
        discount: "53",
      },
    ],
    description:
      "Ready to hit the trails with my trusty sidekick! 🌲🎒 Adventure awaits, and my new hiking bag is geared up for the journey ahead. #TrailBlazer #NewAdventureBuddy",
    time: 1,
  };
  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg shadow-xl pb-8 relative">
        <div className="w-full h-[250px]">
          <img
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full rounded-tl-lg rounded-tr-lg object-contain bg-black"
          />
        </div>
        <div className="flex flex-col justify-start -mt-20 ml-10 max-w-screen-lg">
          <img
            src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-36 h-36 border-4 border-white rounded-full object-cover"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">Prime Craft </p>
            <span className="bg-primary-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>

          <p className="text-sm text-gray-500">@prime.craft</p>
          <p className="text-gray-700 my-1">
            Discover exquisite treasures at PrimeCraft! 🌟 Unleash your style
            with our curated selection of high-quality, handcrafted goods. Each
            item tells a unique story of artistry and passion. Elevate your
            shopping experience with us. Your satisfaction is our priority.
            Welcome to PrimeCraft - where quality meets craftsmanship!
          </p>
          <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
            <div className="text-center pr-3">
              <span className="font-bold text-black">520</span>
              <span className=""> Followers</span>
            </div>
            <div className="text-center px-3">
              <span className="font-bold text-black">84 </span>
              <span className=""> Posts</span>
            </div>
          </div>
        </div>
        {user?.type === "Buyer" ? (
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2 absolute right-0 top-44">
            <div className="flex items-center space-x-4 mt-2">
              <button className="flex items-center bg-primary-600 hover:bg-primary-700 text-black font-bold px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                <span>Follow</span>
              </button>
              <button className="flex items-center bg-primary-600 hover:bg-primary-700 text-black font-bold px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Message</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2 absolute right-0 top-44">
            <div className="flex items-center space-x-4 mt-2">
              <button className="flex items-center bg-primary-600 hover:bg-primary-700 text-black font-bold px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <i className="fa fa-group text-sm"></i>
                <span>Followers</span>
              </button>
              <button className="flex items-center bg-primary-600 hover:bg-primary-700 text-black font-bold px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Messages</span>
              </button>
            </div>
          </div>
        )}
        <div className="max-w-screen-md mx-auto absolute bottom-5 right-10">
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Select tab"
            aria-orientation="horizontal"
            className="flex gap-2 border-b border-b-neutral-200  overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-lg border border-gray-300 bg-white  px-3 py-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                role="tab"
                id={tabId(tab.label)}
                aria-controls={panelId(tab.label)}
                aria-selected={isActive(tab)}
                disabled={tab.disabled}
                tabIndex={isActive(tab) ? 0 : -1}
                onClick={() => setActiveTab(tab)}
                onKeyDown={handleKeyDown}
                className={classNames(
                  "px-4 py-2 rounded-md font-medium whitespace-nowrap text-neutral-500 hover:enabled:bg-gray-100 hover:enabled:text-black active:enabled:bg-primary-200 active:enabled:text-primary-900 disabled:text-disabled-500 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]",
                  {
                    "!bg-syf !text-black !font-semibold": isActive(tab),
                  }
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={panelId(tab.label)}
          aria-labelledby={tabId(tab.label)}
        >
          {isActive(tab) &&
            (tab.label === "Posts" ? (
              <div className="grid grid-cols-12">
                <div className="col-span-12">
                  <div className="flex flex-col max-w-2xl mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-md mt-5">
                    <div className="flex space-x-4">
                      <img
                        alt=""
                        src={
                          "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                      />
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center">
                          <Link
                            rel="noopener noreferrer"
                            to="/profile"
                            className="text-sm font-semibold flex items-center"
                          >
                            Prime Craft
                          </Link>
                          <span className="text-[8px] text-slate-300 mx-2">
                            ⬤
                          </span>
                          {user?.type === "Buyer" && (
                            <span className="text-xs text-primary-700 p-1">
                              Follow
                            </span>
                          )}
                        </div>
                        <span className="text-xs dark:text-gray-400">
                          {post.time} hours ago
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src={post.src}
                        alt=""
                        className="object-contain  w-full mb-4 h-60 sm:h-[400px] dark:bg-gray-500"
                      />

                      <p className="text-sm dark:text-gray-400">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="space-x-2">
                        <button
                          aria-label="Share this post"
                          type="button"
                          className="p-2 text-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current dark:text-violet-400"
                          >
                            <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                          </svg>
                        </button>
                        <button
                          aria-label="Bookmark this post"
                          type="button"
                          className="p-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current dark:text-violet-400"
                          >
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex space-x-2 text-sm dark:text-gray-400">
                        <button
                          type="button"
                          className="flex items-center p-1 space-x-1.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            aria-label="Number of comments"
                            className="w-4 h-4 fill-current dark:text-violet-400"
                          >
                            <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                            <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                          </svg>
                          <span>30</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center p-1 space-x-1.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            aria-label="Number of likes"
                            className="w-4 h-4 fill-current dark:text-violet-400"
                          >
                            <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                            <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                          </svg>
                          <span>283</span>
                        </button>
                      </div>
                    </div>

                    <h1 className="font-bold">Products in this photo</h1>

                    <SfScrollable className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      {post.images.map((photo, idx) => (
                        <div
                          className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[150px] relative"
                          key={idx}
                        >
                          <div className="relative">
                            <Link to="/product" className="block">
                              <img
                                src={photo.src}
                                alt="Great product"
                                className="object-cover h-auto rounded-md aspect-square"
                              />
                            </Link>
                            <SfButton
                              variant="tertiary"
                              size="sm"
                              square
                              className="absolute -bottom-2 -right-2 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full scale-75"
                              aria-label="Add to wishlist"
                            >
                              <SfIconFavorite size="sm" />
                            </SfButton>
                          </div>
                          <div className="p-2 border-t border-neutral-200 ">
                            <SfLink
                              href="#"
                              variant="secondary"
                              className="no-underline font-bold text-xs"
                            >
                              {photo.name}
                            </SfLink>
                            <span className="block font-semibold text-xs">
                              ${photo.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </SfScrollable>
                  </div>
                </div>
              </div>
            ) : (
              <div className="my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
                {FLASH_SALE.map(
                  ({
                    id,
                    title,
                    price,
                    thumbnail,
                    description,
                    discountPercentage,
                  }) => (
                    <div
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-gray-100 ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                      role="button"
                      title="Adidas Shoes Black"
                      key={id}
                    >
                      <div className="flex mb-3 md:mb-3.5 pb-0">
                        <span className="c1">
                          <span className="c2">
                            <img
                              src={thumbnail}
                              alt={title}
                              aria-hidden="true"
                              className="c3"
                            />
                          </span>
                          <img
                            src={thumbnail}
                            alt={title}
                            decoding="async"
                            data-nimg="intrinsic"
                            className="c4 bg-gray-200 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
                          />
                        </span>
                        <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start"></div>
                      </div>
                      <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                        <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                          {title}
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                          {description}
                        </p>
                        <div
                          className="font-semibold text-sm mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
           text-heading"
                        >
                          <span className="inline-block false">${price}</span>
                          <del className="sm:text-base font-normal text-gray-800">
                            $
                            {Number(
                              price / (1 - discountPercentage / 100)
                            ).toFixed(2)}
                          </del>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Profile;
