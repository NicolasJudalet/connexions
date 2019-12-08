import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { graphql, Link } from "gatsby"

import WithHeader from "components/Layout/WithHeader"

import Style from "./BlogPostTemplate.style"

const BlogPostTemplate = ({ data }) => {
  const {
    title,
    eventDate,
    richTextDescription,
    photo,
  } = data.contentfulBlogPost

  const previousBlogPostSlug =
    data.previousBlogPost && data.previousBlogPost.slug
  const nextBlogPostSlug = data.nextBlogPost && data.nextBlogPost.slug

  return (
    <WithHeader>
      <Style.Wrapper>
        <Style.PhotoWrapper>
          <Style.LeftPhotoContainer>
            {previousBlogPostSlug && (
              <Link to={`/${previousBlogPostSlug}`}>
                <MdKeyboardArrowLeft size={"50px"} />
              </Link>
            )}
          </Style.LeftPhotoContainer>
          <Style.Img alt={title} fluid={photo.fluid} />
          <Style.RightPhotoContainer>
            {nextBlogPostSlug && (
              <Link to={`/${nextBlogPostSlug}`}>
                <MdKeyboardArrowRight size={"50px"} />
              </Link>
            )}
          </Style.RightPhotoContainer>
        </Style.PhotoWrapper>
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
  query blogPostQuery($id: String!, $previousId: String, $nextId: String) {
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
    previousBlogPost: contentfulBlogPost(id: { eq: $previousId }) {
      slug
    }
    nextBlogPost: contentfulBlogPost(id: { eq: $nextId }) {
      slug
    }
  }
`
