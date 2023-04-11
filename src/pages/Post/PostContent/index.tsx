import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { ContentContainer } from './styles'

interface PostContentProps {
  body: string
}

export const PostContent = ({ body }: PostContentProps) => {
  return (
    <ContentContainer>
      <ReactMarkdown
        children={body}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(body).replace(/\n$/, '')}
                style={materialDark as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </ContentContainer>
  )
}
