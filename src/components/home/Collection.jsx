// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Collection() {
  const images = [
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-2.jpg&w=640&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-3.jpg&w=1920&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-1.jpg&w=640&q=100",
  ];

  return (
    <div className="mx-auto max-w-[1920px] px-6 my-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-12 lg:gap-y-14 xl:gap-y-0 xl:gap-x-7 mb-12 lg:mb-14 xl:mb-2">
        <div className="mx-auto xl:h-full xl:col-span-2 ">
          <a
            className="h-full group flex justify-center relative overflow-hidden flashSaleInit"
            href="/collections/men's-collection"
          >
            <span className="flash1">
              <span className="flash2 ">
                <img
                  className="flash3"
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271190%27%20height=%27450%27/%3e"
                />
              </span>
              <img
                alt="banner-on-selected-items"
                src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-2.jpg&w=1200&q=100"
                decoding="async"
                data-nimg="intrinsic"
                className="bg-gray-300 object-cover w-full rounded-md flash4"
              />
            </span>
            {/* <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL"></div> */}
          </a>
        </div>
        <div className="flex flex-col border border-gray-300 rounded-lg pt-6 sm:pt-7 lg:pt-8 xl:pt-7 2xl:pt-9 px-4 md:px-5 lg:px-7 pb-6 lg:pb-7 xl:px-5 2xl:px-7 col-span-full xl:col-span-1 lg:mb-1 xl:mb-0">
          <div className="flex items-center justify-between -mt-2 mb-4 md:mb-5 lg:mb-6 xl:mb-5 2xl:mb-6 3xl:mb-8">
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
              Flash Sale
            </h3>
          </div>
          <div className="h-full flex flex-col justify-between flashSale">
            <div className="mb-5 sm:mb-7 lg:mb-8 2xl:mb-10 3xl:mb-12">
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-gray-200 flex-row items-center transition-transform ease-linear ltr:pr-2 rtl:pl-2 ltr:lg:pr-3 rtl:lg:pl-3 ltr:2xl:pr-4 rtl:2xl:pl-4"
                role="button"
                title="NIKE Shoes"
              >
                <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-48 xl:w-40 2xl:w-44 3xl:w-52">
                  <span className="flash1">
                    <span className="flash2">
                      <img
                        className="flash3 "
                        alt=""
                        aria-hidden="true"
                        src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"
                      />
                    </span>
                    <img
                      alt="NIKE Shoes"
                      src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105 flash4"
                    />
                  </span>
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start"></div>
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-4 rtl:pr-4 ltr:lg:pl-6 rtl:lg:pr-6 ltr:3xl:pl-7 rtl:3xl:pr-7 ">
                  <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5 text-heading">
                    NIKE Shoes
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    NIKE 2020 Black White is a clean and monochromatic colourway
                    of the label’s latest high-technology silhouette. The model
                    first launched late last year and is currently Jordan
                    Brand’s flagship performance pair.
                  </p>
                  <div
                    className="font-semibold text-sm  mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
           text-heading"
                  >
                    <span className="inline-block false">$50.00</span>
                    <del className="sm:text-base font-normal text-gray-800">
                      $80.00
                    </del>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2.5 md:mb-3 xl:mb-2.5 2xl:mb-4">
                <div className="text-body text-xs md:text-sm leading-6 md:leading-7">
                  Sold:&nbsp;<span className="text-heading">120</span>
                </div>
                <div className="text-body text-xs md:text-sm leading-6 md:leading-7">
                  Available:&nbsp;<span className="text-heading">147</span>
                </div>
              </div>
              <div className="relative w-full h-2.5 lg:h-3 2xl:h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-syf"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img loading="lazy" src={img} alt="my imng" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
