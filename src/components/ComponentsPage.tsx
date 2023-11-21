import Navigation from "./Navigation/Navigation";
import Buttons from "./Buttons/Buttons";
import UICOMPONENTS from "../util/UICOMPONENTS";
import Grid from "./Grid/Grid";
import Footer from "./Footer/Footer";

const ComponentsPage = () => {
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl pt-32 p-0 md:pt-32 text-center font-semibold">
        UI Components
      </h1>
      <div className="flex flex-wrap justify-center gap-2 mx-auto my-5">
        <Buttons
          name="UI Components"
          section="components"
          color="btn-disabled"
        />
        <Buttons name="3D tools" section="tools" color="" />
        <Buttons name="Animations" section="animations" color="" />
        <Buttons name="Charts" section="charts" color="" />
        <Buttons name="Icons" section="icons" color="" />
      </div>
      <main>
        <Grid Content={UICOMPONENTS} />
      </main>
      <Footer/>
    </div>
  );
};

export default ComponentsPage;
