import React from "react"
import Helmet from "react-helmet"
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
        <Helmet title="Connexions BLOG" />
        <h1>{title}</h1>
        <p>{content}</p>
      </>
    )}
  />
)

export default HomePage
