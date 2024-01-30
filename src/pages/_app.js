import Layout from '@components/Layout';
import '@styles/globals.css'
import { useEffect, useState } from 'react'
import netlifyAuth from '../../netlifyAuth.js'

function Application({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      console.log(user)
      setLoggedIn(!!user)
    })
  }, [loggedIn])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application
