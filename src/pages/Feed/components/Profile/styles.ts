import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;

  padding: 2.5rem 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    line-height: 1.5;
    font-family: 'Nunito', sans-serif;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      display: flex;
      gap: 0.5rem;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
    }
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`
