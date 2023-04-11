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

interface Issue {
  title: string
  body: string
  comments: string
  html_url: string
  number: string
  created_at: string
}

interface BlogContextType {
  user: User
  issues: Issue[]
  issue: Issue | undefined
  fetchSearchIssues: (query: string) => Promise<void>
  fetchIssueById: (id: string) => Promise<void>
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [user, setUser] = useState({} as User)
  const [issues, setIssues] = useState<Issue[]>([])
  const [issue, setIssue] = useState<Issue | undefined>(undefined)

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [])

  useEffect(() => {
    fetchSearchIssues('')
  }, [])

  const fetchUser = useCallback(async () => {
    const response = await api.get('/users/jose-xavier').then((res) => res.data)

    setUser(response)
  }, [])

  const fetchIssues = useCallback(async () => {
    const response = await api
      .get(`/repos/jose-xavier/github-blog/issues`)
      .then((res) => res.data)

    setIssues(response)
  }, [])

  const fetchSearchIssues = useCallback(async (query: string) => {
    const response = await api
      .get(
        `/search/issues?q=${query}repo:jose-xavier/github-blog  type:issue in:title`,
      )
      .then((res) => res.data.items)

    setIssues(response)
  }, [])

  const fetchIssueById = async (id: string) => {
    const response = await api
      .get(`repos/jose-xavier/github-blog/issues/${id}`)
      .then((res) => res.data)

    setIssue(response)
  }

  return (
    <BlogContext.Provider
      value={{
        user,
        issues,
        issue,
        fetchSearchIssues,
        fetchIssueById,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
