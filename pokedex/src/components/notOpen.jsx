import React, { useState } from "react";
import Open from "./Open";
import openBtn from "../assets/openbtn.png";
import pokedexLogo from "../assets/pokedex_logo.png";

const NotOpen = () => {

    const [ isPokedexOpen, setIsPokedexOpen ] = useState(false);

    const clickArrowButton = () => !isPokedexOpen;

    return (
        <>
        {!isPokedexOpen ? (
            <div className="h-[600px] w-[500px] bg-[#DC0A2D] border-4 border-[#99061F] rounded-l-3xl relative flex overflow-hidden ">
                <div className="h-[70px] w-[70px] bg-blue-600 absolute rounded-full shadow-lg border-[5px] border-white top-6 left-5 animate-[colorBlue_1s_ease-in-out_infinite]"></div>
                <div className="flex align-middle justify-center gap-2 absolute top-7 left-[110px]">
                    <div className="h-[20px] w-[20px] bg-red-500 rounded-full border-2 animate-[colorRed_1s_ease-in-out_infinite]"></div>
                    <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full border-2 animate-[colorYellow_1s_ease-in-out_infinite]"></div>
                    <div className="h-[20px] w-[20px] bg-green-600 rounded-full border-2 animate-[colorGreen_1s_ease-in-out_infinite]"></div>
                </div>
                <div className="h-[446px] w-[300px] bg-transparent border-4 border-[#99061F] absolute top-[120px] border-x-0 border-b-0">
                </div>
                <div className="h-[480px] w-[100px] bg-transparent border-4 border-[#99061F] absolute top-[63.5px] left-[411.5px] border-x-0 border-b-0 rotate-[-30deg]">
                </div>
                <div className="h-[480px] w-[110px] bg-transparent border-4 border-[#99061F] absolute top-[70.5px] left-[384px] border-x-0 border-b-0">
                </div>
                <img src={openBtn} className="h-[40px] absolute top-[300px] left-4 cursor-pointer active:scale-90" alt="Open Button"/>
                <div className="flex-col align-middle justify-center absolute top-[550px] left-[105px]">
                    <div className="h-[5px] w-[250px] bg-red-900 rounded mb-1"></div>
                    <div className="h-[5px] w-[250px] bg-red-900 rounded"></div>
                </div>
                <div className="flex-col h-[521px] w-[50px] absolute top-[74.5px] left-[446px]">
                    <div className="h-[70px] w-[50px] bg-[#D40230] border-2 border-t-0 border-[#99061F]"></div>
                    <div className="h-[5px] w-[50px] border-l-2 border-[#99061F]">
                    </div>
                    <div className="h-[370px] w-[50px] bg-[#D40230] border-2 border-[#99061F]">
                    </div>
                    <div className="h-[5px] w-[50px] border-l-2 border-[#99061F]">
                    </div>
                    <div className="h-[70px] w-[50px] bg-[#D40230] border-2 border-b-0 border-[#99061F]">
                    </div>
                </div>
                <img src={pokedexLogo} alt="Pokedex Logo" className="h-[100px] w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            </div> ) : <Open />}
        </>
    )
}

export default NotOpen;