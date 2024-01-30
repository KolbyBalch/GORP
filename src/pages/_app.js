import Layout from '@components/Layout';
import '@styles/globals.css'
import { useEffect, useState } from 'react'
import netlifyAuth, { useStore } from '../components/netlifyAuth.js'

function Application({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
    })
  }, [loggedIn])

  useEffect(() => {
    console.log(useStore.getState().user)
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application
