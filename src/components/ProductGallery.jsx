/* eslint-disable react/prop-types */
import {
  SfLink,
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from "@storefront-ui/react";
import classNames from "classnames";
import { useState } from "react";
import { API_PRODUCTS } from "./data/cards";

function ButtonPrev({ disabled, ...attributes }) {
  return (
    <SfButton
      className={classNames(
        "absolute !rounded-full z-10 left-4 bg-white hidden md:block",
        {
          "!hidden": disabled,
        }
      )}
      variant="secondary"
      size="lg"
      square
      {...attributes}
    >
      <SfIconChevronLeft />
    </SfButton>
  );
}

ButtonPrev.defaultProps = { disabled: false };

function ButtonNext({ disabled, ...attributes }) {
  return (
    <SfButton
      className={classNames(
        "absolute !rounded-full z-10 right-4 bg-white hidden md:block",
        {
          "!hidden": disabled,
        }
      )}
      variant="secondary"
      size="lg"
      square
      {...attributes}
    >
      <SfIconChevronRight />
    </SfButton>
  );
}

ButtonNext.defaultProps = { disabled: false };

export default function ProductGallery() {
  const tabs = ["New Launches", "Best Sellers", "Hidden Gems"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const start =
    activeTab === "New Launches" ? 0 : activeTab === "Best Sellers" ? 10 : 20;

  return (
    <div className="px-6 ">
      <div className="relative">
        <div className="max-w-screen-xl mx-auto py-10 lg:py-14">
          <div className="flex justify-between items-center flex-col xl:flex-row">
            <div className="text-4xl sm:text-5xl font-black tracking-wide text-center uppercase">
              Our{" "}
              <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block">
                {activeTab}
              </span>{" "}
            </div>
            <div className="flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0">
              {tabs.map((tabName, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(tabName)}
                  className={classNames({
                    "cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center hover:bg-gray-300 hover:text-gray-700 ": true,
                    ["bg-black text-white"]: activeTab === tabName,
                  })}
                >
                  {tabName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SfScrollable
        className="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        buttons-placement="floating"
        drag
        slotPreviousButton={<ButtonPrev />}
        slotNextButton={<ButtonNext />}
      >
        {API_PRODUCTS.slice(start).map(
          ({
            id,
            title,
            price,
            thumbnail,
            description,
            discountPercentage,
          }) => (
            <div
              key={id}
              className="first:ms-auto last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[292px]"
            >
              <div className="relative p-2">
                <SfLink href="#" className="block">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="block object-contain h-auto rounded-md aspect-square lg:w-[290px] lg:max-h-[230px]"
                  />
                </SfLink>
                <SfButton
                  variant="tertiary"
                  size="sm"
                  square
                  className="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
                  aria-label="Add to wishlist"
                >
                  <SfIconFavorite size="sm" />
                </SfButton>
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
                    ${Number(price / (1 - discountPercentage / 100)).toFixed(2)}
                  </del>
                </div>
              </div>
            </div>
          )
        )}
      </SfScrollable>
    </div>
  );
}
