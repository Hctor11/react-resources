import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const CarouselLinked = (props: {
  content: { name: string; image: string; link: string; type: string }[];
  page: string;
  title: string;
}) => {
  return (
    <div className="mt-20">
      <Link to={props.page} target="_blank" rel="noreferrer">
        <p className="text-2xl font-bold underline m-10 mt-20 inline text-left">
            {props.title}
        </p>
      </Link>
      <Carousel content={props.content} />
    </div>
  );
};

export default CarouselLinked;
