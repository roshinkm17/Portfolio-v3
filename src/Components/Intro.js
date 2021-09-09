import React from 'react'
import ThemeBar from './ThemeBar'

function Intro({ changeBg }) {


  return (
    <div  data-aos="fade-up"  className="glass text-center flex flex-col rounded-xl w-full md:mr-1 justify-between md:mb-4 xl:flex-row xl:text-left xl:p-10">
      <div className="p-3 xl:flex xl:flex-col xl:justify-center">
        <h1 className="ff-poppins text-4xl font-bold text-gray-200 mb-8">
          Hello!
        </h1>
        <p className="ff-sora text-md w-4/6 mx-auto text-gray-300 mb-5 xl:m-0">
          I am <span className="text-red-300 font-bold text-2xl tracking-wider">Roshin</span>. I’m a creative developer trying to make some stuffs that
          look and work fantastic!
        </p>
      </div>
      <div className="sidebar bg-red-500 w-full bg-blend-darken glass px-10 py-3 lg:px-5 xl:w-20 xl:h-full xl:px-0 rounded-md">
        <ThemeBar changeBg={changeBg} />
      </div>
    </div>
  )
}

export default Intro
