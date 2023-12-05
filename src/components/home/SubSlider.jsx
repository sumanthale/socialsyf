// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function SubSlider() {
  const images = [
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-2.jpg&w=1920&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-3.jpg&w=1920&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-1.jpg&w=1920&q=100",
  ];
  const video = useRef(null);
  const [play, setPlay] = useState(true);
  useEffect(() => {
    if (video.current) {
      video.current.play();
    }
  }, []);

  return (
    <div className="my-6 flex items-center gap-x-3">
      <div className="Slider w-[58%]">
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
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img loading="lazy" src={img} alt="my imng" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          setPlay(!play);
        }}
      >
        <ReactPlayer
          url="https://player.vimeo.com/progressive_redirect/playback/879938646/rendition/1080p/file.mp4?loc=external&amp;signature=0f9b28aa2ec29e3b3f0daa202f958f5c170bda7024195b30bf9e92ee062654d9"
          playing={play}
          autoPlay
          loop
          muted
          width={620}

          //   onReady={() => {
          //     alert("laoded");
          //     setPlay(true);
          //   }}
        />
      </div>
    </div>
  );
}
