import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const CarouselLinked = (props: {
  content: { name: string; image: string; link: string; type: string }[];
  page: string;
  title: string;
}) => {
  return (
    <div>
      <Link to={props.page}>
        <h3 className="text-3xl font-bold underline p-52 text-center">
            {props.title}
        </h3>
      </Link>
      <Carousel content={props.content} />
    </div>
  );
};

export default CarouselLinked;
