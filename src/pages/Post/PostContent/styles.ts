import styled from 'styled-components'

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2.5rem;
  margin-bottom: 8rem;
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
  }
  img {
    width: 100%;
  }
  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre {
    background: ${({ theme }) => theme['base-post']};
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: 'FireCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
