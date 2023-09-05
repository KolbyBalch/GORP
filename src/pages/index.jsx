import Head from 'next/head'
import Footer from 'src/components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Journey Church MS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title" >Welcome to my app!</h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

    </div>
  )
}
