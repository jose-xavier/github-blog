import { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'

export const useUser = () => {
  const { user } = useContext(BlogContext)

  return { user }
}
