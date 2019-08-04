import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fonts from "../constants/Fonts"

const FancyText = styled.p`
  font-size: 1.3em;
  text-align: ${props => (props.align || 'left')}
`

const FancyTitle = styled.h1`
  font: ${Fonts.HandwrittenTitle};
  text-align: ${props => (props.align || 'left')};
  text-transform: uppercase;
`

const ObnoxiousIntro = () => {
  return (
    <div css={`margin: 3em 0;`}>
      <FancyText>Hi, I'm</FancyText>
      <div css={`padding: 0 3em;`}>
        <FancyTitle>
          Zoravur <br/>
          Singh
        </FancyTitle>
      </div>
      <FancyText align='right'>and this is my website.</FancyText>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ObnoxiousIntro />
  </Layout>
)

export default IndexPage
