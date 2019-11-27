import React from "react"
import { graphql } from "gatsby"

import WithHeader from "components/Layout/WithHeader"

const BlogPostTemplate = ({ data }) => {
  const title = data.contentfulBlogPost.title
  return (
    <WithHeader>
      <div>Hello new page !</div>
      <div>{title}</div>
    </WithHeader>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
    }
  }
`
