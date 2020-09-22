import React from 'react'
import './about.scss';
import Avatar from '../../Assets/avatar275.png';
import { GrGithub, GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";

function About() {
    return (
        <div className="about">
            <div className="about-avatar" data-aos="fade-down-right" data-aos-duration="1000">
                <img src={Avatar} alt="avatar" />
            </div>
            <div className="about-desc" data-aos="fade-down-left" data-aos-duration="1000">
                <h2>About me</h2>
                <p>Hey, my name is Abhi Kumar and I am <strong>Passionate Developer</strong>.</p> <br />
                <p>I am Full-Stack developer and I code to create solutions that make a difference. Besides, I am a Competitive Programmer and 5-star holder at Problem Solving on HackerRank. I like to work toward a cause that's greater than myself. I'm always exploring new possibilities and building solutions that bring me fulfilment.</p>
                <div className="social-links">
                    <a href="https://github.com/Abhi204655" target="_blank" rel="noopener noreferrer"><GrGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/ahrefabhi/" target="_blank" rel="noopener noreferrer"><GrLinkedin size={30} /></a>
                    <a href="https://www.instagram.com/abhi_kr15/" target="_blank" rel="noopener noreferrer"><GrInstagram size={30} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100027669450813" target="_blank" rel="noopener noreferrer"><GrFacebook size={30} /></a>
                </div>
            </div>
        </div>
    )
}

export default About
