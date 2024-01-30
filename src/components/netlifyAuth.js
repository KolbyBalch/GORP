import netlifyIdentity from 'netlify-identity-widget'
import { create } from 'zustand'

export const useStore = create(() => ({ user: null }))

export const login = () => {
  netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
      setUser(user)
      netlifyAuth.closeModal()
  })
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
      useStore.setState({ user: user })
    })
    netlifyIdentity.init()
  },
  authenticate(callback) {
    this.isAuthenticated = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
      this.user = user
      callback(user)
      useStore.setState({ user: user })
      netlifyIdentity.close()
    })
  },
  signout(callback) {
    this.isAuthenticated = false
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      this.user = null
      useStore.setState({ user: null })
      callback()
    })
  },
}

export default netlifyAuth