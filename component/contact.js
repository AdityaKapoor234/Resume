/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactName: "",
            contactPhone: "",
            contactEmail: "",
            contactSubject: "",
            contactMessage: "",

            errors: {},

            theme: props?.layoutTheme,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            prevState.layoutTheme !== nextProps.layoutTheme
        ) {
            return {
                theme: nextProps?.layoutTheme,
            };
        }
        return null;
    }

    ValidateEmail = (mail) => {
        // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        return /^[a-zA-Z]{1}\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            mail
        )
    };

    ValidateName = (name) => {
        // return /[A-Za-z]+$/.test(
        return /^[a-zA-Z ]*$/.test(
            name
        )
    }

    validateData = () => {
        let isValid = true;
        let errors = {};

        if (!this.state.contactName || this.state.contactName.replace(/\s/g, "").length <= 0) {
            isValid = false;
            errors["contactName"] = "Please Enter Your Full Name";
        }

        if (this.state.contactName) {
            if (!this.ValidateName(this.state.contactName) || !this.state.contactName.match(/^[aA-zZ\s]+$/)) {
                isValid = false;
                errors["contactName"] = "Please Enter Your Valid Full Name";
            }
        }

        if (!this.state.contactPhone || this.state.contactPhone.replace(/\s/g, "").length <= 0) {
            isValid = false;
            errors["contactPhone"] = "Please Enter Your Contact Number";
        }

        if (this.state.contactPhone) {
            if (!this.state.contactPhone.match(/^[0-9]{10}$/)) {
                isValid = false;
                errors["contactPhone"] = "Please Enter Your Valid Contact Number";
            }
        }

        if (!this.state.contactEmail || this.state.contactEmail.replace(/\s/g, "").length <= 0) {
            isValid = false;
            errors["contactEmail"] = "Please Enter Your E-Mail ID";
        }

        if (this.state.contactEmail) {
            if (!this.ValidateEmail(this.state.contactEmail)) {
                isValid = false;
                errors["contactEmail"] = "Please Enter Your Valid E-Mail ID";
            }
        }

        if (!this.state.contactSubject || this.state.contactSubject.replace(/\s/g, "").length <= 0) {
            isValid = false;
            errors["contactSubject"] = "Please Enter Your Purpose of Enquiry";
        }

        if (!this.state.contactMessage || this.state.contactMessage.replace(/\s/g, "").length <= 0) {
            isValid = false;
            errors["contactMessage"] = "Please Enter Your Brief Query";
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    };

    submitContactForm = () => {
        if (this.validateData()) {
            toast.success("Query submitted successfully!!!");
            this.setState({
                contactName: "",
                contactPhone: "",
                contactEmail: "",
                contactSubject: "",
                contactMessage: "",
            });
        }
    }

    render() {
        return (
            <>
                <main className={this.state.theme === false ? "light" : "dark"}>
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
                        {/* <div className="contactForm">
                            <div className="login-form">
                                <label>Full Name<span className="mandatory-star">*</span></label>
                                <input
                                    type="text"
                                    maxLength="225"
                                    placeholder="Enter Full Name"
                                    value={this.state.contactName}
                                    onChange={(e) => {
                                        this.setState({ contactName: e.target.value });
                                    }}
                                />
                                {this.state.errors["contactName"] ? <div className="error-msg"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{this.state.errors["contactName"]}</div> : ""}
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="login-form">
                                        <label>Contact Number<span className="mandatory-star">*</span></label>
                                        <input
                                            type="text"
                                            maxLength="225"
                                            placeholder="Enter Contact Number"
                                            value={this.state.contactPhone}
                                            onChange={(e) => {
                                                this.setState({ contactPhone: e.target.value });
                                            }}
                                        />
                                        {this.state.errors["contactPhone"] ? <div className="error-msg"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{this.state.errors["contactPhone"]}</div> : ""}
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="login-form">
                                        <label>E-Mail<span className="mandatory-star">*</span></label>
                                        <input
                                            type="text"
                                            maxLength="225"
                                            placeholder="Enter E-Mail"
                                            value={this.state.contactEmail}
                                            onChange={(e) => {
                                                this.setState({ contactEmail: e.target.value });
                                            }}
                                        />
                                        {this.state.errors["contactEmail"] ? <div className="error-msg"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{this.state.errors["contactEmail"]}</div> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="login-form">
                                <label>Purpose of Enquiry<span className="mandatory-star">*</span></label>
                                <input
                                    type="text"
                                    maxLength="225"
                                    placeholder="Enter Purpose of Enquiry"
                                    value={this.state.contactSubject}
                                    onChange={(e) => {
                                        this.setState({ contactSubject: e.target.value });
                                    }}
                                />
                                {this.state.errors["contactSubject"] ? <div className="error-msg"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{this.state.errors["contactSubject"]}</div> : ""}
                            </div>
                            <div className="login-form">
                                <label>Please Brief Your Query<span className="mandatory-star">*</span></label>
                                <textarea
                                    type="text"
                                    maxLength="225"
                                    rows="15"
                                    placeholder="Enter Query..."
                                    value={this.state.contactMessage}
                                    onChange={(e) => {
                                        this.setState({ contactMessage: e.target.value });
                                    }}
                                />
                                {this.state.errors["contactMessage"] ? <div className="error-msg"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{this.state.errors["contactMessage"]}</div> : ""}
                            </div>
                            <div className="login-form py-4 d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="custom-btn"
                                    onClick={() => { this.submitContactForm() }}
                                >
                                    Submit
                                    // <ArrowForwardIosIcon className="arrow-icon" />
                                </button>
                            </div>

                        </div> */}
                    </div>
                </main >
            </>
        )
    }
}