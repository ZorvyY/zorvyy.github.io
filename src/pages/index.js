import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Fonts from "../constants/Fonts"

const FancyText = styled.p`
  font-family: ${Fonts.Handwritten};
  font-size: 1.3em;
  text-align: ${props => (props.align || 'left')}
`

const FancyTitle = styled.h1`
  font-size: 4em;
  font-family: ${Fonts.HandwrittenTitle};
  text-align: ${props => (props.align || 'left')}
`

const ObnoxiousIntro = styled.div`
  padding: 3em 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Zoravur Singh" />
    <ObnoxiousIntro>
      <FancyText>Hi, I'm</FancyText>
      <FancyTitle align='center'>Zoravur Singh</FancyTitle>
      <FancyText align='right'>and this is my website.</FancyText>
    </ObnoxiousIntro>
  </Layout>
)

export default IndexPage
