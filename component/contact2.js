/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactComponent(props) {
    const [contactName, setContactName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactSubject, setContactSubject] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const [isContactName, setIsContactName] = useState(false);
    const [isContactPhone, setIsContactPhone] = useState(false);
    const [isContactEmail, setIsContactEmail] = useState(false);
    const [isContactSubject, setIsContactSubject] = useState(false);
    const [isContactMessage, setIsContactMessage] = useState(false);

    const [theme, setTheme] = useState(props?.layoutTheme);

    const ValidateEmail = (mail) => {
        // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        return /^[a-zA-Z]{1}\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            mail
        )
    };

    const ValidateName = (name) => {
        // return /[A-Za-z]+$/.test(
        return /^[a-zA-Z ]*$/.test(
            name
        )
    }

    const validateData = () => {

        if (!contactName || !ValidateName(contactName) || contactName.replace(/\s/g, "").length <= 0 || !contactName.match(/^[aA-zZ\s]+$/)) {
            toast.error("Please Enter Your Full Name");
            return false;
        }

        if (!contactPhone || contactPhone.replace(/\s/g, "").length <= 0) {
            toast.error("Please Enter Your Contact Number");
            return false;
        }

        if (contactPhone) {
            if (!contactPhone.match(/^[0-9]{10}$/)) {
                toast.error("Please Enter Your Valid Contact Number");
                return false;
            }
        }

        if (!contactEmail || contactEmail.replace(/\s/g, "").length <= 0) {
            toast.error("Please Enter Your E-Mail ID");
            return false;
        }

        if (contactEmail) {
            if (!ValidateEmail(contactEmail)) {
                toast.error("Please Enter Your Valid E-Mail ID");
                return false;
            }
        }

        if (!contactSubject || contactSubject.replace(/\s/g, "").length <= 0) {
            toast.error("Please Enter Your Purpose of Enquiry");
            return false;
        }

        if (!contactMessage || contactMessage.replace(/\s/g, "").length <= 0) {
            toast.error("Please Enter Your Brief Query");
            return false;
        }

        return true
    };

    const submitContactForm = () => {
        if (validateData()) {
            toast.success("Form submitted successfully!!!");
            setContactName('');
            setContactPhone('');
            setContactEmail('');
            setContactSubject('');
            setContactMessage('');
        }
    }

    useEffect(() => {
        setTheme(props?.layoutTheme);
    }, [props]);


    return (
        <>
            <main className={theme === false ? "light" : "dark"}>
                <div className="contact" id="contact">
                    <div className="contactHeading">
                        Contact <span className="textHighlight">Me</span>
                    </div>
                    <div className="contactDescription">
                        Get in Touch
                    </div>
                    <div className="row smallMobNotVisi">
                        <div className="col contactIconDivHover" onClick={() => window.open("https://web.whatsapp.com/send?phone=9873268197")}>
                            <div className="contactIconDiv">
                                <PhoneIcon className="contactIcon" />
                            </div>
                            <div className="contactIconHead textHighlight">
                                Call
                            </div>
                            <div className="contactIconDescription">
                                +91 9873268197
                            </div>
                        </div>
                        <div className="col contactIconDivHover" onClick={() => Router.push("mailto:kapoorabhay234.ak@gmail.com")}>
                            <div className="contactIconDiv">
                                <EmailIcon className="contactIcon" />
                            </div>
                            <div className="contactIconHead textHighlight">
                                Mail
                            </div>
                            <div className="contactIconDescription">
                                kapoorabhay234.ak@gmail.com
                            </div>
                        </div>
                        <div className="col contactIconDivHover" onClick={() => window.open("https://www.google.com/maps/place/Delhi")}>
                            <div className="contactIconDiv">
                                <LocationOnIcon className="contactIcon" />
                            </div>
                            <div className="contactIconHead textHighlight">
                                Address
                            </div>
                            <div className="contactIconDescription">
                                Delhi, India
                            </div>
                        </div>
                    </div>
                    <div className="smallMobVisi">
                        <div className="contactIconDivHoverRow">
                            <div className="contactIconDivHover mb-4" onClick={() => window.open("https://web.whatsapp.com/send?phone=9873268197")}>
                                <div className="contactIconDiv">
                                    <PhoneIcon className="contactIcon" />
                                </div>
                                <div className="contactIconHead textHighlight">
                                    Call
                                </div>
                                <div className="contactIconDescription">
                                    +91 9873268197
                                </div>
                            </div>
                            <div className="contactIconDivHover mb-4" onClick={() => Router.push("mailto:kapoorabhay234.ak@gmail.com")}>
                                <div className="contactIconDiv">
                                    <EmailIcon className="contactIcon" />
                                </div>
                                <div className="contactIconHead textHighlight">
                                    Mail
                                </div>
                                <div className="contactIconDescription">
                                    kapoorabhay234.ak@gmail.com
                                </div>
                            </div>
                            <div className="contactIconDivHover" onClick={() => window.open("https://www.google.com/maps/place/Delhi")}>
                                <div className="contactIconDiv">
                                    <LocationOnIcon className="contactIcon" />
                                </div>
                                <div className="contactIconHead textHighlight">
                                    Address
                                </div>
                                <div className="contactIconDescription">
                                    Delhi, India
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <div className="login-form">
                            <label>Full Name<span className="mandatory-star">*</span></label>
                            <input
                                type="text"
                                maxLength="225"
                                placeholder="Enter Full Name"
                                value={contactName}
                                onChange={(e) => {
                                    setContactName(e.target.value);
                                }}
                            />
                            {isContactName === true ? <span className="error-msg">Please Enter Your Full Name</span> : ""}
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="login-form">
                                    <label>Contact Number<span className="mandatory-star">*</span></label>
                                    <input
                                        type="text"
                                        maxLength="225"
                                        placeholder="Enter Contact Number"
                                        value={contactPhone}
                                        onChange={(e) => {
                                            setContactPhone(e.target.value);
                                        }}
                                    />
                                    {isContactPhone === true ? <span className="error-msg">Please Enter Your Contact Number</span> : ""}
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="login-form">
                                    <label>E-Mail<span className="mandatory-star">*</span></label>
                                    <input
                                        type="text"
                                        maxLength="225"
                                        placeholder="Enter E-Mail"
                                        value={contactEmail}
                                        onChange={(e) => {
                                            setContactEmail(e.target.value);
                                        }}
                                    />
                                    {isContactEmail === true ? <span className="error-msg">Please Enter Your E-Mail</span> : ""}
                                </div>
                            </div>
                        </div>
                        <div className="login-form">
                            <label>Purpose of Enquiry<span className="mandatory-star">*</span></label>
                            <input
                                type="text"
                                maxLength="225"
                                placeholder="Enter Purpose of Enquiry"
                                value={contactSubject}
                                onChange={(e) => {
                                    setContactSubject(e.target.value);
                                }}
                            />
                            {isContactSubject === true ? <span className="error-msg">Please Enter Your Purpose of Enquiry</span> : ""}
                        </div>
                        <div className="login-form">
                            <label>Please Brief Your Query<span className="mandatory-star">*</span></label>
                            <textarea
                                type="text"
                                maxLength="225"
                                rows="15"
                                placeholder="Enter Query..."
                                value={contactMessage}
                                onChange={(e) => {
                                    setContactMessage(e.target.value);
                                }}
                            />
                            {isContactMessage === true ? <span className="error-msg">Please Enter Your Brief Query</span> : ""}
                        </div>
                        <div className="login-form py-4 d-flex justify-content-center">
                            <button
                                type="submit"
                                className="custom-btn"
                                onClick={() => { submitContactForm() }}
                            >
                                Submit
                                {/* <ArrowForwardIosIcon className="arrow-icon" /> */}
                            </button>
                        </div>

                    </div>
                </div>
            </main >
        </>
    )
}
