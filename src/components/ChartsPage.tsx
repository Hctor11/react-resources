import STATISTICS from "../util/STATISTICS"

const ChartsPage = () => {
  return (
    <div>
        <div className="grid grid-cols-2 gap-4 ">
          {
            STATISTICS.map((item, index) => {
              return (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <figure>
                      <img src={item.image} alt="image" className="h-100 w-96" />
                    </figure>
                    <div className="card-body">
                    <h2>{item.name}</h2>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default ChartsPage