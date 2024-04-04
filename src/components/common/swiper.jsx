import "../../index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperFade = () => {
  const slideImages = [
    import("../../assets/slide_1.jpg"),
    import("../../assets/slide_2.jpg"),
    import("../../assets/slide_3.jpg"),
    import("../../assets/slide_4.jpg"),
    import("../../assets/slide_5.jpg"),
    import("../../assets/slide_6.jpg"),
    import("../../assets/slide_7.jpg"),
  ];

  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        crossfade="true"
        slidesPerView={1}
        loop={true}
        className="mySwiper rounded-3xl"
      >
        {slideImages.map((imagePromise, i) => (
          <SwiperSlide key={i} className="">
            <img
              className="w-full h-[250px] md:h-[350px] lg:h-[450px]"
              src={imagePromise.default}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperFade;
