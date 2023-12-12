import { BrowserRouter } from "react-router-dom";
import "./index.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Socials,
} from "./components";

const App = () => {
  return (
    // z-0
    <BrowserRouter>
      <div className="relative bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>

      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Socials />
      </div>
    </BrowserRouter>
  );
};

export default App;
