import styled from "styled-components";

export const ProfileWrapper = styled.div`
width: 100%;
padding: 2rem;
background: ${props => props.theme.profile};
border-radius: 10px;
display: flex;
gap: 2rem;
margin-top: -5.5rem;
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  border-radius: 8px;
  margin-left: 0.5rem;
`

export const ProfileContent = styled.div`
  flex: 1;
`

export const ProfileTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: green;
`

export const ProfileTitle = styled.h1`
  color: ${props => props.theme.title};
  font-size: 2rem;
  font-weight: bold;
`
export const GithubLinkWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const GithubLink = styled.a`
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  &>span {
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;
  } 
  &> svg{
    color: ${props => props.theme.blue};
  }
`

export const ProfileDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  margin-top: 0.5rem;
  margin-bottom: 2rem;

`

export const ProfileInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export const ProfileInfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &>svg {
    color: ${props => props.theme.label};
  }

  &>span {
    color: ${props => props.theme.subtitle};
  }
`