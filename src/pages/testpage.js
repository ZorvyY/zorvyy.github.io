import React from 'react'
import { graphql } from 'gatsby'

const HomePage = ({data}) => {
  console.log(data);
  return (
    <div>
    {data.site.siteMetadata.description}
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default HomePage