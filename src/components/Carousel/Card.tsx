const Card = (props: {
  name: string;
  image: string;
  link: string;
  type: string;
}) => {
  return (
    <div>
      <div className="card border-2 border-slate-200 w-45 bg-base-100 mt-1 mb-10 shadow-xl transition duration-150 ease hover:opacity-80 hover:scale-[1.01]">
        <a href={props.link} target="_blank" rel="noreferrer">
          <figure>
            <img
              src={props.image}
              alt="image"
              className="h-100 w-fit rounded-2xl"
            />
          </figure>
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-lg">{props.name}</h2>
            <p
              className={`badge ${
                props.type == "Free"
                  ? "badge-accent"
                  : props.type == "Freemium"
                  ? "badge-primary"
                  : "badge-warning"
              }`}
            >
              {props.type}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
