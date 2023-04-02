import { usePost } from '../../hooks/usePost'
import { Profile } from './components/Profile'
import { PublicationCard } from './components/PublicationCard'
import { SearchForm } from './components/SearchForm'
import { FeedCardContainer, FeedContainer } from './styles'

export function Feed() {
  const { issues } = usePost()

  return (
    <FeedContainer>
      <Profile />
      <SearchForm />
      <FeedCardContainer>
        {issues.map((issue) => {
          return (
            <PublicationCard
              issueProps={[
                issue.title,
                issue.body,
                issue.created_at,
                issue.html_url,
              ]}
              key={issue.id}
            />
          )
        })}
      </FeedCardContainer>
    </FeedContainer>
  )
}
