import Head from 'next/head'
import Footer from "./Footer";
import NavBar from './NavBar';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>GORP game</title>
                <link rel="icon" href="/" type="image/png" sizes="any" />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}