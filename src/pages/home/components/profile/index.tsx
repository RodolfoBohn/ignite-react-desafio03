import { ArrowSquareUpRight, GithubLogo, Buildings, Users } from "phosphor-react"
import { GithubLink, GithubLinkWrapper, ProfileContent, ProfileDescription, ProfileImage, ProfileInfoContent, ProfileInfoWrapper, ProfileTitle, ProfileTitleWrapper, ProfileWrapper } from "./styles"

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImage src="https://cdnstorage.sendbig.com/unreal/female.webp" />
      <ProfileContent>
        <ProfileTitleWrapper>
          <ProfileTitle>Loren ipsun</ProfileTitle>
          <GithubLinkWrapper>
            <GithubLink href="hppts://github.com">
              <span>GITHUB</span>
              <ArrowSquareUpRight size={14} />
            </GithubLink>
          </GithubLinkWrapper>
        </ProfileTitleWrapper>
        <ProfileDescription>
        Bla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla BlaBla Bla Bla Bla 
        </ProfileDescription>
        
        <ProfileInfoWrapper>
          <ProfileInfoContent>
            <GithubLogo size={18} />
            <span>profileUser</span>
          </ProfileInfoContent>

          <ProfileInfoContent>
            <Buildings size={18}/>
            <span>profileCompany</span>
          </ProfileInfoContent>

          <ProfileInfoContent>
            <Users size={18}/>
            <span>profileUser</span>
          </ProfileInfoContent>
        </ProfileInfoWrapper>
      </ProfileContent>
    </ProfileWrapper>
  )
}