import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { graphql, Link } from "gatsby"

import WithHeader from "components/Layout/WithHeader"
import PdfViewer from "components/PdfViewer"
import Tag from "components/Tag"

import Style from "./BlogPostTemplate.style"

const options = {
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

const BlogPostTemplate = ({ data }) => {
  const {
    title,
    eventDate,
    richTextDescription,
    photo,
    pdfDescription,
    tags,
  } = data.contentfulBlogPost

  const previousBlogPostSlug =
    data.previousBlogPost && data.previousBlogPost.slug
  const nextBlogPostSlug = data.nextBlogPost && data.nextBlogPost.slug

  return (
    <WithHeader>
      <Style.Wrapper>
        {eventDate && (
          <Style.Date>
            {format(new Date(eventDate), "dd MMMM", { locale: fr })}
          </Style.Date>
        )}
        {title && <Style.Title>{title}</Style.Title>}
        {tags && (
          <Style.TagList>
            {tags.map(tag => (
              <Tag key={tag.id} label={tag.label} />
            ))}
          </Style.TagList>
        )}
        <Style.PhotoWrapper>
          <Style.ArrowContainer>
            {previousBlogPostSlug && (
              <Link to={`/${previousBlogPostSlug}`}>
                <MdKeyboardArrowLeft size={"50px"} />
              </Link>
            )}
          </Style.ArrowContainer>
          {photo ? (
            <Style.Img
              alt={title}
              fluid={photo.fluid}
              className={"GatsbyImageWrapper"}
            />
          ) : (
            pdfDescription && <PdfViewer pdf={pdfDescription.file.url} />
          )}
          <Style.ArrowContainer>
            {nextBlogPostSlug && (
              <Link to={`/${nextBlogPostSlug}`}>
                <MdKeyboardArrowRight size={"50px"} />
              </Link>
            )}
          </Style.ArrowContainer>
        </Style.PhotoWrapper>
        {richTextDescription && (
          <Style.Description>
            {documentToReactComponents(richTextDescription.json, options)}
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
      pdfDescription {
        file {
          url
        }
      }
      tags {
        id
        label
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
