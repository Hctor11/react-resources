import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
              <div className="card w-45 bg-base-100 mt-1 mb-10 shadow-xl transition duration-150 ease-in-out hover:opacity-80 hover:scale-[1.01]">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <figure>
                    <img
                      src={item.image}
                      alt="image"
                      className="h-100 w-fit rounded-xl"
                    />
                  </figure>
                  <div className="p-4 flex justify-between items-center">
                    <h2 className="text-lg">{item.name}</h2>
                    <p
                      className={`badge ${
                        item.type == "Free"
                          ? "badge-accent"
                          : item.type == "Freemium"
                          ? "badge-primary"
                          : "badge-warning"
                      }`}
                    >
                      {item.type}
                    </p>
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
