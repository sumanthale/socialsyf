import { useRef, useState } from "react";
import classNames from "classnames";
import Posts from "../Feed/Posts";
import { FLASH_SALE } from "../data/cards";

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

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg shadow-xl pb-8 relative">
        <div className="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="flex flex-col justify-start -mt-20 ml-10 max-w-lg">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            className="w-40 border-4 border-white rounded-full"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">Priyanka thakur</p>
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

          <p className="text-sm text-gray-500">@Priyanka.thakur8</p>
          <p className="text-gray-700">
            Women can look beautiful in any outfit but the right outfit can make
            women become powerful💕
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
                  <Posts isFeatured={true} />
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
