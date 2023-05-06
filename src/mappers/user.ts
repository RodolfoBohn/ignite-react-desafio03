import { UserData, UserResponse } from "../@types/user";

export function userMap(userResponse:UserResponse):UserData {
  return {
    avatarUrl: userResponse.avatar_url, 
    company: userResponse.company, 
    followers: userResponse.followers, 
    name: userResponse.name, 
    profileUrl: userResponse.html_url,
    profileUser: userResponse.login,
    bio: userResponse.bio
  }
}