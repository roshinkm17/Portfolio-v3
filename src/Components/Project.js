import React from 'react'

function Project({ title, desc, href, github }) {
  return (
    <div className="project w-full glass rounded-xl mx-1 mb-4 h-auto p-4 flex flex-col justify-around md:mx-0 md:mb-0 cursor-pointer xl:h-full">
      <div>
        <h3 className="font-bold text-gray-200 text-xl ff-poppins mb-10">{title}</h3>
      </div>
      <div>
        <p className="ff-sora text-sm text-gray-300">{desc}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
          <div>
            <a target="_blank" className="block btn px-3 py-2 rounded ff-sora text-sm font-bold" href={href}>Take a look</a>
          </div>
          <div>
            <a target="_blank" href={github}><i className="fab fa-github text-xl shadow-md github"></i></a>
          </div>
      </div>
    </div>
  )
}

export default Project
