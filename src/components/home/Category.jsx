/* eslint-disable react/prop-types */
import {
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from "@storefront-ui/react";
import classNames from "classnames";

const products = Array.from(Array(16), (_, i) => ({
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

export default function Category() {
  return (
    <div className="px-10 pb-6">
      <div className="relative">
        <div className="w-full mx-auto py-10 lg:py-14">
          <div className="flex justify-between items-center flex-col xl:flex-row">
            <div className="text-4xl sm:text-5xl font-black tracking-wide text-center uppercase mx-auto ">
              Shop By{" "}
              <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block ">
                Category
              </span>
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
        {products.map(({ id }) => (
          <a
            key={id}
            href="/category/sneakers"
            className="first:ms-auto last:me-auto shrink-0 rounded-md w-[148px] lg:w-[192px] cursor-pointer"
          >
            <div className="group flex justify-center text-center flex-col category min-w-52">
              <div className="relative inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 mx-auto rounded-full">
                <div className="flex">
                  <span className="category1">
                    <span className="category2">
                      <img
                        className="category3 rounded-full"
                        alt=""
                        aria-hidden="true"
                        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fsneakers.jpg&w=256&q=100"
                      />
                    </span>
                    <img
                      alt="Sneakers"
                      src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fsneakers.jpg&w=256&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="category4 object-cover bg-gray-300 rounded-full"
                    />
                  </span>
                </div>
                <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-full"></div>
                <div className="absolute top left h-full w-full flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                  </svg>
                </div>
              </div>
              <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold capitalize">
                Category
              </h4>
            </div>
          </a>
        ))}
      </SfScrollable>
    </div>
  );
}