/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Head from 'next/head'
import { toast } from "react-toastify";
import Router from "next/router";
import Image from 'next/image'
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Slider from "react-slick";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import Layout from "../component/layout/layout";
import Introduction from "../component/introduction";
import AboutUs from "../component/about-us";
import Skills from "../component/skills";
import Qualification from "../component/qualifications";
import Experience from "../component/experience";
import Projects from "../component/projects";
import Contact from "../component/contact";


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
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#9152d1',
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



const settings = {
  className: "center",
  centerPadding: "60px",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  swipeToSlide: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        swipeToSlide: true,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        swipeToSlide: true,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        swipeToSlide: true,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export default function Home() {
  const [theme, setTheme] = useState(false);

  const [experienceYears, setExperienceYears] = useState();
  const [experienceMonths, setExperienceMonths] = useState();

  const [skills, setSkills] = useState([
    {
      logo: "/images/reactjs.png",
      skill: "React JS",
      description: "The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
      viewMore: false,
    },
    {
      logo: "/images/nextjs.png",
      skill: "Next JS",
      description: "Next.js is a front-end framework that makes it easy to build fast websites with React—which is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
      viewMore: false,
    },
    // {
    //   logo: "/images/java-spring-boot.png",
    //   skill: "Java Spring Boot",
    //   description: "Java Spring Boot (Spring Boot) is a tool that makes developing web application and microservices with Spring Framework faster and easier through three core capabilities: Autoconfiguration. An opinionated approach to configuration. The ability to create standalone applications.",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/nodejs.png",
    //   skill: "Node.JS",
    //   description: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/mongodb.png",
    //   skill: "MongoDB",
    //   description: "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/express-js.png",
    //   skill: "Express.js",
    //   description: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/java.png",
    //   skill: "Java",
    //   description: "Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
    //   viewMore: false,
    // },
    {
      logo: "/images/javascript.png",
      skill: "Java Script",
      description: "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",
      viewMore: false,
    },
    {
      logo: "/images/typescript.png",
      skill: "TypeScript",
      description: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
      viewMore: false,
    },
    {
      logo: "/images/oops.png",
      skill: "OOPs",
      description: "Object-oriented programming is based on the concept of objects. In object-oriented programming data structures, or objects are defined, each with its own properties or attributes. Each object can also contain its own procedures or methods. Software is designed by using objects that interact with one another.",
      viewMore: false,
    },
    // {
    //   logo: "/images/c++.png",
    //   skill: "C/C++",
    //   description: "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup and first released in 1985 as an extension of the C programming language, or C with Classes.",
    //   viewMore: false,
    // },
    {
      logo: "/images/git.png",
      skill: "Git",
      description: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
      viewMore: false,
    },
    {
      logo: "/images/bootstrap.png",
      skill: "Bootstrap",
      description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      viewMore: false,
    },
    {
      logo: "/images/materialui.png",
      skill: "Material UI",
      description: "Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.",
      viewMore: false,
    },
    {
      logo: "/images/html5.png",
      skill: "HTML5",
      description: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation.",
      viewMore: false,
    },
    {
      logo: "/images/css3.png",
      skill: "CSS3",
      description: "CSS3: CSS3 stands for Cascading Style Sheet level 3, which is the advanced version of CSS. It is used for structuring, styling, and formatting web pages. Several new features have been added to CSS3 and it is supported by all modern web browsers.",
      viewMore: false,
    },
    {
      logo: "/images/sass.png",
      skill: "SASS",
      description: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called the indented syntax, uses a syntax similar to Haml.",
      viewMore: false,
    },
    {
      logo: "/images/dbms.png",
      skill: "DBMS",
      description: "A database management system (or DBMS) is essentially nothing more than a computerized data-keeping system. Users of the system are given facilities to perform several kinds of operations on such a system for either manipulation of the data in the database or the management of the database structure itself.",
      viewMore: false,
    },
    {
      logo: "/images/datastructureandalgorithm.png",
      skill: "Algorithm & Data Structures",
      description: "A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.",
      viewMore: false,
    },
    // {
    //   logo: "/images/python.png",
    //   skill: "Python",
    //   description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.",
    //   viewMore: false,
    // },
    {
      logo: "/images/ajax.png",
      skill: "AJAX",
      description: "Ajax is a set of web development techniques that uses various web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page.",
      viewMore: false,
    },
    {
      logo: "/images/j-query.png",
      skill: "jQuery",
      description: "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax. It is free, open-source software using the permissive MIT License.",
      viewMore: false,
    },
  ]);
  const [education, setEducation] = useState([
    {
      degree: "High School (10+2)",
      description: "<p>Universal Public School, Preet Vihar, Delhi-110092<br />Subject: Commerce with Maths</p>",
      timePeriod: "2014-15",
      certificate: "",
    },
    {
      degree: "B.Com",
      description: "<p>Delhi University<br />Specialization Subject: Computer Applications</p>",
      timePeriod: "2015-18",
      certificate: "",
    },
    {
      degree: "MCA",
      description: "<p>Galgotias University, Greater Noida<br />Specialization Subject: Software Development<br/>First Class with Distinction (9.07 CGPA)</p>",
      timePeriod: "2019-22",
      certificate: "/certificates/degree/MCA_Degree.pdf",
    },
  ]);
  const [certification, setCertification] = useState([
    {
      degree: "DOEACC 'O' Level",
      description: "<p>National Institute of Electronics & Information Technology (NIELIT)<br />First Class (6.8 CGPA)</p>",
      timePeriod: "2015-16",
      certificate: "",
    },
    {
      degree: "DOEACC 'A' Level",
      description: "<p>National Institute of Electronics & Information Technology (NIELIT)<br />First Class (6.8 CGPA)</p>",
      timePeriod: "2017-18",
      certificate: "",
    },
    {
      degree: "IoT (Internet of Things)",
      description: "<p>National Programme on Technology Enhanced Learning (NPTEL)<br />First Class with Distinction (98%)</p>",
      timePeriod: "2020",
      certificate: "/certificates/certifications/NPTEL_IoT.jpg",
    },
    {
      degree: "Front End | Full Stack Development",
      description: "<p>Coding Ninjas<br />Certificate of Excellence</p>",
      timePeriod: "2024",
      certificate: "/certificates/certifications/Bootcamp-Front_End-Full_Stack_Development-Excellence.pdf",
    },
  ]);
  const [honors, setHonors] = useState([
    {
      award: "Silver Medal in PG (MCA)",
      description: "<p>Galgotias University, Greater Noida<br />Second Highest CGPA Holder in complete batch of MCA (2019-22) as well as BCA+MCA (2017-22)<br/>First Class with Distinction (9.07 CGPA)</p>",
      timePeriod: "2019-22",
      certificate: "/certificates/honors/MCA_Silver_Medal.pdf",
    },
  ]);
  const [achievements, setAchievements] = useState([
    // {
    //   achievement: "Abcd",
    //   description: "<p>National Programme on Technology Enhanced Learning (NPTEL)<br />First Class with Distinction (98%)</p>",
    //   timePeriod: "2023",
    //   certificate: "",
    // },
  ]);
  const [publication, setPublication] = useState([
    {
      publication: "Traffic Management using Cloud Computing",
      description: "<p>Jaipur National University<br />Published & Presented a Research Paper in 5th International Conference on Innovation Advancements in Engineering & Technology (IAET-2022) in association with All India Council for Technical Education</p>",
      timePeriod: "2022",
      certificate: "",
    },
  ]);
  const [workExperience, setWorkExperience] = useState([
    {
      company_name: "",
      // company_name: "SYMB Technologies Pvt Ltd.",
      link: "https://www.symbtechnologies.com/",
      logo: "/images/symb_technologies_logo2.png",
      location: "Noida, Uttar Pradesh",
      work_type: "work_from_home",
      designation: "Software Engineer",
      timePeriod: "Jan 2022 - Present",
      work_experience_description: "<p><ul><li>Designed and developed Responsive Web Applications on the basis of client requirements using React JS, Next JS & Node JS</li><li>Assembled Web Application's back-end through Flask API (Python) by using Node JS</li><li>Streamlined Functionality to the Web Applications by using Java Script, JQuery, AJAX</li><li>Interpreted Client’s Requirement into Digital Solutions and delivering the Effective & Efficient Results into the Project By Communicating with the Client Directly</li><li>Integrated Payment Gateways on Web Applications for money transfers</li><li>Built Email Templates for Web Applications for providing Information about Customers & Clients Orders, Enquiries & Required Data</li><li>Coached interns and trained them on live company projects.</li><li>Upgraded existing applications to add new functionalities and remove bugs.</li><li>Coordinated with team members on live projects and got complete understanding of live company projects</li></ul></p>",
      work_experience_letter: "",
    },
  ]);
  const [companyProjects, setCompanyProjects] = useState([
    {
      company_name: "",
      // company_name: "SYMB Technologies Pvt Ltd.",
      company_description: "SYMB Technologies provide complete digital solutions to their clients in diverse sectors from Ecommerce, Solar & Banking to Manufacturing & Trading. SYMB Technologies helps agencies, startups, SMEs & large enterprises turn their ideas into reality by delivering solutions turn-key results on time and on budget.",
      link: "https://www.symbtechnologies.com/",
      logo: "/images/symb_technologies_logo2.png",
      darklogo: "/images/symb_technologies_logo4.png",
      location: "Noida, Uttar Pradesh",
      work_type: "work_from_home",
      company_projects: [
        {
          name: "FitCart Web Application (Customer Side)",
          link: "https://www.fitcart.com/",
          logo: "/images/fitcart-logo.png",
          timePeriod: "Jan 2022 - Nov 2022",
          description: "Implemented a full stack web application in which a customers can purchase products and subscribe to the services of company like personal diet plan, exercise schedules, queries, etc",
          highlightProject: true,
        },
        {
          name: "FitCart Web Application (Admin Side)",
          link: "https://admin.fitcart.com/",
          logo: "/images/fitcart-logo.png",
          timePeriod: "Jan 2022 - Nov 2022",
          description: "Implemented a full stack web application in which a company members can manage sales and purchase of products and manage their customers by providing them personal training services to the subscribed customers",
          highlightProject: true,
        },
        {
          name: "FidGuru Web Application (Customer Side)",
          link: "https://fidguru.in/",
          logo: "/images/fidguru-logo.png",
          timePeriod: "Nov 2022 - Feb 2023",
          description: "Implemented a full stack web application in which a users can find jobs by building their resume in both written as well as video format, can apply for jobs, and can schedule their interviews as well as can give real time online test to certify his/her skills to the interviewer",
          highlightProject: true,
        },
        {
          name: "FidGuru Web Application (Enterprise Side)",
          link: "https://enterprise.fidguru.in/",
          logo: "/images/fidguru-logo.png",
          timePeriod: "Nov 2022 - Feb 2023",
          description: "Implemented a full stack web application in which a users i.e. companies can post jobs,view candidates profile, take real time online exams to certify their skills, shortlist deserving candidates, schedule interviews with the candidates, view their resume in both written as well as video format and hire them for their own company",
          highlightProject: true,
        },
        {
          name: "FidGuru Web Application (Admin Side)",
          link: "https://admin.fidguru.in/",
          logo: "/images/fidguru-logo.png",
          timePeriod: "Nov 2022 - Feb 2023",
          description: "Implemented a full stack web application in which a company members can manage a job finding application for user services like managing posts for vacancies, creating question bank for particular topics, managing a test creating system to conduct real time test for users, managing user profiles and their video resumes, conducting online interviews and managing their different notifications for vacancies, interviews, etc",
          highlightProject: true,
        },
      ],
    },
  ]);
  const [personalProjects, setPersonalProjects] = useState([
    {
      name: "World Countries Details",
      link: "https://naughty-mcclintock-3f26b0.netlify.app/",
      gitLink: "https://gitlab.com/AdityaKapoor234/assignment-3-24-jan-2022-country-details",
      logo: "",
      timePeriod: "Jan 2022 - Feb 2022",
      description: "Implemented a Web Application in HTML5, CSS3, Java Script & AJAX with Rest API Integration in which user can see the information about all the countries in the world, search them by their names, open their maps, view their information like their population, currency, languages, neighbour countries, capital, time zone, etc",
      highlightProject: true,
      type: "html_css_javascript",
    },
    {
      name: "To Do List",
      link: "https://competent-bartik-e545d6.netlify.app/",
      gitLink: "https://gitlab.com/AdityaKapoor234/symb-assignment-2-to-do-list-21-jan-2022",
      logo: "",
      timePeriod: "Jan 2022 - Feb 2022",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can create a to do list, put the particular items into 3 different categories, delete a particular item separately or by selecting multiple items together or delete the complete list all at once",
      highlightProject: false,
      type: "html_css_javascript",
    },
    {
      name: "Photogram",
      link: "https://gilded-sundae-6c7d6e.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/photogram",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can view already existing post and create new posts also",
      highlightProject: true,
      type: "html_css_javascript",
    },
    {
      name: "Quiz Game",
      link: "https://coruscating-truffle-0aa211.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/quiz_game",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can play a quiz game and earn points (score)",
      highlightProject: true,
      type: "html_css_javascript",
    },
    {
      name: "Modifying Blog Page",
      link: "https://moonlit-quokka-7ca747.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/blog_up_down_delete",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can read existing blogs and move them up down or delete them",
      highlightProject: true,
      type: "html_css_javascript",
    },
    {
      name: "Seat Booking",
      link: "https://singular-custard-a0b206.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/seat_booking_app",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can select their seats for a particular movie to watch a particular film and also calculate the bill for their seats.",
      highlightProject: true,
      type: "html_css_javascript",
    },
    // {
    //   name: "Instrument Player",
    //   link: "",
    //   gitLink: "",
    //   logo: "",
    //   timePeriod: "Jan 2022 - Feb 2022",
    //   description: "",
    //   highlightProject: false,
    //   type: "html_css_javascript",
    // },
    {
      name: "Alarm Clock",
      link: "https://capable-banoffee-98cbca.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/alarm-clock",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can check time and set many alarms",
      highlightProject: true,
      type: "html_css_javascript",
    },
    {
      name: "Typing Speed Test",
      link: "https://curious-cactus-8c6e45.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/speed_typing_test",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can take a typing test and check his/her typing speed & accuracy",
      highlightProject: true,
      type: "html_css_javascript",
    },
    // {
    //   name: "Movie Recommendation",
    //   link: "",
    //   gitLink: "",
    //   logo: "",
    //   timePeriod: "Jan 2022 - Feb 2022",
    //   description: "",
    //   highlightProject: false,
    //   type: "html_css_javascript",
    // },
    // {
    //   name: "Pokemon Game",
    //   link: "",
    //   gitLink: "",
    //   logo: "",
    //   timePeriod: "Jan 2022 - Feb 2022",
    //   description: "",
    //   highlightProject: false,
    //   type: "html_css_javascript",
    // },
    // {
    //   name: "E-Commerce Website",
    //   link: "",
    //   gitLink: "",
    //   logo: "",
    //   timePeriod: "Jan 2022 - Feb 2022",
    //   description: "",
    //   highlightProject: false,
    //   type: "html_css_javascript",
    // },
    {
      name: "Music Player App",
      link: "https://melodious-halva-37904a.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/music_player_capstone_project",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5, CSS3 & Java Script in which user can listen various songs, search those songs & playlists, and make their own playlist also to listen those songs in particular order mentioned by the user.",
      highlightProject: true,
      type: "html_css_javascript",
    },
    {
      name: "Music Player App (UI)",
      link: "https://gregarious-souffle-97f0e1.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/music_player_ui_capstone_project",
      logo: "",
      timePeriod: "Jan 2024",
      description: "Implemented a Web Application in HTML5 & CSS3 in which user can view a UI for Music Player.",
      highlightProject: false,
      type: "html_css",
    },
    {
      name: "Stock Market Analysis",
      link: "https://eloquent-marzipan-f5a068.netlify.app/",
      gitLink: "https://github.com/AdityaKapoor234/stock_market_analysis_capstone_project",
      logo: "",
      timePeriod: "Feb 2024",
      description: "Implemented a Web Application in HTML5, CSS3, Java Script & AJAX with Rest API Integration in which user keep a watch on various different stocks & their performance over different time periods and know about the Company's Description, Profit & Book Value over Pictorial Representation (Chart).",
      highlightProject: true,
      type: "html_css_javascript",
    },
    {
      name: "JavaScript UI with SideBar Menu",
      link: "https://unruffled-mahavira-2548ae.netlify.app/",
      gitLink: "https://gitlab.com/-/ide/project/AdityaKapoor234/assignment-1-18-jan-2022/tree/main/-/Symb%20Assignment%201%2018%20Jan.html/",
      logo: "",
      timePeriod: "Jan 2022 - Feb 2022",
      description: "Implemented a Web Application UI in HTML5 & CSS3 which consist of a simple UI with a Contact Us Form & Side Bar Menu",
      highlightProject: false,
      type: "html_css",
    },
  ]);

  const skillDescriptionView = (index) => {
    let skill = skills;

    skill[index].viewMore = !skill[index].viewMore;

    setSkills([...skill]);
  }


  const changeTheme = (value) => {
    setTheme(value);

    if (value === true) {
      localStorage.setItem("AdityaKapoorPortfolioTheme", "Dark");
    } else {
      localStorage.setItem("AdityaKapoorPortfolioTheme", "light");
    }
  }

  useEffect(() => {
    let date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    let exprience = parseInt(date.getFullYear()) - 2022;
    let exprienceMonth = parseInt(date.getMonth());

    setExperienceYears(exprience);
    setExperienceMonths(exprienceMonth);

    if (localStorage.getItem("AdityaKapoorPortfolioTheme") === "Dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }
    
  }, []);


  return (
    <>
      {/* <Head>
        <title>Aditya Kapoor Portfolio</title>
        <meta name="description" content="Aditya Kapoor Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/portfolio_icon.png" />
      </Head> */}
      <main className={theme === false ? "light" : "dark"} id="header">
        <Layout
          layoutTheme={theme}
          changeTheme={changeTheme}
          honorsTab={honors?.length > 0 ? true : false}
          achievementsTab={achievements?.length > 0 ? true : false}
          publicationTab={publication?.length > 0 ? true : false}
        >
          <Introduction
            layoutTheme={theme}
            profileExperienceYears={experienceYears}
            profileExperienceMonths={experienceMonths}
          />
          <AboutUs
            layoutTheme={theme}
          />
          <Skills
            layoutTheme={theme}
            profileSkills={skills}
            skillDescriptionView={(value) => skillDescriptionView(value)}
          />
          <Qualification
            layoutTheme={theme}
            profileEducation={education}
            profileCertification={certification}
            profileHonors={honors}
            profileAchievements={achievements}
            profilePublication={publication}
          />
          <Experience
            layoutTheme={theme}
            profileSettings={settings}
            profileWorkExperience={workExperience}
          />
          <Projects
            layoutTheme={theme}
            profileSettings={settings}
            profileCompanyProjects={companyProjects}
            profilePersonalProjects={personalProjects}
          />
          <Contact
            layoutTheme={theme}
          />
        </Layout>
      </main >
    </>
  )
}
