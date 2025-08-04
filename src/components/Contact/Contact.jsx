import React from 'react'
import "./Contact.css";
import contact from "../../assets/contact.png"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
      },
    });
    gsap.from("form", {
      x: 100,
      duration: 0.5,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "form",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
      },
    });
  })
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contact} alt=''/>
      </div>
      <div className="rightcontact">
        <form action='https://formspree.io/f/mldlwzbw' method='POST'>
            <input name='Username' type='text'placeholder='Name'/>
            <input name='Email' type='email' placeholder='Email'/>
            <textarea name='message' id='textarea' placeholder='Message Me'></textarea>
            <input type='submit' id='btn' value='Submit'/>
        </form>
      </div>
    </div>
  )
}

export default Contact