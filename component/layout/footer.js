/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

export default function FooterComponent(props) {
    const [theme, setTheme] = useState(props?.layoutTheme);

    useEffect(() => {
        setTheme(props?.layoutTheme);
    }, [props]);


    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="footer">
                    <a href="#header">
                        <div className="footerHead point-text">
                            Aditya <span className="textHighlight">Kapoor</span>
                        </div>
                    </a>
                    <div className="footerDivCircleLinks">
                        <i className="fa-brands fa-linkedin footerDivCircleLinksImg point-text" onClick={() => { window.open("https://www.linkedin.com/in/aditya-kapoor-sde/") }}></i>
                        <i className="fa-brands fa-hackerrank footerDivCircleLinksImg point-text" onClick={() => { window.open("https://www.hackerrank.com/AdityaKapoor") }}></i>
                        <i className="cib-hackerearth footerDivCircleLinksImg point-text" onClick={() => { window.open("https://www.hackerearth.com/@kapoorabhay234.ak") }}></i>
                        <i className="fa-brands fa-github footerDivCircleLinksImg point-text" onClick={() => { window.open("https://github.com/AdityaKapoor234") }}></i>
                        <i className="fa-brands fa-square-gitlab footerDivCircleLinksImg point-text" onClick={() => { window.open("https://gitlab.com/AdityaKapoor234") }}></i>
                        <i className="fa-brands fa-skype footerDivCircleLinksImg point-text" onClick={() => { window.open("https://join.skype.com/invite/xfsgvtKEHaAT") }}></i>
                    </div>
                    <div className="footerCopyRight">
                        Copyright © 2023 Aditya Kapoor | All Rights Reserved
                    </div>


                </div>
            </main >
        </>
    )
}
