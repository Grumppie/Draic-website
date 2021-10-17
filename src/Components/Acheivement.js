import React from 'react'
import "./acheivement.css"

const Achievement = () => {
    return (
        <div className="achievemnet">
            <div>
                <br />
                <h1 style={{ fontStyle: 'oblique', fontSize: '40px' }}>** ACHIEVEMENTS 2019-20 **</h1>
                <br />
                <div className="lol">
                    <div className="box">
                        <div className="con" id="pic1">
                            <img src="https://draicdypcoe.netlify.app/img/ach1a.webp  " />
                        </div>
                        <div className="con" id="para">
                            <p>1. Second Runner-up at Innovate for Smart Pimpri Chinchwad, innovation Challenge organised by PCSCL, PCMC &amp; PCCOE, Pune.
                                Team Members: Shreyash Choppawar, Amit Prasad, Vedansh Shrivastav
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="con" id="para1">
                            <p>2. First and Second Position at Techtatva Electronics Competition Organised by EnTC Dept, DYPCOE, Pune.
                                Team Member: Sagar Warungase, Samiksha Bhokare, Dibyanshu Sharma </p>
                        </div>
                        <div className="con" id="pic2">
                            <img src="https://draicdypcoe.netlify.app/img/ach1b.webp  " />
                        </div>
                    </div>
                    <div className="box">
                        <div className="con" id="pic3">
                            <img src="https://draicdypcoe.netlify.app/img/ach1c.webp " />
                        </div>
                        <div className="con" id="para">
                            <p>3. Second Runner-up at COEP Mindspark-19 Search &amp; Destroy, organised by COEP, Pune.
                                Team Members: Arvind Patel</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="con" id="para1">
                            <p>4. First Position at Bro Code &amp; Code Capture Competition organised by PCCOE, Ravet.
                                Team Members: Arvind Patel </p>
                        </div>
                        <div className="con" id="pic4">
                            <img src="https://draicdypcoe.netlify.app/img/ach1d.png " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement
