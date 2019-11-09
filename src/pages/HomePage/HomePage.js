import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "components/Header"

const HomePage = ({ logout }) => (
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
        <Header isConnected={true} logout={() => logout()} />
        <h1>{title}</h1>
        <p>{content}</p>
      </>
    )}
  />
)

export default HomePage
