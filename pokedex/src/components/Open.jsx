import React from "react";
import NotOpen from "./notOpen";

export default function Open(isPokedexOpen) {



  return (
    <>
      {isPokedexOpen ? (
        <div className="flex items-end">
          <div className="h-[600px] w-[500px] bg-[#DC0A2D] border-4 border-[#99061F] rounded-l-3xl relative flex overflow-hidden ">

          </div>
          <div className="h-[480px] w-[500px] bg-[#DC0A2D]">

          </div>
        </div>
      ) : <NotOpen /> 
      }
    </>
  )
}