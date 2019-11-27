import React from "react"

const BlogPostTemplate = ({ data }) => {
  const title = data.contentfulBlogPost.title
  return (
    <>
      <div>Hello new page !</div>
      <div>{title}</div>
    </>
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
