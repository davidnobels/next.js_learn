import React, { useState } from 'react'
import Head from 'next/head'
import LayoutOne, { siteTitle } from '../../components/layoutOne'
import Link from 'next/link'

export default function MenuProfile() {

    return (
        <LayoutOne>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="w-full" style={{ background: "#F5F5F5" }}>
                <div className="">
                    <h1 className="text-4xl pt-8 pl-10">
                        My Account
                    </h1>
                </div>
                <div>
                    <div className="listboxOne">
                        <button className="btnmenu">
                            <div className="grid-img">
                                <img src="/images/assets/myOrder.png" />
                            </div>
                            <div className="grid-menu">
                                <a className="title-membership">My Orders</a>
                                <a className="">View and track your orders . Tracking specific shipments are also shown here.</a>
                            </div>
                        </button>
                        <button class="btnmenu" >
                            <div class="grid-img">
                                <img src="/images/assets/myWishlist.png" />
                            </div>
                            <div class="grid-menu">
                                <a class="title-membership">My Wishlist</a>
                                <a class="">View your product wishlist and add them in to your cart to continue the transaction.</a>
                            </div>
                        </button>
                        <Link href="/customer/addresses">
                        <button class="btnmenu">
                            <div class="grid-img">
                                <img src="/images/assets/AddreessBook.png" />
                            </div>
                            <div class="grid-menu">
                                <a class="title-membership">Address Book</a>
                                <a class="">View or create your address book list. You can select one of them in your shipping address of  transaction.</a>
                            </div>
                        </button>
                        </Link>
                        <Link href="/customer/info">
                            <button class="btnmenu">
                                <div class="grid-img">
                                    <img src="/images/assets/accountDetail.png" />
                                </div>
                                <div class="grid-menu">
                                    <a class="title-membership">Account Detail</a>
                                    <a class="">View and manage your account, such us your personal information. Also change your password here.</a>
                                </div>
                            </button>
                        </Link>
                        <button class="btnmenu">
                            <div class="grid-img">
                                <img src="/images/assets/myMembership.png" />
                            </div>
                            <div class="grid-menu">
                                <a class="title-membership">My Membership</a>
                                <a class="">View and track your orders . Tracking specific shipments are also shown here.</a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </LayoutOne>
    )
}