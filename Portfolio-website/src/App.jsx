import { useState } from "react";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Hero />
      <Brands/>
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
