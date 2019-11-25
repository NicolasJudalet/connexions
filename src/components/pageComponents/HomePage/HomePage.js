import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "components/Header"
import PhotoGrid from "components/PhotoGrid"
import TripData from "components/TripData"

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
    render={({ data }) => {
      return (
        <>
          <Helmet title="Connexions BLOG" />
          <Header />
          <Style.Wrapper>
            <TripData />
            <PhotoGrid />
          </Style.Wrapper>
        </>
      )
    }}
  />
)

export default HomePage
