import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "./Card";

const Carousel = (props: {
  content: { name: string; image: string; link: string; type: string }[];
}) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="my-5">
      <Swiper
        slidesPerView={screenSize.width < 500 ? 1 : (screenSize.width < 550 && screenSize.width > 500) ? 2 : 3}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.content.map((item) => {
          return (
            <SwiperSlide key={item.name}>
              <Card
                name={item.name}
                image={item.image}
                link={item.link}
                type={item.type}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
