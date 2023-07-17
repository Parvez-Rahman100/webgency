import "./App.css";
import AboutCompany from "./Components/AboutCompany/AboutCompany";
import Counter from "./Components/Counter/Counter";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import PopularServices from "./Components/PopularServices/PopularServices";
import PricePackage from "./Components/PricePackage/PricePackage";
import SlidingText from "./Components/SlidingText/SlidingText";
import SlidingTextTwo from "./Components/SlidingTextTwo/SlidingTextTwo";
import TeamMembers from "./Components/TeamMembers/TeamMembers";
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
      <SlidingTextTwo />
      <TeamMembers />
      <PricePackage />
    </div>
  );
}

export default App;
