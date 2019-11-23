const isBrowser = typeof window !== `undefined`

export const isLoggedIn = () => {
  if (!isBrowser) return false

  return window.localStorage.isLoggedInConnexionsBlog === "true" // localStorage only stores strings, no booleans
}

export const handleLogin = password => {
  if (!isBrowser) return false

  if (password === process.env.GATSBY_APP_PASSWORD) {
    window.localStorage.isLoggedInConnexionsBlog = true
    return true
  }

  return false
}

export const logout = callback => {
  if (!isBrowser) return

  window.localStorage.isLoggedInConnexionsBlog = JSON.stringify(false)
  callback()
}
