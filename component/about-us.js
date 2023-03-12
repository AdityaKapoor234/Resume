/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

export default function AboutUsComponent(props) {
    const [theme, setTheme] = useState(props?.layoutTheme);

    useEffect(() => {
        setTheme(props?.layoutTheme);
    }, [props]);

    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="aboutUs" id="about">
                    <div className="row smallMobNotVisi">
                        <div className="col-md-6 col-5 d-flex justify-content-end align-items-center">
                            <img src="/images/aditya_kapoor3.jpg" className="aboutUsImg" alt="" />
                        </div>
                        <div className="col-md-6 col-7 aboutUsDiv">
                            <div>
                                <div className="aboutUsDivHead">
                                    <span className="textHighlight">About</span>&nbsp;Me
                                </div>
                                <div className="aboutUsDivText">
                                    Hello I'm <span className="textHighlight">Aditya</span>&nbsp;Kapoor
                                </div>
                                <div className="aboutUsDivDescription">
                                    I am from Delhi, India & currently working as a Software Engineer since Jan 2022. I have completed my Post Graduation in Master of Computer Applications (MCA) from Galgotias University, Greater Noida.<br /><br />
                                    Web Development & Data Structures and Algorithms are My Strong Skill.<br />
                                    I have been doing Web Development from Quite a Few Years<br /><br />

                                    {/* & I can work on several technologies such as:<br />
                                    <ol>
                                        <li>React JS</li>
                                        <li>Next JS</li>
                                        <li>Node JS</li>
                                        <li>Java</li>
                                        <li>Java Script</li>
                                        <li>AJAX</li>
                                        <li>C/C++</li>
                                        <li>Git</li>
                                        <li>Bootstrap</li>
                                        <li>Material UI</li>
                                        <li>HTML5</li>
                                        <li>CSS</li>
                                        <li>SASS</li>
                                        <li>Object Oriented Programming (OOPs)</li>
                                        <li>Netbeans</li>
                                        <li>JDBC</li>
                                        <li>Xampp Database</li>
                                    </ol> */}

                                    I believe there is always a room for learning something new every day from everyone.
                                    Knowledge is Endless.
                                    So, it's better to always keep learning as many new things as possible

                                </div>
                                <div className="aboutUsDivCircleLinks">
                                    <i className="fa-brands fa-linkedin aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://www.linkedin.com/in/aditya-kapoor-sde/") }}></i>
                                    <i className="fa-brands fa-hackerrank aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://www.hackerrank.com/AdityaKapoor") }}></i>
                                    <i className="cib-hackerearth aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://www.hackerearth.com/@kapoorabhay234.ak") }}></i>
                                    <i className="fa-brands fa-github aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://github.com/AdityaKapoor234") }}></i>
                                    <i className="fa-brands fa-square-gitlab aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://gitlab.com/AdityaKapoor234") }}></i>
                                    <i className="fa-brands fa-skype aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://join.skype.com/invite/xfsgvtKEHaAT") }}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="smallMobVisi">
                        <div>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="/images/aditya_kapoor3.jpg" className="aboutUsImg" alt="" />
                            </div>
                            <div className="aboutUsDiv">
                                <div>
                                    <div className="aboutUsDivHead">
                                        <span className="textHighlight">About</span>&nbsp;Me
                                    </div>
                                    <div className="aboutUsDivText">
                                        Hello I'm <span className="textHighlight">Aditya</span>&nbsp;Kapoor
                                    </div>
                                    <div className="aboutUsDivDescription">
                                        I am from Delhi, India & currently working as a Software Engineer since Jan 2022. I have completed my Post Graduation in Master of Computer Applications (MCA) from Galgotias University, Greater Noida.<br /><br />
                                        Web Development & Data Structures and Algorithms are My Strong Skill.<br />
                                        I have been doing Web Development from Quite a Few Years<br /><br />

                                        {/* & I can work on several technologies such as:<br />
                                        <ol>
                                            <li>React JS</li>
                                            <li>Next JS</li>
                                            <li>Node JS</li>
                                            <li>Java</li>
                                            <li>Java Script</li>
                                            <li>AJAX</li>
                                            <li>C/C++</li>
                                            <li>Git</li>
                                            <li>Bootstrap</li>
                                            <li>Material UI</li>
                                            <li>HTML5</li>
                                            <li>CSS</li>
                                            <li>SASS</li>
                                            <li>Object Oriented Programming (OOPs)</li>
                                            <li>Netbeans</li>
                                            <li>JDBC</li>
                                            <li>Xampp Database</li>
                                        </ol> */}

                                        I believe there is always a room for learning something new every day from everyone.
                                        Knowledge is Endless.
                                        So, it's better to always keep learning as many new things as possible

                                    </div>
                                    <div className="aboutUsDivCircleLinks">
                                        <i className="fa-brands fa-linkedin aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://www.linkedin.com/in/aditya-kapoor-sde/") }}></i>
                                        <i className="fa-brands fa-hackerrank aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://www.hackerrank.com/AdityaKapoor") }}></i>
                                        <i className="cib-hackerearth aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://www.hackerearth.com/@kapoorabhay234.ak") }}></i>
                                        <i className="fa-brands fa-github aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://github.com/AdityaKapoor234") }}></i>
                                        <i className="fa-brands fa-square-gitlab aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://gitlab.com/AdityaKapoor234") }}></i>
                                        <i className="fa-brands fa-skype aboutUsDivCircleLinksImg point-text" onClick={() => { window.open("https://join.skype.com/invite/xfsgvtKEHaAT") }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
