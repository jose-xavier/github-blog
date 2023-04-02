import { createContext, ReactNode, useState, useEffect } from 'react'
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

interface Issue {
  id: number
  title: string
  body: string
  coments: string
  html_url: string
  created_at: string
}

interface BlogContextType {
  user: User
  issues: Issue[]
  fetchSearchIssues: (query: string) => Promise<void>
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [user, setUser] = useState({} as User)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [])

  useEffect(() => {
    fetchSearchIssues('')
  }, [])
  async function fetchUser() {
    const response = await api.get('/users/jose-xavier').then((res) => res.data)

    setUser(response)
  }

  async function fetchIssues() {
    const response = await api
      .get(`/repos/jose-xavier/github-blog/issues`)
      .then((res) => res.data)

    setIssues(response)
  }

  async function fetchSearchIssues(query: string) {
    const response = await api
      .get(`/search/issues?q=${query}repo:jose-xavier/github-blog is:issue`)
      .then((res) => res.data.items)

    setIssues(response)
  }

  return (
    <BlogContext.Provider value={{ user, issues, fetchSearchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
