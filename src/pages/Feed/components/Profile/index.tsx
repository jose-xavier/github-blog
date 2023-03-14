import { IconsContainer, ProfileContainer, ProfileContent } from './styles'
import avatar from '../../../../assets/avatar.svg'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import {
  faUserGroup,
  faBuilding,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  const colors = useTheme()

  return (
    <ProfileContainer>
      <img src={avatar} alt="" />
      <ProfileContent>
        <header>
          <strong>José Xavier</strong>
          <a href="">
            GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </header>

        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>

        <IconsContainer>
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faGithub} />}
            text="José Xavier"
            iconColor={colors['base-label']}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faBuilding} />}
            text="RocketSeat"
            iconColor={colors['base-label']}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            text="Seguidores"
            iconColor={colors['base-label']}
          />
        </IconsContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
