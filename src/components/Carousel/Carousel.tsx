import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Carousel = (props: {
  content: { name: string; image: string; link: string; type: string }[];
}) => {
  return (
    <div className="my-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.content.map((item) => {
          return (
            <SwiperSlide key={item.name} className="my-10">
              <div className="card w-45 bg-base-100 shadow-xl">                  
                <a href={item.link} target="_blank" rel="noreferrer">
                  <figure>
                    <img src={item.image} alt="image" className="h-100 w-fit rounded-xl" />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-lg">{item.name}</h2>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;