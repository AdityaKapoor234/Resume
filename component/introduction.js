/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';

export default function IntroductionComponent(props) {
    const [theme, setTheme] = useState(props?.layoutTheme);

    const [experienceYears, setExperienceYears] = useState(props?.profileExperienceYears);
    const [experienceMonths, setExperienceMonths] = useState(props?.profileExperienceMonths);

    useEffect(() => {
        setTheme(props?.layoutTheme);

        setExperienceYears(props?.profileExperienceYears);
        setExperienceMonths(props?.profileExperienceMonths);
    }, [props]);


    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="homeDarkBackground">
                    <div className="home" id="home">
                        <div className="row webVisi">
                            <div className="col-xl-7 col-lg-8 col-md-8">
                                <div className="homeHeadText">
                                    Hi, I'm <span className="homeHeadTextHighlight">Aditya Kapoor</span>
                                </div>
                                <div className="homeHeadDeignationText">
                                    <span className="homeHeadTextHighlight">Software</span> Engineer
                                </div>
                                <div className="homeHeadDescriptionText">
                                    {/* Inquisitive Programming enthusiast with profound Management skills. */}
                                    Software Developer with{" "}
                                    {
                                        experienceMonths !== 0 && experienceMonths !== 12 ?
                                            <>
                                                {experienceYears} {experienceYears === 1 ? "year" : "years"}, {experienceMonths} {experienceMonths === 1 ? "month " : "months "}
                                            </>
                                            :
                                            <>
                                                {experienceYears}+ {experienceYears === 1 ? "year" : "years"}
                                            </>
                                    }
                                    of experience in software development. Curious individual who loves challenges and getting things done. Self-disciplined, driven with strong time management and prioritization abilities. Skilled in finding creative solutions.
                                    {/* Software Developer with {experienceYears}+ {experienceYears === 1 ? "year" : "years"} of experience in software development. Curious individual who loves challenges and getting things done. Self-disciplined, driven with strong time management and prioritization abilities. Skilled in finding creative solutions. */}
                                </div>
                                <div className="homeResumeButton point-text" onClick={() => { window.open("/resume/aditya_kapoor_resume.pdf") }}>
                                    Resume
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-4">
                                <div className="homeHeadPicture">
                                    <Avatar alt="Aditya Kapoor" src="/images/aditya_kapoor.jpg" className="homeHeadPictureImg" />
                                </div>
                            </div>
                        </div>

                        <div className="mobVisi justify-content-center">
                            <div>
                                <div className="homeHeadPicture">
                                    <Avatar alt="Aditya Kapoor" src="/images/aditya_kapoor.jpg" className="homeHeadPictureImg" />
                                </div>
                                <div>
                                    <div className="homeHeadText">
                                        Hi, I'm <span className="homeHeadTextHighlight">Aditya Kapoor</span>
                                    </div>
                                    <div className="homeHeadDeignationText">
                                        <span className="homeHeadTextHighlight">Sofware</span> Engineer
                                    </div>
                                    <div className="homeHeadDescriptionText">
                                        {/* Inquisitive Programming enthusiast with profound Management skills. */}
                                        Software Developer with {experienceYears}+ {experienceYears === 1 ? "year" : "years"} of experience in software development. Curious individual who loves challenges and getting things done. Self-disciplined, driven with strong time management and prioritization abilities. Skilled in finding creative solutions.
                                    </div>
                                    <div className="homeResumeButton point-text" onClick={() => { window.open("/resume/aditya_kapoor_resume.pdf") }}>
                                        Resume
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
