import { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'

export const usePost = () => {
  const { issues, issue } = useContext(BlogContext)

  return { issues, issue }
}
