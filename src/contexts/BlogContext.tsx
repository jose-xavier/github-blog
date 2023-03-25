import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { api } from '../lib/axios'

export interface User {
  name: string
  followers: number
  login: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
}

interface BlogContextType {
  user: User
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [user, setUser] = useState({} as User)

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    const response = await api.get('/users/jose-xavier').then((res) => res.data)

    setUser(response)
  }

  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  )
}
