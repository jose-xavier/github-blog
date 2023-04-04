import { IoIosArrowBack } from 'react-icons/io'
import { BsCalendarEventFill } from 'react-icons/bs'
import { FaComment, FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

import { useTheme } from 'styled-components'
import {
  IconsContainer,
  LinksContainer,
  PostInfoContainer,
  PostTitle,
} from './styles'
import { InfoWithIcon } from '../../../components/InfoWithIcon'

export function PostInfo() {
  const colors = useTheme()
  return (
    <PostInfoContainer>
      <LinksContainer>
        <a href="">
          <IoIosArrowBack size={16} />
          VOLTAR
        </a>
        <a href="">
          VER NO GITHUB
          <BiLinkExternal size={16} />
        </a>
      </LinksContainer>
      <PostTitle>JavaScript data types and data structures</PostTitle>
      <IconsContainer>
        <InfoWithIcon
          icon={<FaGithub />}
          text="jose-xavier"
          iconColor={colors['base-label']}
        />
        <InfoWithIcon
          icon={<BsCalendarEventFill />}
          text="Há um dia"
          iconColor={colors['base-label']}
        />
        <InfoWithIcon
          icon={<FaComment />}
          text="5 Comentários"
          iconColor={colors['base-label']}
        />
      </IconsContainer>
    </PostInfoContainer>
  )
}
