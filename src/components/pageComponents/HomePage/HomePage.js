import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "components/Header"
import PhotoHighlights from "components/PhotoHighlights"
import TripData from "components/TripData"
import { isLoggedIn } from "utils/auth"

import Style from "./HomePage.style"

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query App {
        allContentfulBlogPost {
          nodes {
            id
            title
            description {
              description
            }
            eventDate
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Helmet title="Connexions BLOG" />
          <Header isConnected={isLoggedIn()} />
          <Style.Wrapper>
            <TripData />
            <PhotoHighlights />
          </Style.Wrapper>
        </>
      )
    }}
  />
)

export default HomePage
