import React from 'react'
import "./About.css";
import Card from '../Card/Card';
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

function About() {
  // useGSAP(()=>{
  //   gsap.from(".circle",{
  //     x:-100,
  //     duration:1,
  //     opacity:0,
  //     ScrollTrigger:{
  //       trigger:".circle",
  //       // scroll:"body",
  //       scrub:2,
  //       markers:true,
  //       start:"top 50%",
  //       end:"top 20%" 
  //     }
  //   })
  //   .from(".line",{
  //     x:-100,
  //     duration:1,
  //     opacity:0,
  //     ScrollTrigger:{
  //       trigger:".circle",
  //       // scroll:"body",
  //       scrub:2,
  //       markers:true,
  //       start:"top 50%",
  //       end:"top 20%" 
  //     }
  //   })
  // })
  useGSAP(() => {
    // Animate .circle elements
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
        
      },
    });

    // Animate .line elements
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
        
      },
    });

    // Animate headings in aboutdetails
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 3,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
        
      },
    });

    // Animate list items
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 3,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
        
      },
    });

    // Animate cards on the right
    gsap.from(".rightabout", {
      x: 100,
      duration: 3,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
        
      },
    });
  });


  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : MIITESH VERMA
              </li>
              <li>
                <span>AGE</span> : 20 YEARS
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : ENGLISH, HINDI
              </li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B-TECH
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 8.1
              </li>
            </ul>
          </div>

          <div className="skill">
            <h1>Skills</h1>
            <ul>
              <li>
                MERN STACK
              </li>
              <li>
                JAVA
              </li>
              <li>
                MY SQL
              </li>
              <li>
                BOOTSTRAP
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="JAVA" image={java} />
        <Card title="MY SQL" image={dsa} />
      </div>
    </div>
  )
}

export default About