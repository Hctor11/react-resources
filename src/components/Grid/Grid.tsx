import Card from "../Carousel/Card";

const Grid = (props: {
  Content: { name: string; image: string; link: string; type: string }[];
}) => {
  return (
    <>
      <div className="grid-cols-1 grid md:grid-cols-3 m-10">
        {props.Content.map((item) => {
          return (
            <div className=" p-4">
              <Card
                name={item.name}
                image={item.image}
                link={item.link}
                type={item.type}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
