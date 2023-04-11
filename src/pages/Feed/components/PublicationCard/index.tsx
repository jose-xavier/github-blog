import { CardText, PublicationCardContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { dateDistanceFormatter } from '../../../../utils/formatter'
import { useNavigate } from 'react-router-dom'

interface PublicationCardProps {
  issueProps: string[]
}

export function PublicationCard({ issueProps }: PublicationCardProps) {
  const [title, body, created_at, number] = issueProps

  const navigate = useNavigate()

  const formattedDateToNow = dateDistanceFormatter(created_at)

  console.log(number)

  const handleGoToPost = () => navigate(`/post/${number}`)

  return (
    <PublicationCardContainer onClick={handleGoToPost}>
      <header>
        <strong>{title} </strong>
        <span>{formattedDateToNow}</span>
      </header>
      <CardText>
        <ReactMarkdown children={body} />
      </CardText>
    </PublicationCardContainer>
  )
}
