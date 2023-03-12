/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

export default function SkillComponent(props) {
    const [theme, setTheme] = useState(props?.layoutTheme);

    const [skills, setSkills] = useState(props?.profileSkills);

    useEffect(() => {
        setTheme(props?.layoutTheme);

        setSkills(props?.profileSkills);
    }, [props]);


    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="skills" id="skills">
                    <div className="skillsHeading">
                        <span className="textHighlight">S</span>kills
                    </div>
                    <div className="skillsDescription mb-5">
                        My Technical Skills
                    </div>

                    <div>&nbsp;</div>

                    <div className="row mt-4 d-flex justify-content-evenly">
                        {
                            skills?.map((elem, _key) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-12 skillCardPadding">
                                        <div className="skillCard">
                                            <div>
                                                <div className="skillCardLogo">
                                                    <img src={elem?.logo} alt="" />
                                                </div>
                                                <div className="skillCardHead pt-5">
                                                    {elem?.skill}
                                                </div>
                                                <div className="skillCardDescription">
                                                    {
                                                        elem?.viewMore === true ?
                                                            <>
                                                                {elem?.description}
                                                                <div className="skillCardDescriptionView point-text" onClick={() => { props?.skillDescriptionView(_key) }}>
                                                                    View&nbsp;Less
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                {elem?.description?.substring(0, 243)}
                                                                {
                                                                    elem?.description?.length > 243 ? <>... </> : <></>
                                                                }
                                                                {
                                                                    elem?.description?.length > 243 ?
                                                                        <span className="skillCardDescriptionView point-text" onClick={() => { props?.skillDescriptionView(_key) }}>
                                                                            View&nbsp;More
                                                                        </span>
                                                                        : <></>
                                                                }
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main >
        </>
    )
}
