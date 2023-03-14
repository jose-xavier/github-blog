import styled from 'styled-components'

export const IfoWithIconContainer = styled.a`
  display: flex;
  gap: 0.5rem;
`
interface IconColorProps {
  iconColor: string
}

export const IconContainer = styled.div<IconColorProps>`
  border-radius: 999px;
  color: ${({ iconColor }) => iconColor};

  svg {
    height: 18px;
    width: 18px;
    line-height: none;
  }
`
