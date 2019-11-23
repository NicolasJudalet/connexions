import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "components/Header"
import { isLoggedIn } from "utils/auth"
import Style from "./HomePage.style"
import TripData from "../../TripData"
import PhotoHighlights from "../../PhotoHighlights"

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
        <Header isConnected={isLoggedIn()} />
        <Style.Wrapper>
          <TripData />
          <PhotoHighlights />
          <h1>{title}</h1>
          <p>{content}</p>
        </Style.Wrapper>
      </>
    )}
  />
)

export default HomePage
