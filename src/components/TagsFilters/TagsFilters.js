import React from "react"
import { StaticQuery, graphql } from "gatsby"

import TagFilter from "./TagFilter"

import Style from "./TagsFilters.style"

const query = graphql`
  query TagsFilters {
    allContentfulTag {
      edges {
        node {
          id
          label
        }
      }
    }
  }
`

const TagsFilters = ({ activatedTags, setActivatedTags }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        {data.allContentfulTag.edges && (
          <Style.Wrapper>
            <Style.Text>Filtrez les articles par thème :</Style.Text>
            {data.allContentfulTag.edges.map(edge => (
              <TagFilter
                id={edge.node.id}
                label={edge.node.label}
                activatedTags={activatedTags}
                setActivatedTags={setActivatedTags}
              />
            ))}
          </Style.Wrapper>
        )}
      </>
    )}
  />
)

export default TagsFilters
