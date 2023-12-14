import {
  SfCounter,
  SfIconCheck,
  SfIconThumbDown,
  SfIconThumbUp,
  SfRating,
} from "@storefront-ui/react";

const ProductReviews = () => {
  return (
    <div className="grid grid-cols-9 my-10 gap-6">
      <div className="col-span-3  ">
        <h1 className="font-bold text-2xl mb-1">Customer reviews</h1>
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            out of
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            5
          </p>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          123 global ratings
        </p>
        <div className="flex mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            5 star
          </a>
          <div className="w-3/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "80%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            80%
          </span>
        </div>
        <div className="flex mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            4 star
          </a>
          <div className="w-3/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "17%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            17%
          </span>
        </div>
        <div className="flex mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            3 star
          </a>
          <div className="w-3/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "8%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            8%
          </span>
        </div>
        <div className="flex mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            2 star
          </a>
          <div className="w-3/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "4%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            4%
          </span>
        </div>
        <div className="flex mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            1 star
          </a>
          <div className="w-3/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            1%
          </span>
        </div>
      </div>
      <div className="col-span-6">
        <h1 className="text-2xl my-3 font-bold">Top reviews from India</h1>
        <article className="w-full p-4 my-3 shadow border rounded-md">
          <header className="flex flex-col items-start pb-4 md:flex-row md:justify-between">
            <div className="flex items-start">
              <img
                src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/review_avatar.png"
                alt="Review avatar"
                className="p-0.5"
              />
              <div className="flex-col pl-2">
                <span className="text-sm text-neutral-900">Sarah H</span>
                <span className="flex items-center pr-2 text-xs text-neutral-500">
                  <SfRating value={5} max={5} size="xs" className="mr-2" />1 day
                  ago
                </span>
              </div>
            </div>
            <p className="flex items-center text-xs truncate text-primary-700">
              <SfIconCheck size="xs" className="mr-1" /> Verified purchase
            </p>
          </header>
          <div className="text-sm text-neutral-900">
            I recently took this bag on a week-long trek through the Himalayas,
            and it exceeded all my expectations! The durability, multiple
            compartments, and comfortable straps made it the perfect companion.
            It even held up in unexpected rain. Highly recommended for serious
            trekkers!
          </div>
          <footer className="flex items-center justify-between">
            <div className="text-sm text-neutral-500">
              <button type="button" className="mr-6 hover:text-primary-800">
                <SfIconThumbUp size="sm" className="mr-2.5" />
                <SfCounter size="sm" className="text-inherit">
                  6
                </SfCounter>
              </button>
              <button type="button" className="hover:text-primary-800">
                <SfIconThumbDown size="sm" className="mr-2.5" />
                <SfCounter size="sm" className="text-inherit">
                  2
                </SfCounter>
              </button>
            </div>

            <button
              className="px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800"
              type="button"
            >
              Report abuse
            </button>
          </footer>
        </article>
        <article className="w-full p-4 my-3 shadow border rounded-md">
          <header className="flex flex-col items-start pb-4 md:flex-row md:justify-between">
            <div className="flex items-start">
              <img
                src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/review_avatar.png"
                alt="Review avatar"
                className="p-0.5"
              />
              <div className="flex-col pl-2">
                <span className="text-sm text-neutral-900">Alex M</span>
                <span className="flex items-center pr-2 text-xs text-neutral-500">
                  <SfRating value={4} max={5} size="xs" className="mr-2" />2
                  days ago
                </span>
              </div>
            </div>
            <p className="flex items-center text-xs truncate text-primary-700">
              <SfIconCheck size="xs" className="mr-1" /> Verified purchase
            </p>
          </header>
          <div className="text-sm text-neutral-900">
            Great bag for weekend hikes! The size is just right, and I love the
            easy-access pockets for my camera and snacks. Comfortable on the
            shoulders, and the water-resistant material came in handy during a
            light drizzle. Solid choice for casual adventurers.
          </div>
          <footer className="flex items-center justify-between">
            <div className="text-sm text-neutral-500">
              <button type="button" className="mr-6 hover:text-primary-800">
                <SfIconThumbUp size="sm" className="mr-2.5" />
                <SfCounter size="sm" className="text-inherit">
                  6
                </SfCounter>
              </button>
              <button type="button" className="hover:text-primary-800">
                <SfIconThumbDown size="sm" className="mr-2.5" />
                <SfCounter size="sm" className="text-inherit">
                  2
                </SfCounter>
              </button>
            </div>

            <button
              className="px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800"
              type="button"
            >
              Report abuse
            </button>
          </footer>
        </article>
        <article className="w-full p-4 my-3 shadow border rounded-md">
          <header className="flex flex-col items-start pb-4 md:flex-row md:justify-between">
            <div className="flex items-start">
              <img
                src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/review_avatar.png"
                alt="Review avatar"
                className="p-0.5"
              />
              <div className="flex-col pl-2">
                <span className="text-sm text-neutral-900">Karla</span>
                <span className="flex items-center pr-2 text-xs text-neutral-500">
                  <SfRating value={5} max={5} size="xs" className="mr-2" />2
                  days ago
                </span>
              </div>
            </div>
            <p className="flex items-center text-xs truncate text-primary-700">
              <SfIconCheck size="xs" className="mr-1" /> Verified purchase
            </p>
          </header>
          <div className="text-sm text-neutral-900">
            I recently purchased a pair of sneakers and I am thoroughly
            impressed with their quality and comfort. The design is sleek and
            modern, and the shoes are available in a variety of colors to suit
            anyone style preferences. The upper is made of a breathable and
            durable material that allows my feet to stay cool and dry during
            long walks or runs. The sole is also very comfortable and provides
            great sup...
          </div>
          <footer className="flex items-center justify-between">
            <div className="text-sm text-neutral-500">
              <button type="button" className="mr-6 hover:text-primary-800">
                <SfIconThumbUp size="sm" className="mr-2.5" />
                <SfCounter size="sm" className="text-inherit">
                  6
                </SfCounter>
              </button>
              <button type="button" className="hover:text-primary-800">
                <SfIconThumbDown size="sm" className="mr-2.5" />
                <SfCounter size="sm" className="text-inherit">
                  2
                </SfCounter>
              </button>
            </div>

            <button
              className="px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800"
              type="button"
            >
              Report abuse
            </button>
          </footer>
        </article>
        <h1 className="text-center ">more...</h1>
      </div>
    </div>
  );
};

export default ProductReviews;
