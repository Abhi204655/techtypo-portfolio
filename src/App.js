import React from 'react';
import './App.scss';
import About from './Components/About';
import Intro from './Components/Intro';
import Project from './Components/Project';
import Navbar from './Components/navbar';
import Backdrop1 from './Assets/img1.png';
import Backdrop2 from './Assets/img2.png';
// import Backdrop from './Assets/backdrop.png';

function App() {
  return (
    <div className="App">
      <div className="intro-section" id="home">
        <div className="backdrop">
          <img src={Backdrop1} alt="backdrop 1" />
        </div>
        <Navbar />
        <Intro />
      </div>
      <div className="about-section" id="about">
        <div className="backdrop">
          <img src={Backdrop2} alt="backdrop 2" />
        </div>
        <About />
      </div>
      <div className="project-section" id="project">
        {/* <div className="backdrop">
          <img src={Backdrop} alt="backdrop" />
        </div> */}
        <Project />
      </div>
    </div>
  );
}

export default App;
