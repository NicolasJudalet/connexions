import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PhotoComponent from "./PhotoComponent"
import PdfComponent from "./PdfComponent"

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
        pdfDescription {
          file {
            url
          }
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

const getNodeAsset = (data, assetId) => {
  const assets = data.allContentfulAsset.edges.filter(
    edge => edge.node.id === assetId
  )
  return assets ? assets[0] : null
}

const PhotoGrid = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Style.Wrapper>
        {data.allContentfulBlogPost.nodes
          .filter(node => node.photo || node.pdfDescription)
          .map(node => {
            const photo = node.photo && getNodeAsset(data, node.photo.id)
            const pdfUrl = node.pdfDescription && node.pdfDescription.file.url

            return (
              <>
                {photo && (
                  <Style.Link to={`/${node.slug}`}>
                    <PhotoComponent
                      key={node.id}
                      asset={photo}
                      date={node.eventDate}
                    />
                  </Style.Link>
                )}
                {pdfUrl && (
                  <Style.Link to={`/${node.slug}`}>
                    <PdfComponent
                      key={node.id}
                      pdfUrl={pdfUrl}
                      date={node.eventDate}
                    />
                  </Style.Link>
                )}
              </>
            )
          })}
      </Style.Wrapper>
    )}
  />
)

export default PhotoGrid
