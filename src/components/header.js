import React from "react"
import styled from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'

import Navigation from './Navigation'
import Social from './Social'
// import logoSrc from "../assets/icons/logo-lettering-bold.svg"
// import Fonts from "../constants/Fonts"


const HeaderSection = styled.div`
  flex-grow: 1;
  font-size: 1.2em;
`

const HeaderContainer = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSection width='80%'>
        <Navigation />
      </HeaderSection>
      <HeaderSection width='20%'>
        <Social />
      </HeaderSection>
    </HeaderContainer>
  )
}




export default Header;