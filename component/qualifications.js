/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LinkIcon from '@mui/icons-material/Link';

export default function QualificationComponent(props) {
    const [theme, setTheme] = useState(props?.layoutTheme);

    const [education, setEducation] = useState(props?.profileEducation);
    const [certification, setCertification] = useState(props?.profileCertification);
    const [honors, setHonors] = useState(props?.profileHonors);
    const [achievements, setAchievements] = useState(props?.profileAchievements);
    const [publication, setPublication] = useState(props?.profilePublication);

    const [noOfTabs, setNoOfTabs] = useState(2);

    useEffect(() => {
        setTheme(props?.layoutTheme);

        setEducation(props?.profileEducation);
        setCertification(props?.profileCertification);
        setHonors(props?.profileHonors);
        setAchievements(props?.profileAchievements);
        setPublication(props?.profilePublication);

        let tabs = 0;

        if (props?.profileEducation?.length > 0) {
            tabs += 1;
        }
        if (props?.profileCertification?.length > 0) {
            tabs += 1;
        }
        if (props?.profileHonors?.length > 0) {
            tabs += 1;
        }
        if (props?.profileAchievements?.length > 0) {
            tabs += 1;
        }
        if (props?.profilePublication?.length > 0) {
            tabs += 1;
        }

        setNoOfTabs(tabs);
    }, [props]);


    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="homeDarkBackground">
                    <div
                        className={
                            noOfTabs === 1 ?
                                "education educationPolygon1"
                                : noOfTabs === 2 ?
                                    "education educationPolygon2"
                                    : noOfTabs === 3 ?
                                        "education educationPolygon3"
                                        : noOfTabs === 4 ?
                                            "education educationPolygon4"
                                            : "education educationPolygon5"
                        }
                        id="education"
                    >
                        <div className="educationHeading">
                            My&nbsp;<span className="textHighlight">Qualifications</span>
                        </div>
                        <div className="educationDescription mb-5">
                            These are my Qualifications from High School to Post Graduation as well as My Certifications
                        </div>
                        {
                            education?.length > 0 &&
                            <>
                                <div className="educationSubHeading" id="degree">
                                    <div className="educationSubHeadingCap">
                                        <i className="fa-solid fa-graduation-cap degreeCapImg pe-1"></i>
                                        Degree
                                    </div>
                                    {/* <div className="educationSubHeadingLine"></div> */}
                                </div>
                                <div>&nbsp;</div>
                                <div className="row mt-2 d-flex justify-content-start">
                                    {
                                        education?.map((elem) => {
                                            return (
                                                <div className="col-md-4 col-12">
                                                    <div className="educationCard">
                                                        <div className="graduationInfo">
                                                            <div className="graduationCap">
                                                                <i className="fa-solid fa-graduation-cap graduationCapImg"></i>
                                                            </div>

                                                            <div className="graduationInfoCard">
                                                                <div className="graduationYear">
                                                                    {elem?.timePeriod}
                                                                </div>
                                                                <div className="graduationDegree d-flex flex-wrap align-items-center justify-content-between">
                                                                    <div>{elem?.degree}</div>
                                                                    <div>
                                                                        {
                                                                            elem?.certificate &&
                                                                            <LinkIcon className="point-text" onClick={() => window.open(elem?.certificate)} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="graduationDegreeDescription"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            elem?.description,
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                        {
                            certification?.length > 0 &&
                            <>
                                <div className="educationSubHeading">
                                    <div className="educationSubHeadingCap" id="certification">
                                        {/* <i className="fa-solid fa-graduation-cap degreeCapImg pe-1"></i> */}
                                        {/* <i class="fa-solid fa-certificate degreeCapImg pe-1"></i> */}
                                        {/* <WorkspacePremiumIcon className="degreeCapImg pe-1" /> */}
                                        {/* <img src="/images/certification.png" className="certificateCapImg pe-1" alt="" /> */}
                                        <img
                                            src={theme === false ? "/images/certification_white.svg" : "/images/certification_dark_white.svg"}
                                            className="certificateCapImg pe-1"
                                            alt=""
                                        />
                                        Certification
                                    </div>
                                    {/* <div className="certificationSubHeadingLine"></div> */}
                                </div>
                                <div>&nbsp;</div>
                                <div className="row mt-2 d-flex justify-content-start">
                                    {
                                        certification?.map((elem) => {
                                            return (
                                                <div className="col-md-4 col-12">
                                                    <div className="educationCard">
                                                        <div className="graduationInfo">
                                                            <div className="certificationCap">
                                                                <img
                                                                    src={theme === false ? "/images/certification_orange.svg" : "/images/certification_purple.svg"}
                                                                    className="certificationCapImg"
                                                                    alt=""
                                                                />
                                                                {/* <i className="fa-solid fa-graduation-cap graduationCapImg"></i> */}
                                                            </div>

                                                            <div className="graduationInfoCard">
                                                                <div className="graduationYear">
                                                                    {elem?.timePeriod}
                                                                </div>
                                                                <div className="graduationDegree d-flex flex-wrap align-items-center justify-content-between">
                                                                    <div>{elem?.degree}</div>
                                                                    <div>
                                                                        {
                                                                            elem?.certificate &&
                                                                            <LinkIcon className="point-text" onClick={() => window.open(elem?.certificate)} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="graduationDegreeDescription"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            elem?.description,
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }







                        {
                            honors?.length > 0 &&
                            <>
                                <div className="educationSubHeading">
                                    <div className="educationSubHeadingCap" id="honors">
                                        <i className="fa-solid fa-trophy degreeCapImg pe-1"></i>
                                        Honor
                                    </div>
                                    {/* <div className="certificationSubHeadingLine"></div> */}
                                </div>
                                <div>&nbsp;</div>
                                <div className="row mt-2 d-flex justify-content-start">
                                    {
                                        honors?.map((elem) => {
                                            return (
                                                <div className="col-md-4 col-12">
                                                    <div className="educationCard">
                                                        <div className="graduationInfo">
                                                            <div className="graduationCap">
                                                                <i className="fa-solid fa-trophy graduationCapImg"></i>
                                                            </div>

                                                            <div className="graduationInfoCard">
                                                                <div className="graduationYear">
                                                                    {elem?.timePeriod}
                                                                </div>
                                                                <div className="graduationDegree d-flex flex-wrap align-items-center justify-content-between">
                                                                    <div>{elem?.award}</div>
                                                                    <div>
                                                                        {
                                                                            elem?.certificate &&
                                                                            <LinkIcon className="point-text" onClick={() => window.open(elem?.certificate)} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="graduationDegreeDescription"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            elem?.description,
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                        {
                            achievements?.length > 0 &&
                            <>
                                <div className="educationSubHeading">
                                    <div className="educationSubHeadingCap" id="achievements">
                                        <i className="fa-solid fa-medal degreeCapImg pe-1"></i>
                                        Achievement
                                    </div>
                                    {/* <div className="certificationSubHeadingLine"></div> */}
                                </div>
                                <div>&nbsp;</div>
                                <div className="row mt-2 d-flex justify-content-start">
                                    {
                                        achievements?.map((elem) => {
                                            return (
                                                <div className="col-md-4 col-12">
                                                    <div className="educationCard">
                                                        <div className="graduationInfo">
                                                            <div className="graduationCap">
                                                                <i className="fa-solid fa-medal graduationCapImg"></i>
                                                            </div>

                                                            <div className="graduationInfoCard">
                                                                <div className="graduationYear">
                                                                    {elem?.timePeriod}
                                                                </div>
                                                                <div className="graduationDegree d-flex flex-wrap align-items-center justify-content-between">
                                                                    <div>{elem?.achievement}</div>
                                                                    <div>
                                                                        {
                                                                            elem?.certificate &&
                                                                            <LinkIcon className="point-text" onClick={() => window.open(elem?.certificate)} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="graduationDegreeDescription"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            elem?.description,
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                        {
                            publication?.length > 0 &&
                            <>
                                <div className="educationSubHeading">
                                    <div className="educationSubHeadingCap" id="publication">
                                        <i className="fa-solid fa-file-contract degreeCapImg pe-1"></i>
                                        Publication
                                    </div>
                                    {/* <div className="certificationSubHeadingLine"></div> */}
                                </div>
                                <div>&nbsp;</div>
                                <div className="row mt-2 d-flex justify-content-start">
                                    {
                                        publication?.map((elem) => {
                                            return (
                                                <div className="col-md-4 col-12">
                                                    <div className="educationCard">
                                                        <div className="graduationInfo">
                                                            <div className="graduationCap">
                                                                <i className="fa-solid fa-file-contract graduationCapImg"></i>
                                                            </div>

                                                            <div className="graduationInfoCard">
                                                                <div className="graduationYear">
                                                                    {elem?.timePeriod}
                                                                </div>
                                                                <div className="graduationDegree d-flex flex-wrap align-items-center justify-content-between">
                                                                    <div>{elem?.publication}</div>
                                                                    <div>
                                                                        {
                                                                            elem?.certificate &&
                                                                            <LinkIcon className="point-text" onClick={() => window.open(elem?.certificate)} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="graduationDegreeDescription"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            elem?.description,
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </main >
        </>
    )
}
