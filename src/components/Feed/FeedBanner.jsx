// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const FeedBanner = () => {
  const images = [1, 2, 3];

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
                      <span className="font-semibold">
                        Your Friend Sumanth Just Bought
                      </span>
                    </div>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className="items-center gap-2 hidden md:flex"
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
                      src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="tailwind logo"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2">
                    <div className="flex w-full flex-col px-4">
                      <span className="font-semibold text-base">
                        Nike Air Max Pro 8888 - Super Light
                      </span>
                      <span className="float-right text-gray-400 text-sm">
                        42EU - 8.5US
                      </span>
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
                          4.96{" "}
                          <span className="text-gray-500 font-normal">
                            (76 reviews)
                          </span>
                        </p>
                      </div>

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
