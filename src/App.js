import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
