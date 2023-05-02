import { Profile } from "./components/profile"
import { SearchForm } from "./components/search-form"
import { ContentWrapper, HomeWrapper } from "./styles"

export const Home = () => {
  return (
    <HomeWrapper>
      <Profile />
      <ContentWrapper>
        <SearchForm />
      </ContentWrapper>
    </HomeWrapper>
  )
}