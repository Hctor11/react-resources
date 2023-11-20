import Buttons from "./Buttons"
import '../Styles/Styles.sass'

const ButtonCollection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mx-auto my-5">
        <Buttons name="UI Components" section="components" color=""/>
        <Buttons name="3D tools" section="tools" color=""/>
        <Buttons name="Animations" section="animations" color=""/>
        <Buttons name="Charts" section="charts" color=""/>
        <Buttons name="Icons" section="icons" color=""/>
    </div>
  )
}

export default ButtonCollection