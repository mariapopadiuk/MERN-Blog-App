import { createContext } from 'react'

function noop() { }

export const Context = createContext({
  token: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
  userId: null
});