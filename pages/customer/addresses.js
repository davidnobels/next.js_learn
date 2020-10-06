import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Account.module.css'
import Layout, { siteTitle } from '../../components/layoutOne'
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
                    <div className="w-3/12" style={{ background: "#F5F5F5"}}>
                        <Sidebar />
                    </div>
                    <div className="account w-9/12 pt-10 pb-20" style={{ background: "#F5F5F5" }}>
                        <div>
                            <div className="inline-block w-full px-10">
                                <div className="float-left block">
                                    <h1 className="text-4xl">Address</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}