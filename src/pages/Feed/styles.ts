import styled from 'styled-components'

export const FeedContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 56rem;
  padding: 0 1rem;
`

export const FeedCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  margin-top: 3rem;
`
