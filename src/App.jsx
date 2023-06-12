import "./App.css";
import AboutCompany from "./Components/AboutCompany/AboutCompany";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SlidingText from "./Components/SlidingText/SlidingText";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";

function App() {
  return (
    <div className=" font-normal">
      <Navbar />
      <Hero />
      <AboutCompany />
      <SlidingText />
      <WhatWeDo />
    </div>
  );
}

export default App;
