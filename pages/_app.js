/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import "bootstrap/dist/css/bootstrap.min.css"
// import '@/styles/globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../styles/globals.scss';
import '../styles/dashboard-styles.scss';
import "../styles/dark-mode-styles.scss";
import '../styles/light-mode-styles.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
    <Head>
      <title>Aditya Kapoor Portfolio</title>
      {/* <link rel="icon" href="/favico.ico" /> */}
      <meta name="description" content="Aditya Kapoor Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/portfolio_icon.png" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/brands.min.css"
      />
      <link rel="stylesheet" href="https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/free.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/brand.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/flag.min.css" />

      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />




    </Head>
    <ToastContainer />
    {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
    {/* <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />; */}
    <Component {...pageProps} />
  </React.Fragment>
}

export default MyApp
