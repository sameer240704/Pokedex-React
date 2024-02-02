import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-lvh w-screen bg-[url('/assets/background-image.jpg')] bg-center bg-cover bg-no-repeat">
      {isOpen ? (
        <div className="h-[500px] w-[500px] bg-red-700">
          <div>Hello World</div>
        </div>
      ) : null}
    </div>
  );
}
