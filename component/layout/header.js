/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

// const IOSSwitch = styled((props) => (
//   <Switch
//     focusVisibleClassName=".Mui-focusVisible"
//     disableRipple
//     {...props}
//   />
// ))(({ theme }) => ({
//   width: 40,
//   height: 20,
//   padding: 0,
//   '& .MuiSwitch-switchBase': {
//     padding: 0,
//     margin: 2,
//     transitionDuration: '300ms',
//     '&.Mui-checked': {
//       transform: 'translateX(16px)',
//       color: '#fff',
//       '& + .MuiSwitch-track': {
//         backgroundColor:
//           theme.palette.mode === 'dark' ? '#2ECA45' : '#9152d1',
//         opacity: 1,
//         border: 0,
//       },
//       '&.Mui-disabled + .MuiSwitch-track': {
//         opacity: 0.5,
//       },
//     },
//     '&.Mui-focusVisible .MuiSwitch-thumb': {
//       color: '#33cf4d',
//       border: '6px solid #fff',
//     },
//     '&.Mui-disabled .MuiSwitch-thumb': {
//       color:
//         theme.palette.mode === 'light'
//           ? theme.palette.grey[100]
//           : theme.palette.grey[600],
//     },
//     '&.Mui-disabled + .MuiSwitch-track': {
//       opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxSizing: 'border-box',
//     width: 16,
//     height: 16,
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 26 / 2,
//     backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
//     opacity: 1,
//     transition: theme.transitions.create(['background-color'], {
//       duration: 500,
//     }),
//   },
// }));

const IOSSwitch = styled((props) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                // backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#a75de1',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        // backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        backgroundColor: theme.palette.mode === 'light' ? '#323abb' : '#39393D',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        // backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        borderRadius: 20 / 2,
    },
}));

