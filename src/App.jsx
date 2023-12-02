import React from "react";
import SideBar from "./components/SideBar";
import MainBar from "./components/MainBar";
function App() {
  return (
    <div className="w-screen h-screen flex lg:flex-row flex-wrap sm:flex-column">
      <div className="lg:w-[15%] sm:w-full sm:h-full lg:h-[30%]">
        <SideBar />
      </div>
      <div className="lg:w-[85%] sm:w[100%] h-full">
        <MainBar />
      </div>
    </div>
  );
}

export default App;
