// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const images = [
  {
    image:
      "https://media-www.canadiantire.ca/product/playing/camping/backpacks-luggage-accessories/0766176/woods-chilkoot-70l-038ab86d-5b8f-463a-9018-a426781d4697-jpgrendition.jpg?imdensity=1&imwidth=1244&impolicy=gZoom",
    name: "Sumanth ",
    product: "Woods 34L Men's Hiking Backpack",
    price: 1375.77,
    sale: true,
    people: "2K+",
    discount: 38,
    reviewCount: 33,
    rating: 4.32,
  },
  {
    image:
      "https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg",
    name: "Ember",
    product: "Apple iPhone 13 (128GB) - Blue",
    price: 800.26,
    sale: false,
    people: "300+",
    discount: 26,
    reviewCount: 22,
    rating: 4.21,
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ishika",
    product: "Mens Revolution 6 Nn | Sports Shoes-Men Sneaker",
    price: 450.9,
    sale: true,
    people: "900+",
    discount: 38,
    reviewCount: 34,
    rating: 4.45,
  },
  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Zara",
    product: "JBL Tune 510BT, On Ear Wireless Headphones with Mic",
    price: 190.42,
    sale: false,
    people: "1K+",
    discount: 42,
    reviewCount: 41,
    rating: 4.19,
  },
];
//https://odindesignthemes.com/vikinger/overview.html
const SellerRightBar = () => {
  return (
    <div className="fixed   top-24 bottom-0  overflow-y-scroll overflow-x-hidden  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <>
        <div className="w-full bg-white h-fit">
          <div className="section-banner2">
            <img
              className="section-banner-icon h-full"
              src="https://odindesignthemes.com/vikinger/img/banner/marketplace-icon.png"
              alt="newsfeed-icon"
            />

            <div className="flex flex-col text-center lg:text-left text-white space-y-1">
              <h1 className="text-3xl font-bold ">Live Feed</h1>
              <p className="text">Check what your customers have been up to!</p>
            </div>
          </div>
        </div>
        <div className="Slider w-[510px] mx-auto  max-h-[14rem] mt-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper "
          >
            {images.map((img, idx) => (
              <SwiperSlide className=" max-h-[14rem]" key={idx}>
                <div className="flex flex-col justify-center px-2">
                  <div className="px-8 bg-syf  rounded mb-3">
                    <div className="flex items-center mx-auto container justify-center md:justify-between py-2 text-base ">
                      <div className="">
                        <span className="font-semibold text-gray-800 ">
                          Your Got a New Order from{" "}
                          <span className="font-bold text-black">
                            {img.name}{" "}
                          </span>
                        </span>
                      </div>
                      <a
                        href="#"
                        rel="noopener noreferrer"
                        className="items-center gap-2 hidden md:flex ml-4"
                      >
                        <button
                          type="button"
                          className="relative overflow-hidden font-semibold rounded text-sm bg-white flex items-center gap-x-1 px-2 py-0.5 hover:bg-black hover:text-white"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 22 22"
                            className="fill-current h-4 w-4"
                          >
                            <path
                              clipRule="evenodd"
                              d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                          View Order
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 w-full mx-auto border border-white bg-white">
                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                      <img
                        src={img.image}
                        alt="tailwind logo"
                        className="rounded-xl max-h-28 "
                      />
                    </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col  space-y-3 justify-between">
                      <div className="flex w-full flex-col px-4">
                        <span className="font-semibold text-base ">
                          {img.product}
                        </span>
                        <strong className="block font-bold text-lg">
                          <span className="text-red-700 ">
                            -{img.discount}%
                          </span>{" "}
                          ${Number(img.price).toLocaleString("en-US")}
                          <h1 className="inline text-slate-700 text-[13px] ml-3">
                            <del>
                              $
                              {Number(img.price / (1 - img.discount / 100))
                                .toFixed(2)
                                .toLocaleString("en-US")}
                            </del>
                          </h1>
                        </strong>
                      </div>
                      <div className="flex justify-between item-center">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <p className="text-gray-600 font-bold text-sm ml-1">
                            {img.rating}{" "}
                            <span className="text-gray-500 font-normal">
                              ({img.reviewCount} reviews)
                            </span>
                          </p>
                        </div>

                        {img.sale && (
                          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-x-1">
                            Product On Sale
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
      <h1 className="text-center font-bold mb-1 uppercase">
        Week&apos;s OVERVIEW
      </h1>
      <div className="flex flex-col thestats gap-4 bg-[#eee] p-4 relative rounded-lg">
        <div className="stats-decoration v2 big bg-white shadow-lg ">
          <p className="text-5xl font-bold">33</p>

          <p className="text-sm font-bold">Post Engagements</p>

          <p className="text-xs uppercase tracking-tight font-bold text-[#acacac]">
            Today
          </p>

          <div className="absolute top-5 right-10 flex gap-x-1.5 items-center text-xs">
            <div className="border border-[#23d2e2] rounded-full w-[20px] h-[20px] grid place-items-center">
              <i className="fa fa-plus text-[#23d2e2]"></i>
            </div>

            <p className="text-[14px] font-bold">5.3%</p>
          </div>
        </div>

        <div className="stats-decoration2 v2 big bg-white shadow-lg ">
          <p className="text-5xl font-bold">126</p>

          <p className="text-sm font-bold">Profile Views</p>

          <p className="text-xs uppercase tracking-tight font-bold text-[#acacac]">
            Today
          </p>

          <div className="absolute top-5 right-10 flex gap-x-1.5 items-center text-xs">
            <div className="border border-red-600 rounded-full w-[20px] h-[20px] grid place-items-center">
              <i className="fa fa-minus text-red-600"></i>
            </div>

            <p className="text-[14px] font-bold">4.7%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRightBar;
