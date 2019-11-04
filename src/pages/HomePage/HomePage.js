import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Navigation from "components/Navigation"

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query App {
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
        <Navigation />
        <h1>{title}</h1>
        <p>{content}</p>
      </>
    )}
  />
)

export default HomePage
