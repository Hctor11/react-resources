import Navigation from "./Navigation/Navigation";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl pt-32 pb-10 p-0 md:pt-32 text-center font-semibold">
        About this project
      </h1>
      <div className="max-w-2xl m-auto">
        <p>HI! I'm Hector, the developer of React Resources.</p>
        <br />
        <p>
          I made this project to master my skills on React Vite and also create
          a tool that could helps other React Developers on choose the right
          tools for their applications.
        </p>
        <br />
        <p>
          I really enjoy the development process of this proyect because I had
          no idea on how to store all the resources without diying in the
          process, but after thinking of a while I decided to make a .csv file
          and process it with Pandas to make the rows in JSON objects.
        </p>
        <br />
        <p>
          For the UI I used Tailwind CSS and Daisy UI, the last one is a library
          made on top of Tailwind so its basically all tailwind.
        </p>
        <br />
        <p>
          if you liked the proyect you can follow me on any of my social media
          accounts!!
        </p>
        <br />
        <Link
          to="https://github.com/Hctor11"
          target="_blank"
          className="text-slate-900 underline"
        >
          Github
        </Link>
        <br />
        <Link
          to="https://www.behance.net/hctorrivera3"
          target="_blank"
          className="text-slate-900 underline"
        >
          Behance
        </Link>
        <br />
        <Link
          to="https://www.linkedin.com/in/hectorrivera222/"
          target="_blank"
          className="text-slate-900 underline"
        >
          LinkedIn
        </Link>
        <br />
        <Link
          to="https://dribbble.com/HectorRivera222"
          target="_blank"
          className="text-slate-900 underline"
        >
          Dribbble
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
