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
        {issues.map((issue: any) => {
          return (
            <PublicationCard
              key={issue.id}
              issueProps={[
                issue.title,
                issue.body,
                issue.created_at,
                issue.number,
              ]}
            />
          )
        })}
      </FeedCardContainer>
    </FeedContainer>
  )
}
