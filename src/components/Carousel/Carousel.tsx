import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "./Card";

const Carousel = (props: {
  content: { name: string; image: string; link: string; type: string }[];
}) => {
  return (
    <div className="my-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.content.map((item) => {
          return (
            <SwiperSlide key={item.name}>
              <Card name={item.name} image={item.image} link={item.link} type={item.type} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
