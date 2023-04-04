import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`

export const LinksContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    text-decoration: none;
  }
`
export const PostTitle = styled.h2`
  margin-top: 1.25rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 1.9;
`
export const IconsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: ${(props) => props.theme['base-span']};
  }
`
