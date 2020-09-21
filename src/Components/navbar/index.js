import React, { useState } from 'react'
import Abhi from '../elements/Abhi';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import './navbar.scss';

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header>
            <Abhi />
            <div className="nav-opener">
                <GiHamburgerMenu id="open-icon" size={30} onClick={() => setOpen(!open)} />
            </div>

            <nav className={open ? 'nav-bar-open' : null}>
                <div className="nav-closer">
                    <AiOutlineClose id="close-icon" size={30} color="white" onClick={() => setOpen(!open)} />
                </div>

                <ul>
                    <li>
                        <a href="#home" onClick={() => setOpen(!open)}>
                            <h3>Home</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor.</p>
                        </a>
                    </li>

                    <li>
                        <a href="#about" onClick={() => setOpen(!open)}>
                            <h3>About</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor.</p>
                        </a>
                    </li>

                    <li>
                        <a href="#project" onClick={() => setOpen(!open)}>
                            <h3>Projects</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor.</p>
                        </a>
                    </li>

                    <li>
                        <a href="#about" onClick={() => setOpen(!open)}>
                            <h3>Login</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor.</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar;