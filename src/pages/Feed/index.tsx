import { Profile } from './components/Profile'
import { PublicationCard } from './components/PublicationCard'
import { SearchForm } from './components/SearchForm'
import { FeedCardContainer, FeedContainer } from './styles'

export function Feed() {
  return (
    <FeedContainer>
      <Profile />
      <SearchForm />
      <FeedCardContainer>
        <PublicationCard />
        <PublicationCard />
      </FeedCardContainer>
    </FeedContainer>
  )
}
