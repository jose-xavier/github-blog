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

interface PostInfoProps {
  issueInfo: string[]
}

export function PostInfo({ issueInfo }: PostInfoProps) {
  const [login, title, html_url, date, comments] = issueInfo

  const colors = useTheme()
  return (
    <PostInfoContainer>
      <LinksContainer>
        <a href="/">
          <IoIosArrowBack size={16} />
          VOLTAR
        </a>
        <a href={html_url}>
          VER NO GITHUB
          <BiLinkExternal size={16} />
        </a>
      </LinksContainer>
      <PostTitle>{title}</PostTitle>
      <IconsContainer>
        <InfoWithIcon
          icon={<FaGithub />}
          text={login}
          iconColor={colors['base-label']}
        />
        <InfoWithIcon
          icon={<BsCalendarEventFill />}
          text={date}
          iconColor={colors['base-label']}
        />
        <InfoWithIcon
          icon={<FaComment />}
          text={`${comments} Comentários`}
          iconColor={colors['base-label']}
        />
      </IconsContainer>
    </PostInfoContainer>
  )
}
