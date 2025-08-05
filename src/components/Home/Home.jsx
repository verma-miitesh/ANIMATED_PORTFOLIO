import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { useEffect } from "react";
import miitesh from "../../assets/MV_IMAGE.png";
function Home() {
  useGSAP(()=>{
        let tl1 = gsap.timeline()
        tl1.from(".line1",{
            y:80,
            duration:1,
            opacity:0
        })
        .from(".line2",{
            y:80,
            duration:1,
            opacity:0,
        })
        .from(".line3",{
            y:80,
            duration:1,
            opacity:0,
        })
        .from(".rightHome img",{
          x:200,
          duration:0.8,
          opacity:0
        })
        // .from(".homedetails button",{
        //     y:100,
        //     duration:0.3,
        //     opacity:0,
        //     stagger: 0.3
        // })
    });
  return (
    <div id="home">
      <div className="leftHome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">MIITESH VERMA</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="rightHome">
        <img src={man} alt=""/>
      </div>
    </div>
  );
}

export default Home;
