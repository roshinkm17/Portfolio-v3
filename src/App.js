import './App.css'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import ThemeBar from './Components/ThemeBar'
import { useEffect, useState } from 'react'
import bgimage1 from "./images/image-5.jpg"
import Aos from 'aos'


function App() {

  const [bgImage, setBgImage] = useState(bgimage1);
  const changeBg = (bg) => {
    setBgImage(bg);
  };

  function setAos(){
    Aos.init({duration:2000});
  }

  setAos();

  return (
    <div style={{backgroundImage:`url(${bgImage})`}} className="App flex flex-col px-2 py-4 lg:flex-row xl:py-4 xl:px-10 xl:justify-center xl:items-center">
      <div className="md:flex lg:flex-col lg:mr-2 xl:w-full xl:mr-10" >
        <Intro changeBg={changeBg} />
        <Skills />
      </div>
      <div  className="projects mr-auto">
        <Projects />
      </div>
    </div>
  )
}

export default App
