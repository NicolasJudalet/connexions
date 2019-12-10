import React from "react"
import Helmet from "react-helmet"

import PhotoGrid from "components/PhotoGrid"
import TripData from "components/TripData"
import TagsFilters from "components/TagsFilters"

import WithHeader from "components/Layout/WithHeader"

const HomePage = () => (
  <>
    <Helmet title="Connexions BLOG" />
    <WithHeader>
      <TripData />
      <TagsFilters />
      <PhotoGrid />
    </WithHeader>
  </>
)

export default HomePage
