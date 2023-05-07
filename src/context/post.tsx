import { createContext, useContext, useEffect, useState } from "react"
import { getPosts } from "../api"
import { PostItemData } from "../@types/post"
import { postsMap } from "../mappers/post"


interface PostContextProps {
  posts: PostItemData[]
  filteredPostById: (id: number) => PostItemData | undefined
}

interface PostProviderProps {
  children: React.ReactNode
}

const PostContext = createContext({} as PostContextProps)

export const PostProvider = ({children}:PostProviderProps) => {
  const [posts, setPosts] = useState<PostItemData[]>([])
  
  const fetchPosts = async() => {
    const postResponse = await getPosts()
    const postsItemData = postsMap(postResponse)
    setPosts(postsItemData)
  }

  useEffect(() => {
    fetchPosts()
  },[])

  const filteredPostById = (id: number) => {
    return posts.find(post => post.id === id)
  }

  return (
    <PostContext.Provider value={{posts, filteredPostById}}>
      {children}
    </PostContext.Provider>
  )
}

export const usePostContext = () => useContext(PostContext)