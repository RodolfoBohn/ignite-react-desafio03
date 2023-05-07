import { ArrowSquareUpRight } from "phosphor-react"
import { GithubLinkWrapper } from "./styles"

interface Props {
  href: string
  text: string
}


export const GithubLink = ({href, text}:Props) => {
  return (
    <GithubLinkWrapper href={href} target="_blank">
    <span>{text}</span>
    <ArrowSquareUpRight size={14} />
  </GithubLinkWrapper>
  )
}