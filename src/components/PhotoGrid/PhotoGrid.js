import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PhotoComponent from "./PhotoComponent"

import Style from "./PhotoGrid.style"

const query = graphql`
  query PhotoGrid {
    allContentfulBlogPost(sort: { fields: eventDate, order: DESC }) {
      nodes {
        id
        slug
        title
        description {
          description
        }
        eventDate
        photo {
          id
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const PhotoGrid = () => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <Style.Wrapper>
          {data.allContentfulBlogPost.nodes.map(node => {
            const asset = data.allContentfulAsset.edges.filter(
              edge => edge.node.id === node.photo.id
            )[0]
            return (
              <Style.Link to={`/${node.slug}`}>
                <PhotoComponent
                  key={node.id}
                  asset={asset}
                  date={node.eventDate}
                />
              </Style.Link>
            )
          })}
        </Style.Wrapper>
      )
    }}
  />
)

export default PhotoGrid
