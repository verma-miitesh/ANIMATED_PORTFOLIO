import React from 'react'
import Card from '../Card/Card'
import "./Projects.css";
import va from "../../assets/va.png";
import linkedln from "../../assets/linkedln_image.jpeg";
import thinkstrom from "../../assets/thinkstrom_image.png";
import weather from "../../assets/weather_app_image.png";
import simon from "../../assets/simon_says_game_image.jpg";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)


function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger: {
        trigger: "#para",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
        
    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger: {
        trigger: ".slider",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      
    }
  })
})

  return (
    <div id="projects">
        <h1 id='para'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
            <Card title="LINKEDLN CLONE" image={linkedln}/>
            <Card title="THINK-STROM" image={thinkstrom}/>
            <Card title="WEATHER APP" image={weather}/>
            <Card title='AI CHAT BOT WITH VOICE COMMAND' image={va}/>
            <Card title='SIMON SAY GAME' image={simon}/>
        </div>
    </div>
  )
}

export default Projects