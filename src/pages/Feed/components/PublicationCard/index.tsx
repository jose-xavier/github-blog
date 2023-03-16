import { CardText, PublicationCardContainer } from './styles'

export function PublicationCard() {
  return (
    <PublicationCardContainer>
      <header>
        <strong>JavaScript data types and data structures </strong>
        <span>Há 1 dia</span>
      </header>
      <CardText>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </CardText>
    </PublicationCardContainer>
  )
}
