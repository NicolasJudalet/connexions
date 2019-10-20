import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulBlogPost {
          title
          content {
            content
          }
        }
      }
    `}
    render={({
      contentfulBlogPost: {
        title,
        content: { content },
      },
    }) => (
      <>
        <h1>{title}</h1>
        <p>{content}</p>
      </>
    )}
  />
)

export default HomePage
