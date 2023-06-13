import "./App.css";
import AboutCompany from "./Components/AboutCompany/AboutCompany";
import Counter from "./Components/Counter/Counter";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import PopularServices from "./Components/PopularServices/PopularServices";
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
      <Counter />
      <PopularServices />
    </div>
  );
}

export default App;
