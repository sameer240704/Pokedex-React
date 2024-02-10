import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-lvh w-screen bg-[url('/assets/background-image.jpg')] bg-center bg-cover bg-no-repeat flex items-center justify-center">
      {!isOpen ? (
        <div className="h-[600px] w-[500px] bg-[#DC0A2D] border-4 border-[#99061F] rounded-3xl relative flex">
          <div className="h-[446px] w-[300px] bg-transparent border-4 border-[#99061F] absolute top-[120px] border-x-0 border-b-0">
          </div>
          <div className="h-[480px] w-[100px] bg-transparent border-4 border-[#99061F] absolute top-[63.5px] left-[411.5px] border-x-0 border-b-0 rotate-[-30deg]"></div>
          <div className="h-[480px] w-[110px] bg-transparent border-4 border-[#99061F] absolute top-[70.5px] left-[384px] border-x-0 border-b-0"></div>
        </div>
      ) : null}
    </div>
  );
}
