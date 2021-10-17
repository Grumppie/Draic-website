import React from 'react'
import Logo from "../assets/IMG-20211014-WA0032.jpg";
import "./contact.css"

const contact = () => {
    return (
        <>
            <div className="contact">
                <div className="styles container">
                    <div className="heading">
                        <h1 style={{ textAlign: 'center' }}>Get in touch with us</h1>
                        <img src={Logo} height="100px" width="100px" alt="" />
                    </div>
                    <hr />
                    <form>
                        <div className="Name">
                            <label htmlFor="name"><b>Enter your full name : </b></label>
                            <input type="text" id="name" name="Name" />
                        </div>
                        <br /><br />
                        <div className="email">
                            <label htmlFor="mail"><b>Enter your E-mail : </b></label>
                            <input type="email" id="mail" name="Mail" />
                        </div>
                        <br /><br />
                        <div className="gender">
                            <b>Gender:</b><br /><br /><input type="radio" name="Gender" />Male<br /><input type="radio" name="Female" />Female
                        </div>
                        <br /><br />
                        <div className="choice">
                            <b>Which rating would you like to give to our website ?</b><br /><br /><input type="radio" name="good" />Good<br /><input type="radio" name="better" />Better<br /><input type="radio" name="best" />Best
                        </div>
                        <br /><br />
                        <div className="input">
                            <label htmlFor="rating"><b>Please specify the points you liked about our website : </b></label><br /><br />
                            <textarea col={200} rows={5} id="rating" defaultValue={""} />
                        </div>
                        <br /><br />
                        <div className="education">
                            <label htmlFor="edu"><b>Enter your education : </b></label>
                            <input type="text" id="edu" name="Edu" />
                        </div>
                        <br /><br />
                        <div className="joinus">
                            <label htmlFor="join"><b>Do you want to join DRAIC if yes please specify here your skills and the reson for joining us  : </b></label><br /><br />
                            <textarea col={200} rows={5} id="join" defaultValue={""} />
                        </div>
                        <br /><br />
                        <div className="button">
                            <div className="submit">
                                <input type="submit" defaultValue="Submit form" />
                            </div>
                            <div className="reset">
                                <input type="reset" defaultValue="Reset form" />
                            </div>
                        </div>
                        <br /><br />
                    </form>
                </div>
            </div>
        </>
    )
}

export default contact
