import { Post } from "./components/post"
import { Profile } from "./components/profile"
import { SearchForm } from "./components/search-form"
import { ContentWrapper, HomeWrapper, PostsWrapper } from "./styles"

export const Home = () => {
  return (
    <HomeWrapper>
      <Profile />
      <ContentWrapper>
        <SearchForm />
        <PostsWrapper>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsWrapper>
      </ContentWrapper>
    </HomeWrapper>
  )
}