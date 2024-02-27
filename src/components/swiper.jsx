import slide_1 from "../assets/slide_1.jpg";
import slide_2 from "../assets/slide_2.jpg";
import slide_3 from "../assets/slide_3.jpg";
import slide_4 from "../assets/slide_4.jpg";
import slide_5 from "../assets/slide_5.jpg";
import slide_6 from "../assets/slide_6.jpg";
import slide_7 from "../assets/slide_7.jpg";
import "../index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperFade = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{clickable: true}}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        crossFade={true}
        slidesPerView={1}
        loop={true}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide>
          {/* <img className="w-full h-screen" src={show_room} alt="" /> */}
          <img
            class="w-full h-[250px] md:h-[350px] lg:h-[450px]"
            src={slide_1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="swiper_style" src={slide_2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="swiper_style" src={slide_3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="swiper_style" src={slide_4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="swiper_style" src={slide_5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="swiper_style" src={slide_6} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="swiper_style" src={slide_7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperFade;
