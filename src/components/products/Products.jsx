import {
  SfButton,
  SfCounter,
  SfIconFavorite,
  SfIconVisibility,
  SfLink,
  SfRating,
} from "@storefront-ui/react";
import { API_PRODUCTS } from "../data/cards";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="bg-gray-50 font-poppins dark:bg-gray-800 absolute w-full left-0 -mt-2">
      <div className="px-4 py-4 mx-auto lg:py-6 md:px-6">
        <div className=" max-w-screen-2xl mb-24 -mx-3 grid grid-cols-12 gap-x-5">
          <div className="col-span-3 h-full">
            <div className="fixed overflow-y-scroll overflow-x-hidden top-14 bottom-0 pt-10 pb-6">
              <Filter />
            </div>
          </div>

          <div className="w-full px-3 col-span-9 ">
            <div className="px-3 mb-4">
              <div className="items-center justify-between hidden px-3 py-2 bg-gray-100 md:flex dark:bg-gray-900 ">
                <div className="flex">
                  <a
                    href="#"
                    className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-grid-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-grid-3x3-gap-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div className="pr-3 border-r border-gray-300">
                    <select
                      name=""
                      id=""
                      className="block w-40 text-base bg-gray-100 cursor-pointer dark:text-gray-400 dark:bg-gray-900"
                    >
                      <option value="">Sort by latest</option>
                      <option value="">Sort by Popularity</option>
                      <option value="">Sort by Price</option>
                    </select>
                  </div>
                  <div className="flex items-center pl-3">
                    <p className="text-xs text-gray-400">Show</p>
                    <div className="px-2 py-2 text-xs text-gray-500 ">
                      <select
                        name=""
                        id=""
                        className="block text-base bg-gray-100 cursor-pointer w-11 dark:text-gray-400 dark:bg-gray-900"
                      >
                        <option value="">15</option>
                        <option value="">17</option>
                        <option value="">19</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
              <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px] relative">
                <div className="relative">
                  <SfLink href="#" className="block">
                    <img
                      src={
                        "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766176/woods-chilkoot-70l-038ab86d-5b8f-463a-9018-a426781d4697-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom"
                      }
                      alt="Great product"
                      className="object-cover h-auto rounded-md aspect-square"
                      width="300"
                      height="300"
                    />
                  </SfLink>
                  <SfButton
                    variant="tertiary"
                    size="sm"
                    square
                    className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
                    aria-label="Add to wishlist"
                  >
                    <SfIconFavorite size="sm" />
                  </SfButton>
                </div>
                <div className="p-4 border-t border-neutral-200  min-h-[270px]">
                  <SfLink href="#" variant="secondary" className="no-underline">
                    Woods 34L Men&apos;s Backpack
                  </SfLink>
                  <div className="flex items-center pt-1">
                    <SfRating halfIncrement size="xs" value={4.5} max={5} />

                    <SfLink
                      href="#"
                      variant="secondary"
                      className="pl-1 no-underline"
                    >
                      <SfCounter size="xs">{20}</SfCounter>
                    </SfLink>
                  </div>
                  <p className="block py-2.5 font-normal typography-text-sm text-neutral-700 line-clamp-4 max-h-28">
                    Accessory straps on lower front panel are perfect for pads
                    or blankets Top loading design with a secure drawcord
                    closure
                  </p>
                  <span className="block pb-2 font-bold typography-text-lg">
                    $1,410.77
                  </span>
                </div>
                <Link
                  to={`/product`}
                  className="w-full text-black absolute bottom-5 grid place-items-center"
                >
                  <SfButton
                    size="sm"
                    className="!text-black"
                    slotPrefix={<SfIconVisibility size="sm" color="black" />}
                  >
                    View Details
                  </SfButton>
                </Link>
              </div>
              {API_PRODUCTS.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <nav aria-label="page-navigation">
                <ul className="flex list-style-none">
                  <li className="page-item disabled ">
                    <a
                      href="#"
                      className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-400"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md "
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
