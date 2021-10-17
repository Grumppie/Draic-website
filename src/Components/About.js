import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import "./about.css"
import Logo from "../assets/Logo.jpg"
import Tlogo from "../assets/Draic-transperant.png"
import moon from "../assets/moon.svg"
import robot from "../assets/robot.svg"
import rocket from "../assets/rocket.svg"
import React from 'react'

const About = () => {
    return (
        <div>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
                        <div className="about-header">
                            <h1 className="title"><span>DR</span>AIC</h1>
                            <h1 className="sub-title">About  <span>US</span></h1>
                            <img src={Tlogo} alt="" />
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={batch(Fade(), MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}>
                        <div className="about-intro box">
                            <h1 className="title">Who Are We ?</h1>
                            <div className="container">

                                <p className="text">{"D. Y. Patil Robotics & AI Club is a group of highly dedicated individuals, from all engineering disciplines, working passionately in the field of Robotics & AI to take the college (DYPCOE, Pune) to new heights in this field. The Club focuses on the development of students through working on various robotic projects and also participating in National as well as International level Competitions."}</p>

                                <img src={Logo} alt="draic-logo" />
                            </div>
                            <i class="fas fa-question question-mark"></i>

                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={batch(Sticky(), FadeIn(), Fade(), MoveIn(0, 1000), MoveOut(0, -1000))}>
                        <div className="about-vision box">
                            <h1 className="title"> Vision </h1>
                            <div className="container">
                                <p className="text">
                                    {"To achieve an excellence in the field of robotics and AI, Thus contributing towards the development of the nation."}
                                </p>
                                <div className="img">
                                    <img src={robot} alt="" />
                                </div>
                            </div>
                            <i class="fas fa-eye eye"></i>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <Animator animation={batch(StickyIn(), FadeIn(), MoveIn(0, 1000), MoveOut(0, -1000))}>
                        <div className="about-mission box">
                            <h1 className="title"> Mission </h1>
                            <div className="container">
                                <p className="text">
                                    {"Team DRAIC seeks to inspire the next generation of bright minds, to cultivate an appreciation for the present technology and develop a cognitive thinking towards the solutions to present scenario by engaging in competition and building innovative projects."}
                                </p>
                                <div className="img">
                                    <img src={moon} alt="" />
                                </div>
                            </div>
                            <div className="rocket">
                                <img src={rocket} alt="" />
                            </div>

                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
    )
}

export default About
