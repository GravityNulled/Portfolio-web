import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Hero />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;