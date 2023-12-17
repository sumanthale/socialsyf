// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const FeedBanner = () => {
  const images = [
    {
      image:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Aryan ",
      product: "Nike Air Max Pro 8888 - Super Light",
      price: 320.32,
      sale: true,
      people: "2K+",
      discount: 32,
      reviewCount: 33,
      rating: 4.32,
    },
    {
      image: "https://m.media-amazon.com/images/I/71PgoTeSp2L._AC_SL1500_.jpg",
      name: "Supraja",
      product: "Royal Canin Dry Dog Food",
      price: 37.05,
      sale: false,
      people: "400+",
      discount: 10,
      reviewCount: 45,
      rating: 4.21,
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ember ",
      product: "NIBOSI Smart Watche Minimalist White",
      price: 210.26,
      sale: false,
      people: "300+",
      discount: 26,
      reviewCount: 22,
      rating: 3.21,
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

  return (
    <>
      <div className="w-full bg-white">
        <div className="section-banner ">
          <img
            className="section-banner-icon h-full"
            src="https://odindesignthemes.com/vikinger/img/banner/newsfeed-icon.png"
            alt="newsfeed-icon"
          />

          <div className="flex flex-col text-center lg:text-left text-white space-y-1">
            <h1 className="text-3xl font-bold ">Live Feed</h1>
            <p className="text">Check what your friends have been up to!</p>
          </div>
        </div>
      </div>
      <div className="Slider w-[520px] mx-auto  h-[15rem] mt-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper "
        >
          {images.map((img, idx) => (
            <SwiperSlide className=" h-[14rem]" key={idx}>
              <div className="flex flex-col justify-center px-2">
                <div className="px-8 bg-syf  rounded mb-3">
                  <div className="flex items-center mx-auto container justify-center md:justify-between py-2 text-base ">
                    <div className="">
                      <span className="font-semibold text-gray-800">
                        Your friend{" "}
                        <span className="font-bold text-black">
                          {img.name}{" "}
                        </span>
                        just bought
                      </span>
                    </div>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className="items-center gap-2 hidden md:flex ml-4"
                    >
                      <button
                        type="button"
                        className="relative overflow-hidden font-semibold rounded bg-white flex items-center gap-x-1 px-2 py-0.5 hover:bg-black hover:text-white"
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
                        Buy Now
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full mx-auto border border-white bg-white">
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img
                      src={img.image}
                      alt="tailwind logo"
                      className="rounded-xl max-h-28"
                    />
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 justify-between">
                    <div className="flex w-full flex-col px-4">
                      <span className="font-semibold text-base line-clamp-1 ">
                        {img.product}
                      </span>
                      <strong className="block font-bold text-lg">
                        <span className="text-red-700 ">-{img.discount}%</span>{" "}
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
                      <h1 className="text-slate-900 font-bold text-[11px]">
                        {img.people} bought in the past month.
                      </h1>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-pink-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          On Sale
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
  );
};

export default FeedBanner;
