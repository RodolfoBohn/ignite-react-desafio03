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
}

interface PostResponse {
  incomplete_results: boolean, 
  items: PostItemResponse[]
  total_count: number
}

interface PostItemData {
  id: number
  title: string, 
  createdAt: Date, 
  content: string
}