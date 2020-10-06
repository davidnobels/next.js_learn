import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

const name = 'Anggara Diebrata'
export const siteTitle = 'BateeqShop'

export default function Layout({ children }) {
    return (

        <div className="flex flex-col min-h-screen tracking-wide">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header />
            <div style={{backgroundColor:"#F5F5F5"}}>
                <div className="container mx-auto">
                    <main>{children}</main>
                </div>
            </div>
            <Footer />
        </div>
    )
}