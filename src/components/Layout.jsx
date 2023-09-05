import Head from 'next/head'
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Journey Church MS</title>
                <link rel="icon" href="/journey-church-logo-circle.png" type="image/png" sizes="any" />
            </Head>
            <main>{children}</main>
            <Footer />
        </>
    )
}