/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Head from 'next/head'

import { honors, achievements, publication } from "./data";

import Layout from "../component/layout/layout";
import Introduction from "../component/introduction";
import AboutUs from "../component/about-us";
import Skills from "../component/skills";
import Qualification from "../component/qualifications";
import Experience from "../component/experience";
import Projects from "../component/projects";
import Contact from "../component/contact";


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
    {
      logo: "/images/redux.png",
      skill: "Redux Toolkit",
      description: "Redux Toolkit is primarily used to streamline and simplify Redux development by providing a more intuitive and efficient approach to managing application state. It combines several commonly used Redux packages, like Redux DevTools and Redux Thunk, into a single, well-defined library. This reduces boilerplate code and makes Redux more accessible for beginners and more productive for experienced developers.",
      viewMore: false,
    },
    {
      logo: "/images/java-spring-boot.png",
      skill: "Java Spring Boot",
      description: "Java Spring Boot (Spring Boot) is a tool that makes developing web application and microservices with Spring Framework faster and easier through three core capabilities: Autoconfiguration. An opinionated approach to configuration. The ability to create standalone applications.",
      viewMore: false,
    },
    {
      logo: "/images/nodejs.png",
      skill: "Node.JS",
      description: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
      viewMore: false,
    },
    {
      logo: "/images/mongodb.png",
      skill: "MongoDB",
      description: "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",
      viewMore: false,
    },
    {
      logo: "/images/express-js.png",
      skill: "Express.js",
      description: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
      viewMore: false,
    },
    {
      logo: "/images/java.png",
      skill: "Java",
      description: "Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
      viewMore: false,
    },
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
    //   logo: "/images/c-language.png",
    //   skill: "C",
    //   description: "C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/c++.png",
    //   skill: "C++",
    //   description: "C++ is a versatile, statically-typed, middle-level programming language. It is known for its efficiency and performance, often used in game development, virtual reality, and high-frequency trading.",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/c-sharp.png",
    //   skill: "C#",
    //   description: "C# is a powerful, object-oriented programming language developed by Microsoft. It's a key component of the .NET framework and is used to build a wide variety of applications, including web apps, desktop apps, mobile apps, and games. C# combines the strengths of languages like C and C++ with the simplicity of Java and Visual Basic. ",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/dot-net.png",
    //   skill: ".Net",
    //   description: ".NET is a free, cross-platform, open-source development platform from Microsoft for building modern apps and services. It's a secure and reliable platform that supports various languages, editors, and libraries, enabling developers to build applications for web, mobile, desktop, games, and IoT.",
    //   viewMore: false,
    // },
    // {
    //   logo: "/images/dot-net-core.png",
    //   skill: ".Net Core",
    //   description: ".NET Core, now officially called .NET, is a cross-platform, open-source framework for building a wide range of applications, including web apps, services, and APIs. It's a successor to the older .NET Framework, offering a modern and versatile platform for developers. ASP.NET Core is a key part of .NET, focusing on web development.",
    //   viewMore: false,
    // },
    {
      logo: "/images/git.png",
      skill: "Git",
      description: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
      viewMore: false,
    },
    // {
    //   logo: "/images/jira.png",
    //   skill: "JIRA",
    //   description: "Jira Software is an agile project management tool that supports any agile methodology and a proprietary product developed by Atlassian that allows bug tracking, issue tracking and agile project management. Jira is used by a large number of clients & users globally for project, time, requirements, task, bug, change, code, test, release, sprint management.",
    //   viewMore: false,
    // },
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

    // setExperienceYears(2);
    // setExperienceMonths(0);

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
          />
          <Experience
            layoutTheme={theme}
          />
          <Projects
            layoutTheme={theme}
          />
          <Contact
            layoutTheme={theme}
          />
        </Layout>
      </main >
    </>
  )
}
