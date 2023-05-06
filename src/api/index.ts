import axios from "axios";
import { UserResponse } from "../@types/user";

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export async function getUser() {
  const response = await api.get<UserResponse>('/users/rodolfobohn')
  return response.data
}

