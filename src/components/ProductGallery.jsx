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

const products = Array.from(Array(10), (_, i) => ({
  id: i.toString(),
  name: "Athletic mens walking sneakers",
  price: "$2,345.99",
  img: {
    src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
    alt: "White sneaker shoe",
  },
}));

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
  return (
    <div className="px-10">
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
        {products.map(({ id, name, price, img }) => (
          <div
            key={id}
            className="first:ms-auto last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[292px]"
          >
            <div className="relative">
              <SfLink href="#" className="block">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block object-cover h-auto rounded-md aspect-square lg:w-[290px] lg:h-[290px]"
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
            <div className="p-2 border-t border-neutral-200 ">
              <SfLink href="#" variant="secondary" className="no-underline">
                {name}
              </SfLink>
              <span className="block mt-2 font-bold">{price}</span>
            </div>
          </div>
        ))}
      </SfScrollable>
    </div>
  );
}
