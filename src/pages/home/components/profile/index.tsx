import { GithubLogo, Buildings, Users } from "phosphor-react"
import {  GithubLinkWrapper, ProfileContent, ProfileDescription, ProfileImage, ProfileInfoContent, ProfileInfoWrapper, ProfileTitle, ProfileTitleWrapper, ProfileWrapper } from "./styles"
import { useUserContext } from "../../../../context/user"
import { GithubLink } from "../../../../components/github-link"

export const Profile = () => {
  const {user, isLoading} = useUserContext()
  return (
    <ProfileWrapper>
      {isLoading ? <div></div> : (
      <>
        <ProfileImage src={user?.avatarUrl || ''} alt='' />
        <ProfileContent>
          <ProfileTitleWrapper>
            <ProfileTitle>{user.name}</ProfileTitle>
            <GithubLinkWrapper>
              <GithubLink href={user.profileUrl} text="GITHUB" />
            </GithubLinkWrapper>
          </ProfileTitleWrapper>
          <ProfileDescription>
            {user.bio}
          </ProfileDescription>
          
          <ProfileInfoWrapper>
            <ProfileInfoContent>
              <GithubLogo size={18} />
              <span>{user.profileUser}</span>
            </ProfileInfoContent>

            <ProfileInfoContent>
              <Buildings size={18}/>
              <span>{user.company}</span>
            </ProfileInfoContent>

            <ProfileInfoContent>
              <Users size={18}/>
              <span>{user.followers} seguidores</span>
            </ProfileInfoContent>
          </ProfileInfoWrapper>
        </ProfileContent>
      </>
      )}
    </ProfileWrapper>
  )
}