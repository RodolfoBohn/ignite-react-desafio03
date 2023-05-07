import { useParams } from "react-router"
import { usePostContext } from "../../context/post"
import { Title } from "./components/title"
import { ContentWrapper, PostPageWrapper } from "./styles"
import  ReactMarkdown  from "react-markdown"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Post = () => {
  const {filteredPostById} = usePostContext()
  const params = useParams()
  const post = filteredPostById(Number(params.id))
  
  return post ? (
    <PostPageWrapper>
      <Title 
        title={post.title} 
        githubLink={post.githubLink} 
        comments={post.comments} 
        createdAt={post.createdAt} 
        userLogin={post.userLogin}  
      />
      <ContentWrapper>
      <ReactMarkdown
        children={post.content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      </ContentWrapper>
    </PostPageWrapper>
  ) : <div></div>
}