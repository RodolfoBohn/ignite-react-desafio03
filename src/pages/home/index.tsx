import { Post } from "./components/post"
import { Profile } from "./components/profile"
import { SearchForm } from "./components/search-form"
import { ContentWrapper, HomeWrapper, PostsWrapper } from "./styles"
import { usePostContext } from "../../context/post"

export const Home = () => {
  const {posts} = usePostContext()
  return (
    <HomeWrapper>
      <Profile />
      <ContentWrapper>
        <SearchForm />
        <PostsWrapper>
          {posts.map(post => {
            return <Post key={post.id} to={`/post/${post.id}`} content={post.content} title={post.title} createdAt={post.createdAt} />
          })}
        </PostsWrapper>
      </ContentWrapper>
    </HomeWrapper>
  )
}