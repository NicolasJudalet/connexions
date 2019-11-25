import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PhotoComponent from "./PhotoComponent"

import Style from "./PhotoGrid.style"

const PhotoGrid = () => (
  <StaticQuery
    query={graphql`
      query PhotoGrid {
        allContentfulBlogPost {
          nodes {
            id
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
    `}
    render={data => {
      return (
        <Style.Wrapper>
          {data.allContentfulBlogPost.nodes.map(node => {
            const asset = data.allContentfulAsset.edges.filter(
              edge => edge.node.id === node.photo.id
            )[0]
            return (
              <PhotoComponent
                key={node.id}
                asset={asset}
                date={node.eventDate}
              />
            )
          })}
        </Style.Wrapper>
      )
    }}
  />
)

export default PhotoGrid
