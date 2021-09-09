import React from 'react'
import Skill from './Skill'
import Profiles from './Profiles'

function Skills() {
  return (
    <div className="glass rounded-xl mt-4 flex flex-col text-center mb-4 md:mt-0 md:ml-1 xl:text-left xl:pt-5">
      <div className="p-3 xl:px-10">
        <h1 className="text-4xl ff-poppins text-gray-200 font-bold mb-5">
          Skills
        </h1>
        <div className="flex flex-wrap items-center justify-center mb-3 xl:justify-start">
          <Skill title="JavaScript" />
          <Skill title="Python" />
          <Skill title="HTML5" />
          <Skill title="CSS3" />
          <Skill title="Flutter" />
          <Skill title="ReactJS" />
          <Skill title="NodeJS" />
          <Skill title="MongoDB" />
          <Skill title="Firebase" />
          <Skill title="SQL" />
        </div>
      </div>
      <div className="sidebar w-full bg-blend-darken px-10 py-3">
        <Profiles />
      </div>
    </div>
  )
}

export default Skills
