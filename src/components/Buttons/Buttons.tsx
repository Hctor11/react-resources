import { Link } from "react-router-dom"

const Buttons = (props: { name: string, section: string, color: string }) => {
  return (
    <div>
        <Link to={`/${props.section}`} className={`btn btn-sm font-medium rounded-full btn-outline border-[2px] ${props.color}`}>
            {props.name}
        </Link>
    </div>
  )
}

export default Buttons