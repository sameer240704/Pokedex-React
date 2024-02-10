import React, { useState, useEffect } from "react";
import NotOpen from "./components/notOpen";
import Open from "./components/Open";
import "./styles.css";

export default function App() {
  return (
    <div className="h-lvh w-screen bg-[url('./assets/background-image.jpg')] bg-center bg-cover bg-no-repeat flex items-center justify-center">
        <NotOpen />
    </div>
  );
}
