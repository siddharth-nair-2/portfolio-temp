import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <ContactForm />
    </div>
  );
}

export default App;
