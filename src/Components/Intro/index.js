import React from 'react'
import ReactRotatingText from 'react-rotating-text';
import './intro.scss';

function Intro() {

    return (
        <div className="intro">
            <p className="intro-name">Hi, My name is Abhi Kumar</p>
            <h3>I am a MERN stack Developer</h3>
            <h4>I code in <ReactRotatingText items={['JavaScript', 'Python', 'C++', 'Node Js', 'React Js']} /></h4>
            <a id="cta" href="!#" rel="noopener noreferrer">Download My Resume</a>
            <div className="scroller"><p>|</p></div>

        </div>
    )
}

export default Intro
