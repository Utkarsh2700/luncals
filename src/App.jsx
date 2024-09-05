import React, { useState } from "react";
import Tabs from "./Components/Tabs";
import Card from "./Components/Card";
// import "./App.css";

function App() {
  return (
    <>
      <div className=" min-h-screen  bg-[#1e1e1e]">
        <div className="inset-0 grid-background"></div>

        <div className="flex flex-col items-end justify-center">
          <Tabs />
          <div className="w-[720px] flex justify-center mr-6">
            <div className="seprator w-[612px] h-[4px] bg-black my-8"></div>
          </div>
          <Card />
          <div className="w-[720px] flex justify-center mr-6">
            <div className="seprator w-[612px] h-[4px] bg-black my-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
