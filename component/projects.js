/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Slider from "react-slick";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";

export default function ProjectComponent(props) {
    const [settings, setSettings] = useState(props?.profileSettings);

    const [theme, setTheme] = useState(props?.layoutTheme);

    const [companyProjects, setCompanyProjects] = useState(props?.profileCompanyProjects);
    const [personalProjects, setPersonalProjects] = useState(props?.profilePersonalProjects);

    const [showAllCompanyProjects, setShowAllCompanyProjects] = useState(false);
    const [showAllpersonalProjects, setShowAllPersonalProjects] = useState(false);

    useEffect(() => {
        setSettings(props?.profileSettings);

        setTheme(props?.layoutTheme);

        setCompanyProjects(props?.profileCompanyProjects);
        setPersonalProjects(props?.profilePersonalProjects);
    }, [props]);


    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="homeDarkBackground">
                    <div className="projects" id="projects">
                        <div className="projectsHead">
                            P<span className="textHighlight">rojects</span>
                        </div>
                        <div className="projectsSubHead" id="company_projects">
                            <div>
                                <img src="/images/laptop-icon.png" alt="" className="projectsSubHeadImg" />&nbsp;
                                <span>Company</span>&nbsp;<span className="textHighlight">Projects</span>
                            </div>
                            <div>
                                {/* <span
                                    className="textHighlight point-text"
                                    style={{ fontSize: "1rem" }}
                                    onClick={() => setShowAllCompanyProjects(true)}
                                >
                                    View All
                                </span> */}
                            </div>
                        </div>
                        {
                            companyProjects?.map((elem) => {
                                return (
                                    <>
                                        <div className="projectComapanyName point-text" onClick={() => { window.open(elem?.link) }}>
                                            {
                                                theme === false && elem?.logo &&
                                                <img src={theme === false ? elem?.logo : elem?.darklogo} alt="" className="projectComapanyLogo" />
                                            }
                                            {
                                                theme === true && elem?.darklogo &&
                                                <img src={theme === false ? elem?.logo : elem?.darklogo} alt="" className="projectComapanyLogo" />
                                            }
                                            {" "}
                                            {elem?.company_name ? elem?.company_name : ""}
                                        </div>
                                        <div className="projectComapanyDescription">
                                            {elem?.company_description ? elem?.company_description : ""}
                                        </div>

                                        <Slider {...settings}>
                                            {
                                                elem?.company_projects?.filter((elem) => elem.highlightProject === true)?.map((item) => {
                                                    return (
                                                        <div className="w-100 mb-5">
                                                            <div className="projectCard">
                                                                <div className="projectLogoDiv point-text" onClick={() => { window.open(item?.link) }}>
                                                                    {
                                                                        item?.logo ?
                                                                            <img src={item?.logo} alt="" className="projectLogo" />
                                                                            :
                                                                            <></>
                                                                    }
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-9 col-12">
                                                                        <div className="projectName point-text" onClick={() => { window.open(item?.link) }}>
                                                                            {item?.name}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
                                                                        <div className="projectTimePeriod">
                                                                            <CalendarMonthIcon className="projectIcons" />&nbsp;
                                                                            {item?.timePeriod}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="projectDescription">
                                                                    {item?.description ? item?.description : ""}
                                                                </div>
                                                                <div className="projectLink point-text" onClick={() => { window.open(item?.link) }}>
                                                                    <LinkIcon className="projectLinkIcon" />
                                                                    Project Link
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </>
                                )
                            })
                        }


                        <div className="projectsSubHead" id="personal_projects">
                            <div>
                                <img src="/images/laptop-icon.png" alt="" className="projectsSubHeadImg" />&nbsp;
                                <span className="textHighlight">Personal</span>&nbsp;Projects
                            </div>
                            <div>
                                <span
                                    className="textHighlight point-text"
                                    style={{ fontSize: "1rem" }}
                                    onClick={() => setShowAllPersonalProjects(true)}
                                >
                                    View All
                                </span>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {
                                personalProjects?.filter((elem) => elem.highlightProject === true)?.map((item) => {
                                    return (
                                        <div className="w-100 mb-5">
                                            <div className="projectCard">
                                                <div className="projectLogoDiv point-text" onClick={() => { window.open(item?.link) }}>
                                                    {
                                                        item?.logo ?
                                                            <img src={item?.logo} alt="" className="projectLogo" />
                                                            :
                                                            <></>
                                                    }
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-9 col-12">
                                                        <div className="projectName point-text" onClick={() => { window.open(item?.link) }}>
                                                            {item?.name}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
                                                        <div className="projectTimePeriod">
                                                            <CalendarMonthIcon className="projectIcons" />&nbsp;
                                                            {item?.timePeriod}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="projectDescription">
                                                    {item?.description ? item?.description : ""}
                                                </div>
                                                <div className="projectLinkRow">
                                                    {
                                                        item?.link ?
                                                            <span className="projectLink point-text" onClick={() => { window.open(item?.link) }}>
                                                                <LinkIcon className="projectLinkIcon" />
                                                                Project Link
                                                            </span>
                                                            :
                                                            <></>
                                                    }
                                                    {
                                                        item?.link && item?.gitLink ?
                                                            <>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                            </>
                                                            :
                                                            <></>
                                                    }
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    {
                                                        item?.gitLink ?
                                                            <span className="projectLink point-text" onClick={() => { window.open(item?.gitLink) }}>
                                                                <GitHubIcon className="gitLinkIcon" />
                                                                Git Link
                                                            </span>
                                                            :
                                                            <></>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <Dialog
                    open={showAllCompanyProjects}
                    onClose={() => setShowAllCompanyProjects(false)}
                    maxWidth="xl"
                    fullWidth
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle style={{ backgroundColor: `${theme === false ? "" : "#383434"}` }}>
                        <main className={theme === false ? "light" : "dark"}>
                            <div className="scroll">
                                <div className="projectsPopUpBox" id="projects">
                                    <div className="projectsSubHead" id="company_projects">
                                        <div>
                                            <img src="/images/laptop-icon.png" alt="" className="projectsSubHeadImg" />&nbsp;
                                            <span>Company</span>&nbsp;<span className="textHighlight">Projects</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </DialogTitle>
                    <Box position="absolute" top={0} right={0} >
                        <IconButton onClick={() => setShowAllCompanyProjects(false)}>
                            <CloseIcon style={{ color: `${theme === false ? "" : "#ffffff"}` }} />
                        </IconButton>
                    </Box>
                    <DialogContent className="scroll" style={{ backgroundColor: `${theme === false ? "" : "#383434"}` }}>
                        <Typography>
                            <main className={theme === false ? "light" : "dark"}>
                                <div>
                                    <div className="projectsPopUpBox" id="projects">
                                        {
                                            companyProjects?.map((elem) => {
                                                return (
                                                    <>
                                                        <div className="projectComapanyName point-text" onClick={() => { window.open(elem?.link) }}>
                                                            {
                                                                theme === false && elem?.logo &&
                                                                <img src={theme === false ? elem?.logo : elem?.darklogo} alt="" className="projectComapanyLogo" />
                                                            }
                                                            {
                                                                theme === true && elem?.darklogo &&
                                                                <img src={theme === false ? elem?.logo : elem?.darklogo} alt="" className="projectComapanyLogo" />
                                                            }
                                                            {" "}
                                                            {elem?.company_name ? elem?.company_name : ""}
                                                        </div>
                                                        <div className="projectComapanyDescription">
                                                            {elem?.company_description ? elem?.company_description : ""}
                                                        </div>

                                                        {
                                                            elem?.company_projects?.map((item) => {
                                                                return (
                                                                    <div className="w-100 mb-5">
                                                                        <div className="projectCard">
                                                                            <div className="projectLogoDiv point-text" onClick={() => { window.open(item?.link) }}>
                                                                                {
                                                                                    item?.logo ?
                                                                                        <img src={item?.logo} alt="" className="projectLogo" />
                                                                                        :
                                                                                        <></>
                                                                                }
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-9 col-12">
                                                                                    <div className="projectName point-text" onClick={() => { window.open(item?.link) }}>
                                                                                        {item?.name}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
                                                                                    <div className="projectTimePeriod">
                                                                                        <CalendarMonthIcon className="projectIcons" />&nbsp;
                                                                                        {item?.timePeriod}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="projectDescription">
                                                                                {item?.description ? item?.description : ""}
                                                                            </div>
                                                                            <div className="projectLink point-text" onClick={() => { window.open(item?.link) }}>
                                                                                <LinkIcon className="projectLinkIcon" />
                                                                                Project Link
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </main>
                        </Typography>
                    </DialogContent>
                </Dialog>

                <Dialog
                    open={showAllpersonalProjects}
                    onClose={() => setShowAllPersonalProjects(false)}
                    maxWidth="xl"
                    fullWidth
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle style={{ backgroundColor: `${theme === false ? "" : "#383434"}` }}>
                        <main className={theme === false ? "light" : "dark"}>
                            <div className="scroll">
                                <div className="projectsPopUpBox" id="projects">
                                    <div className="projectsSubHead" id="company_projects">
                                        <div>
                                            <img src="/images/laptop-icon.png" alt="" className="projectsSubHeadImg" />&nbsp;
                                            <span className="textHighlight">Personal</span>&nbsp;Projects
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </DialogTitle>
                    <Box position="absolute" top={0} right={0} >
                        <IconButton onClick={() => setShowAllPersonalProjects(false)}>
                            <CloseIcon style={{ color: `${theme === false ? "" : "#ffffff"}` }} />
                        </IconButton>
                    </Box>
                    <DialogContent className="scroll" style={{ backgroundColor: `${theme === false ? "" : "#383434"}` }}>
                        <Typography>
                            <main className={theme === false ? "light" : "dark"}>
                                <div>
                                    <div className="projectsPopUpBox" id="projects">
                                    {
                                            personalProjects?.filter((elem) => elem?.type === "react")?.length > 0 &&
                                            <div className="projectComapanyName">
                                                &#x2714;&nbsp;&nbsp;React.js Projects
                                            </div>
                                        }
                                        {
                                            personalProjects?.filter((elem) => elem?.type === "react")?.map((item) => {
                                                return (
                                                    <div className="w-100 mb-5">
                                                        <div className="projectCard">
                                                            <div className="projectLogoDiv point-text" onClick={() => { window.open(item?.link) }}>
                                                                {
                                                                    item?.logo ?
                                                                        <img src={item?.logo} alt="" className="projectLogo" />
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-9 col-12">
                                                                    <div className="projectName point-text" onClick={() => { window.open(item?.link) }}>
                                                                        {item?.name}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
                                                                    <div className="projectTimePeriod">
                                                                        <CalendarMonthIcon className="projectIcons" />&nbsp;
                                                                        {item?.timePeriod}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="projectDescription">
                                                                {item?.description ? item?.description : ""}
                                                            </div>
                                                            <div className="projectLinkRow">
                                                                {
                                                                    item?.link ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.link) }}>
                                                                            <LinkIcon className="projectLinkIcon" />
                                                                            Project Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                                {
                                                                    item?.link && item?.gitLink ?
                                                                        <>
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        </>
                                                                        :
                                                                        <></>
                                                                }
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                {
                                                                    item?.gitLink ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.gitLink) }}>
                                                                            <GitHubIcon className="gitLinkIcon" />
                                                                            Git Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {
                                            personalProjects?.filter((elem) => elem?.type === "html_css")?.length > 0 &&
                                            <div className="projectComapanyName">
                                                &#x2714;&nbsp;&nbsp;HTML & CSS (UI) Projects
                                            </div>
                                        }
                                        {
                                            personalProjects?.filter((elem) => elem?.type === "html_css")?.map((item) => {
                                                return (
                                                    <div className="w-100 mb-5">
                                                        <div className="projectCard">
                                                            <div className="projectLogoDiv point-text" onClick={() => { window.open(item?.link) }}>
                                                                {
                                                                    item?.logo ?
                                                                        <img src={item?.logo} alt="" className="projectLogo" />
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-9 col-12">
                                                                    <div className="projectName point-text" onClick={() => { window.open(item?.link) }}>
                                                                        {item?.name}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
                                                                    <div className="projectTimePeriod">
                                                                        <CalendarMonthIcon className="projectIcons" />&nbsp;
                                                                        {item?.timePeriod}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="projectDescription">
                                                                {item?.description ? item?.description : ""}
                                                            </div>
                                                            <div className="projectLinkRow">
                                                                {
                                                                    item?.link ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.link) }}>
                                                                            <LinkIcon className="projectLinkIcon" />
                                                                            Project Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                                {
                                                                    item?.link && item?.gitLink ?
                                                                        <>
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        </>
                                                                        :
                                                                        <></>
                                                                }
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                {
                                                                    item?.gitLink ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.gitLink) }}>
                                                                            <GitHubIcon className="gitLinkIcon" />
                                                                            Git Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {
                                            personalProjects?.filter((elem) => elem?.type === "html_css_javascript")?.length > 0 &&
                                            <div className="projectComapanyName">
                                                &#x2714;&nbsp;&nbsp;HTML, CSS & Java Script Projects
                                            </div>
                                        }
                                        {
                                            personalProjects?.filter((elem) => elem?.type === "html_css_javascript")?.map((item) => {
                                                return (
                                                    <div className="w-100 mb-5">
                                                        <div className="projectCard">
                                                            <div className="projectLogoDiv point-text" onClick={() => { window.open(item?.link) }}>
                                                                {
                                                                    item?.logo ?
                                                                        <img src={item?.logo} alt="" className="projectLogo" />
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-9 col-12">
                                                                    <div className="projectName point-text" onClick={() => { window.open(item?.link) }}>
                                                                        {item?.name}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
                                                                    <div className="projectTimePeriod">
                                                                        <CalendarMonthIcon className="projectIcons" />&nbsp;
                                                                        {item?.timePeriod}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="projectDescription">
                                                                {item?.description ? item?.description : ""}
                                                            </div>
                                                            <div className="projectLinkRow">
                                                                {
                                                                    item?.link ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.link) }}>
                                                                            <LinkIcon className="projectLinkIcon" />
                                                                            Project Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                                {
                                                                    item?.link && item?.gitLink ?
                                                                        <>
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        </>
                                                                        :
                                                                        <></>
                                                                }
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                {
                                                                    item?.gitLink ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.gitLink) }}>
                                                                            <GitHubIcon className="gitLinkIcon" />
                                                                            Git Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {
                                            personalProjects?.filter((elem) => elem?.type === "html_css_javascript_api")?.length > 0 &&
                                            <div className="projectComapanyName">
                                                &#x2714;&nbsp;&nbsp;HTML, CSS, Java Script & API Integration Projects
                                            </div>
                                        }
                                        {
                                            personalProjects?.filter((elem) => elem?.type === "html_css_javascript_api")?.map((item) => {
                                                return (
                                                    <div className="w-100 mb-5">
                                                        <div className="projectCard">
                                                            <div className="projectLogoDiv point-text" onClick={() => { window.open(item?.link) }}>
                                                                {
                                                                    item?.logo ?
                                                                        <img src={item?.logo} alt="" className="projectLogo" />
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-9 col-12">
                                                                    <div className="projectName point-text" onClick={() => { window.open(item?.link) }}>
                                                                        {item?.name}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
                                                                    <div className="projectTimePeriod">
                                                                        <CalendarMonthIcon className="projectIcons" />&nbsp;
                                                                        {item?.timePeriod}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="projectDescription">
                                                                {item?.description ? item?.description : ""}
                                                            </div>
                                                            <div className="projectLinkRow">
                                                                {
                                                                    item?.link ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.link) }}>
                                                                            <LinkIcon className="projectLinkIcon" />
                                                                            Project Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                                {
                                                                    item?.link && item?.gitLink ?
                                                                        <>
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        </>
                                                                        :
                                                                        <></>
                                                                }
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                {
                                                                    item?.gitLink ?
                                                                        <span className="projectLink point-text" onClick={() => { window.open(item?.gitLink) }}>
                                                                            <GitHubIcon className="gitLinkIcon" />
                                                                            Git Link
                                                                        </span>
                                                                        :
                                                                        <></>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </main>
                        </Typography>
                    </DialogContent>
                </Dialog>
            </main >
        </>
    )
}
