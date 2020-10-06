import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Account.module.css'
import Layout, { siteTitle } from '../../components/layout'
import { Input, DatePicker, Menu, Dropdown, Button } from 'antd'
import Sidebar from '../../components/sidebar'

export default function Verify() {

    function getCodeBoxElement(index) {
        return document.getElementById('digit-' + index);
    }

    function onKeyUpEvent(index, event) {
        const eventCode = event.which || event.keyCode;
        if (getCodeBoxElement(index).value.length === 1) {
            if (index !== 4) {
                getCodeBoxElement(index + 1).focus();
            } else {
                getCodeBoxElement(index).blur();
                // Submit code
                console.log('submit code ');
            }
        }
        if (eventCode === 8 && index !== 1) {
            getCodeBoxElement(index - 1).focus();
        }
    }
    
    function onFocusEvent(index) {
        for (item = 1; item < index; item++) {
            const currentElement = getCodeBoxElement(item);
            if (!currentElement.value) {
                currentElement.focus();
                break;
            }
        }
    }

    return (
        <Layout>
            <div className="page account-page verify-account-page">
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <div className="page-title">
                    <h1 className="text-4xl">Verify Email</h1>
                </div>
                <div className="page-body">

                    <div asp-validation-summary="ModelOnly" className="message-error"></div>
                    <div className="fieldset">
                        <div className="form-fields">
                            <div className="email-sent">
                                <form method="post">
                                    <div className="title">
                                        <h4 style={{ fontSize: "small", textAlign: "center", margin: "auto", width: "40%" }}>
                                            Input your email address. A verification
                                            number will be sent to verify your email.
                                </h4>
                                    </div>
                                    <div className="body">
                                        <div className="inputs">
                                            <label>Email</label>
                                            {/* <input asp-for="OldPassword" /> */}

                                            {/* <span asp-validation-for="OldPassword"></span> */}
                                        </div>
                                        <div className="buttons" style={{ paddingTop: "25px" }}>
                                            <input type="submit" className="button-1 change-password-button" value="SEND CODE" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="otp">
                                <h5>Verification Code</h5>
                                <form method="get" data-group-name="digits" data-autosubmit="false" autocomplete="off">
                                    <input id="digit-1" name="digit-1" data-next="digit-2" className="input" type="text" maxlength="1" onkeyup="onKeyUpEvent(1, event)" onfocus="onFocusEvent(1)" />
                                    <input id="digit-2" name="digit-2" data-next="digit-3" className="input" type="text" maxlength="1" onkeyup="onKeyUpEvent(2, event)" onfocus="onFocusEvent(2)" />
                                    <input id="digit-3" name="digit-3" data-next="digit-4" className="input" type="text" maxlength="1" onkeyup="onKeyUpEvent(3, event)" onfocus="onFocusEvent(3)" />
                                    <input id="digit-4" name="digit-4" data-next="digit-5" className="input" type="text" maxlength="1" onkeyup="onKeyUpEvent(4, event)" onfocus="onFocusEvent(4)" />

                                    <div className="buttons" style={{ paddingTop: "25px" }}>
                                        <input type="submit" className="button-1 verify-account-page" value="Verify Email" style={{ textTransform: "unset" }} />
                                    </div>
                                    <h4 style={{ fontSize: "small", textAlign: "center" }}>
                                        Waiting for xx seconds to resend verification code
                            </h4>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

        // <script asp-location="Footer">
        //     function getCodeBoxElement(index) {
        //         return document.getElementById('digit-' + index);
        //     }
        //     function onKeyUpEvent(index, event) {
        //         const eventCode = event.which || event.keyCode;
        //         if (getCodeBoxElement(index).value.length === 1) {
        //             if (index !== 4) {
        //                 getCodeBoxElement(index + 1).focus();
        //             } else {
        //                 getCodeBoxElement(index).blur();
        //                 // Submit code
        //                 console.log('submit code ');
        //             }
        //         }
        //         if (eventCode === 8 && index !== 1) {
        //             getCodeBoxElement(index - 1).focus();
        //         }
        //     }
        //     function onFocusEvent(index) {
        //         for (item = 1; item < index; item++) {
        //             const currentElement = getCodeBoxElement(item);
        //             if (!currentElement.value) {
        //                 currentElement.focus();
        //                 break;
        //             }
        //         }
        //     }
        // </script>
    )
}