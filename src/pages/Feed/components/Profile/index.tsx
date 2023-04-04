/* eslint-disable camelcase */
import { IconsContainer, ProfileContainer, ProfileContent } from './styles'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

import {
  faUserGroup,
  faBuilding,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { useUser } from '../../../../hooks/useUser'

export function Profile() {
  const colors = useTheme()

  const {
    user: { name, followers, login, avatar_url, html_url, company, bio },
  } = useUser()

  return (
    <ProfileContainer>
      <img src={avatar_url} alt="" />

      <ProfileContent>
        <header>
          <strong>{name}</strong>
          <a href={html_url}>
            GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </header>

        <span>{bio}</span>

        <IconsContainer>
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={login}
            iconColor={colors['base-label']}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faBuilding} />}
            text={company}
            iconColor={colors['base-label']}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            text={
              followers > 1
                ? `${followers} seguidores`
                : `${followers} seguidor`
            }
            iconColor={colors['base-label']}
          />
        </IconsContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
