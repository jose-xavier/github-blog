import { useEffect } from 'react'
import { PostInfo } from './PostInfo'
import { PostConainer } from './styles'
import { useBlog } from '../../hooks/useBlog'
import { usePost } from '../../hooks/usePost'
import { useParams } from 'react-router-dom'
import { dateDistanceFormatter } from '../../utils/formatter'
import { useUser } from '../../hooks/useUser'
import { PostContent } from './PostContent'

export function Post() {
  const { fetchIssueById } = useBlog()
  const { issue } = usePost()
  const { id } = useParams()
  const { user } = useUser()

  useEffect(() => {
    fetchIssueById(id!)
  }, [id])

  if (!issue) return <></>

  const { title, html_url, created_at, comments, body } = issue
  const { login } = user

  const date = dateDistanceFormatter(created_at)

  return (
    <PostConainer>
      <PostInfo issueInfo={[login, title, html_url, date, comments]} />
      <PostContent body={body} />
    </PostConainer>
  )
}
