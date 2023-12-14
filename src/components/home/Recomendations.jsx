/* eslint-disable react/prop-types */
// import { SfLink, SfButton, SfIconFavorite } from "@storefront-ui/react";
import { Link } from "react-router-dom";
import { RECOMENDED_SALE } from "../data/cards";
const post = {
  retailName: "Woods LTD",
  avatar:
    "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/gallery_7.png",
  src: "https://oliversapparel.com/cdn/shop/articles/ali-kazal-gcOMSDzWvR8-unsplash_900x.jpg?v=1653675309",
  images: [
    {
      src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/gallery_1.png",
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
export default function Recommended() {
  return (
    <div className="px-6 border ">
      <div className="relative">
        <div className="w-full mx-auto py-10 lg:py-14">
          <div className="flex justify-between items-center flex-col xl:flex-row">
            <div className="text-4xl sm:text-5xl font-black tracking-wide text-center uppercase mx-auto ">
              <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block ">
                Recomended Products
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
        {RECOMENDED_SALE.map(
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
                    ${Number(price / (1 - discountPercentage / 100)).toFixed(2)}
                  </del>
                </div>
              </div>
            </div>
          )
        )}
        <Link
          to={"/product"}
          className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-gray-100 ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
          role="button"
          title="Adidas Shoes Black"
        >
          <div className="flex mb-3 md:mb-3.5 pb-0 w-full">
            <span className="c1 w-full">
              <span className="c2 w-full">
                <img
                  src={
                    "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/gallery_1.png"
                  }
                  alt={"backpack"}
                  aria-hidden="true"
                  className="c3 w-full object-cover "
                />
              </span>
              <img
                src={
                  "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/gallery_1.png"
                }
                alt={"backpack"}
                decoding="async"
                data-nimg="intrinsic"
                className="c4 max-h-[200px] w-full object-cover  bg-gray-200 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
              />
            </span>
            <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start"></div>
          </div>
          <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
            <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
              Woods LTD
            </h2>
            <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
              Woods 34L Men&apos;s Hiking Backpack, Cetacean Green
            </p>
            <div
              className="font-semibold text-sm mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
           text-heading"
            >
              <span className="inline-block false">$1410.77</span>
              <del className="sm:text-base font-normal text-gray-800">
                $2274.19
              </del>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
