import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Account.module.css'
import Layout, { siteTitle } from '../../components/layout'
import { Input, DatePicker, Menu, Dropdown, Button } from 'antd'
import Sidebar from '../../components/sidebar'

export default function Address() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <div className="form-fields flex">
                    <div className="w-3/12">
                        <Sidebar />
                    </div>
                    <div className="account w-9/12 pt-10 pb-20" style={{ background: "#F5F5F5" }}>
                        <div>
                            <div className="inline-block w-full px-10">
                                <div className="float-left block">
                                    <h1 className="text-4xl">Account Detail</h1>
                                </div>
                            </div>
                            <div className="bg-white shadow-bxShadow rounded m-10 p-20 my-0">
                                <h1 className="text-3xl">Change Password</h1>
                                <div className="wrapper-account">
                                    <div className="inputs">
                                        <label className="text-lg font-semibold">Current Password</label><br />
                                        <Input type="password" style={{width:"60%"}}/>
                                    </div>
                                    <div className="inputs">
                                        <label className="text-lg font-semibold">New Password</label><br />
                                        <Input type="password" style={{width:"60%"}}/>
                                    </div>
                                    <div className="inputs">
                                        <label className="text-lg font-semibold">Confirm New Password</label><br />
                                        <Input type="password" style={{width:"60%"}}/>
                                    </div>
                                    <div className="pt-8 text-center">
                                    <Button className={styles.buttonSave}>SAVE PASSWORD</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}