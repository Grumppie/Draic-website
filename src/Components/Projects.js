import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import "./projects.css"
import P1 from "../assets/project1.webp"
import P2 from "../assets/project2.webp"
import P3 from "../assets/project3.webp"
import Tlogo from "../assets/Draic-transperant.png"
import moon from "../assets/moon.svg"
import robot from "../assets/robot.svg"
import rocket from "../assets/rocket.svg"
import React from 'react'

const Projects = () => {
    return (
        <div>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
                        <div className="header box">
                            <h1 className="title"><span>DR</span>AIC</h1>
                            <h1 className="sub-title">PRO<span>JECTS</span></h1>
                            <img src={Tlogo} alt="" />
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={batch(Fade(), MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}>
                        <div className="intro box">
                            <h1 className="title">Autonomous Quadrupled Robot</h1>
                            <div className="container">

                                <p className="text1">{"Development of 3D Printed Autonomous four-legged robot with Servo Motors for actuation."}</p>

                                <img src={P1} alt="draic-logo" className="img1" />
                            </div>

                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={batch(Sticky(), FadeIn(), Fade(), MoveIn(0, 1000), MoveOut(0, -1000))}>
                    <div className="intro-r box ">
                            <h1 className="title">Customized 3D Printer</h1>
                            <div className="container">

                                <p className="text1">{"Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources."}</p>

                                <img src={P2} alt="draic-logo" />
                            </div>

                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <Animator animation={batch(StickyIn(), FadeIn(), MoveIn(0, 1000), MoveOut(0, -1000))}>
                    <div className="intro box">
                            <h1 className="title">Autonomous Path Finder Robot</h1>
                            <div className="container">

                                <p className="text1">{"Made an Autonomous Obstacle avoider and Path finder robot with Omni Wheel drive and Ultrasonic Sensor."}</p>

                                <img src={P3} alt="draic-logo" />
                            </div>

                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
    )
}

export default Projects
