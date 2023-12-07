// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  const images = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/3/4335d7ed-73d3-4552-89a2-fc705bfe30691701544808069-Desktop-main-banner-INSIDER--1-.gif",
  ];

  return (
    <>
      <div className="Slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
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
      <div className="flex w-full">
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/12/3/e65024d5-0603-49f0-9356-df74e2aa70d91701598281250-Paytm--Cred---Simpl-Strip.png"
            alt="img"
            className=""
          />
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/12/3/9c61fd60-a4ae-43d8-825d-6207aadc2c391701598574073-Kotak---ICICI-Strip.png"
            alt="img"
          />
        </div>
      </div>
    </>
  );
}
