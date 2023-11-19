import "./App.css";
import "./components/Styles/Styles.sass";
import Navigation from "./components/Navigation/Navigation";
import ButtonCollection from "./components/Buttons/ButtonCollection";
import gradient from "/gradient.svg";

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
    </>
  );
}

export default App;
