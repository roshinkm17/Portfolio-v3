import React from 'react';
import bgimage1 from "../images/image-1.jpg"
import bgimage4 from "../images/image-4.jpg"
import bgimage5 from "../images/image-5.jpg"
import bgimage6 from "../images/image-6.jpg"

function ThemeBar({changeBg}) {
  return (
    <div className="p-2 text-center">
      <div className="flex justify-around w-full xl:flex-col items-center">
        <img src={bgimage1} alt="" onClick={()=> changeBg(bgimage1)}  className="h-7 rounded-3xl w-7 cursor-pointer shadow-md xl:mb-2"/>
        <img src={bgimage4} alt="" onClick={()=> changeBg(bgimage4)}  className="h-7 rounded-3xl w-7 cursor-pointer shadow-md xl:mb-2"/>
        <img src={bgimage5} alt="" onClick={()=> changeBg(bgimage5)}  className="h-7 rounded-3xl w-7 cursor-pointer shadow-md xl:mb-2"/>
        <img src={bgimage6} alt="" onClick={()=> changeBg(bgimage6)}  className="h-7 rounded-3xl w-7 cursor-pointer shadow-md xl:mb-2"/>
      </div>
    </div>
  )
}

export default ThemeBar
