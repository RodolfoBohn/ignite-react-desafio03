export interface PostItemUserResponse {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

export interface PostItemResponse {
author_association: string
body: string
comments: number
comments_url: string
created_at: date
events_url: string
html_url: string
id: number
labels_url: string
locked: boolean
node_id: string
number: number
repository_url:string
score: number
state: string
timeline_url:string
title:string
updated_at:date
url:string
user: PostItemUserResponse
}

interface PostResponse {
  incomplete_results: boolean, 
  items: PostItemResponse[]
  total_count: number
}

interface PostItemData {
  id: number
  title: string, 
  createdAt: Date 
  content: string
  githubLink: string
  comments: number
  userLogin: string
}