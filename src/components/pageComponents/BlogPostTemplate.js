import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { graphql } from "gatsby"

import WithHeader from "components/Layout/WithHeader"

import Style from "./BlogPostTemplate.style"

const BlogPostTemplate = ({ data }) => {
  const {
    title,
    eventDate,
    richTextDescription,
    photo,
  } = data.contentfulBlogPost
  return (
    <WithHeader>
      <Style.Wrapper>
        <Style.Img alt={title} fluid={photo.fluid} />
        {eventDate && (
          <Style.Date>
            {format(new Date(eventDate), "dd MMMM", { locale: fr })}
          </Style.Date>
        )}
        {title && <Style.Title>{title}</Style.Title>}
        {richTextDescription && (
          <Style.Description>
            {documentToReactComponents(richTextDescription.json)}
          </Style.Description>
        )}
      </Style.Wrapper>
    </WithHeader>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      eventDate
      title
      richTextDescription {
        json
      }
      photo {
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
