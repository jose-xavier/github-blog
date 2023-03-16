import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;
  width: 100%;
  max-width: 56rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-broder']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      line-height: 1.5;
    }
  }
`

export const InputInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
