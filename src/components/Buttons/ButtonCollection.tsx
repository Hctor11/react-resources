import Buttons from "./Buttons"

const ButtonCollection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mx-auto my-5">
        <Buttons name="UI Components" section="components" color="btn-primary"/>
        <Buttons name="3D tools" section="tools" color="btn-secondary"/>
        <Buttons name="Animations" section="animations" color="btn-info"/>
        <Buttons name="Charts" section="charts" color="btn-accent"/>
        <Buttons name="Icons" section="icons" color="btn-warning"/>
    </div>
  )
}

export default ButtonCollection