export default function HeaderComponent(props) {
    const [honors, setHonors] = useState(props?.honorsTab);
    const [achievements, setAchievements] = useState(props?.achievementsTab);
    const [publication, setPublication] = useState(props?.publicationTab);

    const [drawerMenu, setDrawerMenu] = useState(false);
    const [theme, setTheme] = useState(props?.layoutTheme);


    const [headerMenuEducationDropdown, setHeaderMenuEducationDropdown] = useState(false);
    const [headerMenuProjectDropdown, setHeaderMenuProjectDropdown] = useState(false);

    const [headerMenuEducationDrawer, setHeaderMenuEducationDrawer] = useState(false);
    const [headerMenuProjectDrawer, setHeaderMenuProjectDrawer] = useState(false);

    useEffect(() => {
        setTheme(props?.layoutTheme);

        setHonors(props?.honorsTab);
        setAchievements(props?.achievementsTab);
        setPublication(props?.publicationTab);
    }, [props]);

    return (
        <>
            <main className={theme === false ? "light" : "dark"} id="header">
                <div className='d-flex justify-content-between align-items-center headerBar'>
                    <div className="headerBarMenu smallLaptopVisi">
                        <MenuIcon
                            className="headerBarMenuIcon"
                            onClick={() => {
                                setDrawerMenu(true);
                                setHeaderMenuEducationDrawer(false);
                                setHeaderMenuProjectDrawer(false);
                            }}
                        />
                    </div>
                    <div className='d-flex justify-content-start align-items-center headerBarLeft point-text' onClick={() => { window.open("/resume/aditya_kapoor_resume.pdf") }}>
                        <Avatar alt="Aditya Kapoor" src="/images/aditya_kapoor.jpg" sx={{ height: "50px", width: "50px" }} className="me-2" />
                        <span className="textHighlight">Aditya</span>&nbsp;Kapoor
                    </div>

                    <div className='d-flex justify-content-between align-items-center headerBarCenter bigLaptopVisi'>
                        <a href="#home">
                            <div className='headerBarButtons point-text'>
                                HOME
                            </div>
                        </a>
                        <a href="#about">
                            <div className='headerBarButtons point-text'>
                                About
                            </div>
                        </a>
                        <a href="#skills">
                            <div className='headerBarButtons point-text'>
                                Skills
                            </div>
                        </a>
                        <div
                            className='headerBarButtons point-text'
                            onClick={() => setHeaderMenuEducationDropdown(true)}
                            onMouseOver={() => setHeaderMenuEducationDropdown(true)}
                            onMouseEnter={() => setHeaderMenuEducationDropdown(true)}
                            onMouseOut={() => setHeaderMenuEducationDropdown(false)}
                            onMouseLeave={() => setHeaderMenuEducationDropdown(false)}
                        >
                            Qualifications
                            {
                                headerMenuEducationDropdown &&
                                <div
                                    className="headerBarDropdown"
                                    onMouseOver={() => setHeaderMenuEducationDropdown(true)}
                                    onMouseEnter={() => setHeaderMenuEducationDropdown(true)}
                                    onMouseOut={() => setHeaderMenuEducationDropdown(false)}
                                    onMouseLeave={() => setHeaderMenuEducationDropdown(false)}
                                >
                                    <a href="#education">
                                        <div className="headerBarDropdownItem point-text">
                                            Degree
                                        </div>
                                    </a>
                                    <a href="#certification">
                                        <div className="headerBarDropdownItem point-text">
                                            Certification
                                        </div>
                                    </a>
                                    {
                                        honors &&
                                        <a href="#honors">
                                            <div className="headerBarDropdownItem point-text">
                                                Honor
                                            </div>
                                        </a>
                                    }
                                    {
                                        achievements &&
                                        <a href="#achievements">
                                            <div className="headerBarDropdownItem point-text">
                                                Achievement
                                            </div>
                                        </a>
                                    }
                                    {
                                        publication &&
                                        <a href="#publication">
                                            <div className="headerBarDropdownItem point-text">
                                                Publication
                                            </div>
                                        </a>
                                    }
                                </div>
                            }
                        </div>
                        <a href="#workexperience">
                            <div className='headerBarButtons point-text'>
                                Experience
                            </div>
                        </a>
                        <div
                            className='headerBarButtons point-text'
                            onMouseOver={() => setHeaderMenuProjectDropdown(true)}
                            onMouseEnter={() => setHeaderMenuProjectDropdown(true)}
                            onMouseOut={() => setHeaderMenuProjectDropdown(false)}
                            onMouseLeave={() => setHeaderMenuProjectDropdown(false)}
                        >
                            Projects
                            {
                                headerMenuProjectDropdown &&
                                <div
                                    className="headerBarDropdown"
                                    onMouseOver={() => setHeaderMenuProjectDropdown(true)}
                                    onMouseEnter={() => setHeaderMenuProjectDropdown(true)}
                                    onMouseOut={() => setHeaderMenuProjectDropdown(false)}
                                    onMouseLeave={() => setHeaderMenuProjectDropdown(false)}
                                >
                                    <a href="#projects">
                                        <div className="headerBarDropdownItem point-text">
                                            Company&nbsp;Projects
                                        </div>
                                    </a>
                                    <a href="#personal_projects">
                                        <div className="headerBarDropdownItem point-text">
                                            Personal&nbsp;Projects
                                        </div>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='d-flex justify-content-end align-items-center headerBarRight webVisi'>
                        <a href="#contact">
                            <div className="contactButton d-flex align-items-center me-3 point-text">
                                Contact
                            </div>
                        </a>
                        <div className="d-flex align-items-center">
                            {/* Dark Theme */}
                            <IOSSwitch
                                sx={{ m: 1 }}
                                checked={theme}
                                onChange={(e) => {
                                    setTheme(e.target.checked);
                                    props?.changeTheme(e.target.checked);
                                }}
                                title={theme ? "Dark Mode" : "Light Mode"}
                            />

                        </div>
                    </div>
                </div>

                <Drawer
                    anchor="left"
                    open={drawerMenu}
                    onClose={() => setDrawerMenu(false)}
                >
                    <div className={theme === false ? "light" : "dark"}>
                        <div className="headerBarMenuDrawer scroll">
                            <div className="headerBarMenuDrawerButtonsDivHieght scroll pb-5">
                                <div className="headerBarMenuDrawerHeading">
                                    Menu
                                    <div className="headerBarMenuDrawerHeadingIcon">
                                        <ArrowBackIcon fontSize="small" className="point-text" onClick={() => setDrawerMenu(false)} />
                                    </div>
                                </div>
                                <a href="#home">
                                    <div className='headerBarMenuDrawerButtons point-text' onClick={() => setDrawerMenu(false)}>
                                        HOME
                                    </div>
                                </a>
                                <a href="#about">
                                    <div className='headerBarMenuDrawerButtons point-text' onClick={() => setDrawerMenu(false)}>
                                        About
                                    </div>
                                </a>
                                <a href="#skills">
                                    <div className='headerBarMenuDrawerButtons point-text' onClick={() => setDrawerMenu(false)}>
                                        Skills
                                    </div>
                                </a>
                                <div
                                    className='headerBarMenuDrawerButtons point-text'
                                    onClick={() => setHeaderMenuEducationDrawer(!headerMenuEducationDrawer)}
                                >
                                    Qualifications
                                    <div className="d-flex align-items-center">
                                        {
                                            headerMenuEducationDrawer ?
                                                <KeyboardArrowUpIcon fontSize="small" />
                                                :
                                                <KeyboardArrowDownIcon fontSize="small" />
                                        }
                                    </div>
                                </div>
                                {
                                    headerMenuEducationDrawer &&
                                    <div>
                                        <a href="#education">
                                            <div
                                                className="headerBarMenuDrawerSubButtons point-text"
                                                onClick={() => {
                                                    setHeaderMenuEducationDrawer(false);
                                                    setDrawerMenu(false);
                                                }}
                                            >
                                                Degree
                                            </div>
                                        </a>
                                        <a href="#certification">
                                            <div
                                                className="headerBarMenuDrawerSubButtons point-text"
                                                onClick={() => {
                                                    setHeaderMenuEducationDrawer(false);
                                                    setDrawerMenu(false);
                                                }}
                                            >
                                                Certification
                                            </div>
                                        </a>
                                        {
                                            honors &&
                                            <a href="#honors">
                                                <div
                                                    className="headerBarMenuDrawerSubButtons point-text"
                                                    onClick={() => {
                                                        setHeaderMenuEducationDrawer(false);
                                                        setDrawerMenu(false);
                                                    }}
                                                >
                                                    Honor
                                                </div>
                                            </a>
                                        }
                                        {
                                            achievements &&
                                            <a href="#achievements">
                                                <div
                                                    className="headerBarMenuDrawerSubButtons point-text"
                                                    onClick={() => {
                                                        setHeaderMenuEducationDrawer(false);
                                                        setDrawerMenu(false);
                                                    }}
                                                >
                                                    Achievement
                                                </div>
                                            </a>
                                        }
                                        {
                                            publication &&
                                            <a href="#publication">
                                                <div
                                                    className="headerBarMenuDrawerSubButtons point-text"
                                                    onClick={() => {
                                                        setHeaderMenuEducationDrawer(false);
                                                        setDrawerMenu(false);
                                                    }}
                                                >
                                                    Publication
                                                </div>
                                            </a>
                                        }
                                    </div>
                                }
                                <a href="#workexperience">
                                    <div className='headerBarMenuDrawerButtons point-text' onClick={() => setDrawerMenu(false)}>
                                        Experience
                                    </div>
                                </a>
                                <div
                                    className='headerBarMenuDrawerButtons point-text'
                                    onClick={() => setHeaderMenuProjectDrawer(!headerMenuProjectDrawer)}
                                >
                                    Projects
                                    <div className="d-flex align-items-center">
                                        {
                                            headerMenuProjectDrawer ?
                                                <KeyboardArrowUpIcon fontSize="small" />
                                                :
                                                <KeyboardArrowDownIcon fontSize="small" />
                                        }

                                    </div>
                                </div>
                                {
                                    headerMenuProjectDrawer &&
                                    <div>
                                        <a href="#projects">
                                            <div
                                                className="headerBarMenuDrawerSubButtons point-text"
                                                onClick={() => {
                                                    setHeaderMenuProjectDrawer(false);
                                                    setDrawerMenu(false);
                                                }}
                                            >
                                                Company&nbsp;Projects
                                            </div>
                                        </a>
                                        <a href="#personal_projects">
                                            <div
                                                className="headerBarMenuDrawerSubButtons point-text"
                                                onClick={() => {
                                                    setHeaderMenuProjectDrawer(false);
                                                    setDrawerMenu(false);
                                                }}
                                            >
                                                Personal&nbsp;Projects
                                            </div>
                                        </a>
                                    </div>
                                }

                                <div className="mobVisi">
                                    <div>
                                        <a href="#contact">
                                            <div className="headerBarMenuDrawerButtons point-text" onClick={() => setDrawerMenu(false)}>
                                                Contact
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mobVisi headerBarMenuDrawerDarkModeButtons">
                                <div>
                                    <div
                                        className="headerBarMenuDrawerButtons point-text"
                                        onClick={(e) => {
                                            setTheme(!theme);
                                            props?.changeTheme(!theme);
                                        }}
                                    >
                                        Dark Mode
                                        <IOSSwitch
                                            sx={{ m: 1 }}
                                            checked={theme}
                                            onChange={(e) => {
                                                setTheme(e.target.checked);
                                                props?.changeTheme(e.target.checked);
                                            }}
                                            title={theme ? "Dark Mode" : "Light Mode"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer >
            </main >
        </>
    )
}
