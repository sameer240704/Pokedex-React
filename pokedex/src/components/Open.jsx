import React from "react";
import NotOpen from "./notOpen";

export default function Open(isPokedexOpen) {
  return (
    <>
      {isPokedexOpen ? (
        <div className="flex items-end relative">
          <div className="h-[70px] w-[70px] bg-blue-600 absolute rounded-full shadow-lg border-[5px] border-white top-6 left-5 animate-[colorBlue_1s_ease-in-out_infinite] z-10"></div>
          <div className="flex align-middle justify-center gap-2 absolute top-7 left-[110px] z-10">
            <div className="h-[20px] w-[20px] bg-red-500 rounded-full border-2 animate-[colorRed_1s_ease-in-out_infinite]"></div>
            <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full border-2 animate-[colorYellow_1s_ease-in-out_infinite]"></div>
            <div className="h-[20px] w-[20px] bg-green-600 rounded-full border-2 animate-[colorGreen_1s_ease-in-out_infinite]"></div>
          </div>
          <div className="h-[600px] w-[500px] bg-[#DC0A2D] border-4 border-[#99061F] rounded-l-3xl relative flex overflow-hidden ">
            <div className="h-[446px] w-[300px] bg-transparent border-4 border-[#99061F] absolute top-[120px] border-x-0 border-b-0">
            </div>
            <div className="h-[480px] w-[100px] bg-transparent border-4 border-[#99061F] absolute top-[63.5px] left-[411.5px] border-x-0 border-b-0 rotate-[-30deg]">
            </div>
            <div className="h-[480px] w-[110px] bg-transparent border-4 border-[#99061F] absolute top-[70.5px] left-[384px] border-x-0 border-b-0">
            </div>
          </div>
          <div className="h-[475px] w-[500px] bg-[#DC0A2D] border-4 border-t-0 border-l-0 border-[#99061F] rounded-br-3xl">
            <div className="h-[480px] w-[110px] border-4 border-[#99061F] bg-[#DC0A2D] absolute top-[74.5px] left-[500px] border-x-0 border-b-0">
            </div>
            <div className="h-[50px] w-[100px] bg-[#DC0A2D] border-4 border-[#99061F] absolute top-[96px] left-[591.5px] border-x-0 border-b-0 rotate-[30deg]">
            </div>
            <div className="h-[446px] w-[304px] bg-transparent border-4 border-[#99061F] absolute top-[124px] left-[694px] border-x-0 border-b-0">
            </div>
          </div>
          <div className="flex-col h-[521px] w-[50px] absolute top-[74.5px] left-[470px]">
            <div className="h-[70px] w-[50px] bg-[#D40230] border-2 border-[#99061F]"></div>
            <div className="h-[5px] w-[50px] bg-[#DC0A2D] border-l-2 border-r-2 border-[#99061F]">
            </div>
            <div className="h-[370px] w-[50px] bg-[#D40230] border-2 border-[#99061F]">
            </div>
            <div className="h-[5px] w-[50px] bg-[#DC0A2D] border-l-2 border-r-2 border-[#99061F]">
            </div>
            <div className="h-[71.5px] w-[50px] bg-[#D40230] border-2 border-b-0 border-[#99061F]">
            </div>
          </div>
        </div>
      ) : <NotOpen /> 
      }
    </>
  )
}