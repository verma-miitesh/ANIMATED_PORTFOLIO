import React, { useRef } from 'react'
import "./Nav.css";
import {Link} from "react-scroll";
// import {useGsap} from "@gsap/react";
import { useEffect } from 'react';

import gsap from "gsap";

function Nav() {
    let menu=useRef();
    let mobile=useRef();

    useEffect(()=>{
        let tl = gsap.timeline()
        tl.to("nav h1",{
            y:0,
            duration:1,
            opacity:1
        })
        tl.to(".menu-item",{
            y:0,
            duration:1,
            opacity:1,
            stagger:0.5
        });
    },[]);
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to='home' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">Home</li></Link>
            <Link to='about' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">About</li></Link>
            <Link to='projects' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">Projects</li></Link>
            <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">Contact</li></Link>
        </ul>
        <div className="hamburger" ref={menu} onClick={()=>{
            mobile.current.classList.toggle("activemobile")
            menu.current.classList.toggle("activeham")
        }}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>
        <ul className='mobilemenu' ref={mobile}>
            <Link to='home' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">Home</li></Link>
            <Link to='about' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">About</li></Link>
            <Link to='projects' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">Projects</li></Link>
            <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500}><li className="menu-item">Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Nav