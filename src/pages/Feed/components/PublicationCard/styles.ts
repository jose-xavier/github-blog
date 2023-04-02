import styled from 'styled-components'

export const PublicationCardContainer = styled.div`
  max-width: 26rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    strong {
      max-width: 17.5rem;
      font-size: 1.25rem;
      line-height: 2;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const CardText = styled.span`
  display: block;
  margin-top: 1.25rem;
  line-height: 1.6;
  max-height: 6.7rem;
  overflow: hidden;
`
