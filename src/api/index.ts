import axios from "axios";
import { UserResponse } from "../@types/user";
import { PostResponse } from "../@types/post";

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export async function getUser() {
  const response = await api.get<UserResponse>('/users/rodolfobohn')
  return response.data
}

export async function getPosts() {
  const response = await api.get<PostResponse>('/search/issues', {
    params: {
      q: 'repo:RodolfoBohn/ignite-react-desafio03'
    }
  })
  return response.data
}
