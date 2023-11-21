import "./App.css";
import "./components/Styles/Styles.sass";
import Navigation from "./components/Navigation/Navigation";
import ButtonCollection from "./components/Buttons/ButtonCollection";
import gradient from "/gradient.svg";
import CarouselLinked from "./components/Carousel/CarouselLinked";
import Footer from "./components/Footer/Footer";

import ICONS from "./util/ICONS";
import UICOMPONENTS from "./util/UICOMPONENTS";
import ANIMATION from "./util/ANIMATION";
import TOOLS3D from "./util/3DTOOLS";
import STATISTICS from "./util/STATISTICS";

function App() {
  return (
    <>
      <img src={gradient} alt="ss" className="fixed" />
      <header className="relative z-10">
        <Navigation />
        <h1 className="text-3xl pt-32 p-0 md:pt-52 text-center font-semibold">
          The Best React Resources in One Place
        </h1>
        <ButtonCollection />
      </header>

      <CarouselLinked
        content={UICOMPONENTS}
        title="UI Components"
        page="/components"
      />
      <CarouselLinked content={ICONS} title="Icons" page="/components" />
      <CarouselLinked content={STATISTICS} title="Charts" page="/components" />
      <CarouselLinked
        content={ANIMATION}
        title="Animations"
        page="/components"
      />
      <CarouselLinked content={TOOLS3D} title="3D Tools" page="/components" />
      <Footer/>
    </>
  );
}

export default App;
