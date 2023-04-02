/* eslint-disable camelcase */
/* eslint-disable react/no-children-prop */
import { CardText, PublicationCardContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { dateDistanceFormatter } from '../../../../utils/formatter'

interface PublicationCardProps {
  issueProps: string[]
}

export function PublicationCard({ issueProps }: PublicationCardProps) {
  const [title, body, created_at] = issueProps

  const formattedDateToNow = dateDistanceFormatter(created_at)

  return (
    <PublicationCardContainer>
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
