import React, { useState } from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { isEmpty, pick } from "lodash"

import PhotoGrid from "components/PhotoGrid"
import TripData from "components/TripData"
import TagsFilters from "components/TagsFilters"

import WithHeader from "components/Layout/WithHeader"

const query = graphql`
  query HomePage {
    allContentfulTag {
      edges {
        node {
          id
          label
        }
      }
    }
    allContentfulBlogPost(sort: { fields: eventDate, order: DESC }) {
      nodes {
        id
        slug
        title
        eventDate
        photo {
          id
        }
        pdfDescription {
          file {
            url
          }
        }
        tags {
          id
        }
      }
    }
  }
`

const getActivatedTagsInitialValue = edges => {
  const activatedTags = {}
  edges.forEach(edge => {
    activatedTags[edge.node.id] = false
  })

  return activatedTags
}

const HomePage = () => {
  const [activatedTags, setActivatedTags] = useState({})

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (isEmpty(activatedTags)) {
          setActivatedTags(
            getActivatedTagsInitialValue(data.allContentfulTag.edges)
          )
        }

        const blogPostTooltipsInfo = data.allContentfulBlogPost.nodes.map(
          node => pick(node, ["id", "title", "slug", "eventDate"])
        )

        return (
          <>
            <Helmet title="Connexions BLOG" />
            <WithHeader>
              <TripData blogPostTooltipsInfo={blogPostTooltipsInfo} />
              <TagsFilters
                activatedTags={activatedTags}
                setActivatedTags={setActivatedTags}
              />
              <PhotoGrid
                activatedTags={activatedTags}
                allContentfulBlogPostNodes={data.allContentfulBlogPost.nodes}
              />
            </WithHeader>
          </>
        )
      }}
    />
  )
}

export default HomePage
