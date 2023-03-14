import { ReactNode } from 'react'
import { IconContainer, IfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  iconColor: string
  icon: ReactNode
  text?: string
}

export function InfoWithIcon({ icon, text, iconColor }: InfoWithIconProps) {
  return (
    <IfoWithIconContainer>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <span>{text}</span> : text}
    </IfoWithIconContainer>
  )
}
