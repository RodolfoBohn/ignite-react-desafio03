import { PostItemData, PostResponse } from "../@types/post";

export function postsMap(postResponse:PostResponse):PostItemData[] {
  return postResponse.items.map(postItem => {
    return {
      id: postItem.id,
      content: postItem.body, 
      createdAt: new Date(postItem.created_at), 
      title: postItem.title
    }
  })
}