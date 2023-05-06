import { PostContent, PostDateCounter, PostTitle, PostTitleWrapper, PostWrapper } from "./styles"

interface Props {
  title: string
  content: string
  createdAt: Date
  to: string
}

export const Post = ({title, content, createdAt, to}: Props) => {
  return (
    <PostWrapper to={to}>
      <PostTitleWrapper>
        <PostTitle>{title}</PostTitle>
        <PostDateCounter>{createdAt.toDateString()}</PostDateCounter>
      </PostTitleWrapper>
      <PostContent>
        {content}
      </PostContent>
    </PostWrapper>
  )
}