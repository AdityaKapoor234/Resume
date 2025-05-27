/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Slider from "react-slick";



export default function ExperienceComponent(props) {
    const [settings, setSettings] = useState(props?.profileSettings);

    const [theme, setTheme] = useState(props?.layoutTheme);

    const [workExperience, setWorkExperience] = useState(props?.profileWorkExperience);

    useEffect(() => {
        setSettings(props?.profileSettings);

        setTheme(props?.layoutTheme);

        setWorkExperience(props?.profileWorkExperience);
    }, [props]);


    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="workExperience" id="workexperience">
                    <div className="workExperienceHead">

                        Experience
                    </div>
                    <Slider {...settings}>
                        {
                            workExperience?.map((elem) => {
                                return (
                                    <div className="w-100 mb-5">
                                        <div className="workExperienceCard">
                                            <div className="workExperienceDesignation">
                                                {elem?.designation}
                                            </div>
                                            <div className="workExperienceComapnyName point-text" onClick={() => { window.open(elem?.link) }}>
                                                {
                                                    elem?.logo ?
                                                        <img src={elem?.logo} alt="" className="workExperienceComapnyLogo" />
                                                        :
                                                        <></>
                                                }
                                                {" "}
                                                {elem?.company_name ? elem?.company_name : ""}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className="workExperienceTimePeriod">
                                                        <CalendarMonthIcon className="workExperienceIcons" />
                                                        &nbsp;
                                                        {elem?.timePeriod}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div
                                                        className="workExperienceLocation"
                                                        title={
                                                            elem?.work_type === "work_from_home" ?
                                                                "Work from Home"
                                                                :
                                                                elem?.work_type === "hybrid" ?
                                                                    "Hybrid"
                                                                    :
                                                                    "Work from Office"
                                                        }
                                                    >
                                                        {
                                                            elem?.work_type === "work_from_home" ?
                                                                <HomeIcon className="workExperienceIcons" />
                                                                :
                                                                elem?.work_type === "hybrid" ?
                                                                    <HomeWorkIcon className="workExperienceIcons" />
                                                                    :
                                                                    <LocationOnIcon className="workExperienceIcons" />
                                                        }
                                                        &nbsp;
                                                        {elem?.location}
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                elem?.work_experience_letter &&
                                                <div className="workExperienceComapnyName">
                                                    <span className="point-text" onClick={() => window.open(elem?.work_experience_letter)}>
                                                        Experince Letter
                                                    </span>
                                                </div>
                                            }
                                            <div>

                                            </div>
                                            <div
                                                className="workExperienceDescription"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        elem?.work_experience_description,
                                                }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </main >
        </>
    )
}
