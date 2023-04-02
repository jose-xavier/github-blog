import { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'

export const usePost = () => {
  const { issues, fetchSearchIssues } = useContext(BlogContext)

  return { issues, fetchSearchIssues }
}
