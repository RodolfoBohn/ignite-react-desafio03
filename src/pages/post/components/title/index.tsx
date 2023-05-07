import { DetailsContent, DetailsWrapper, LinksWrapper, ReturnLink, TitleText, TitleWrapper } from "./styles"
import { GithubLink } from "../../../../components/github-link"
import { CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react"

interface Props {
  title: string
  githubLink: string
  comments: number
  createdAt: Date
  userLogin: string
}

export const Title = ({title, githubLink, comments, createdAt, userLogin}:Props) => {
  return (
    <TitleWrapper>
      <LinksWrapper>
        <ReturnLink to={'/'}>
          <CaretLeft size={14} />
          <span>VOLTAR</span>
        </ReturnLink>
        <GithubLink href={githubLink} text="VER NO GITHUB" />
      </LinksWrapper>
      <TitleText>{title}</TitleText>  
      <DetailsWrapper>
        <DetailsContent>
          <GithubLogo size={18} />
          <span>{userLogin}</span>
        </DetailsContent>
        <DetailsContent>
          <CalendarBlank size={18} weight="fill" />
          <span>{createdAt.toDateString()}</span>
        </DetailsContent>
        <DetailsContent>
          <ChatCircle size={18} weight="fill" />
          <span>{comments} comentários</span>
        </DetailsContent>
      </DetailsWrapper>
    </TitleWrapper>
  )
}