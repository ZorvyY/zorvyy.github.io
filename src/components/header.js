import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { Link, Anchor } from "./Styled"

const NavBox = styled.div`
  width: 100%;
  display: flex;
  padding: 1em 0;
`

const NavItem = styled.div`
  width: 10ch;
`

const pages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Resume',
    link: '/resume.pdf',
    external: 'true',
  }
]

const NavBar = ({pages}) => {
  return (
    <NavBox>
      {pages.map(page => {
        return (
          <NavItem key={page.name}>
            {page.external ? 
              <Anchor href={page.link}>{page.name}</Anchor> :
              <Link to={page.link}>{page.name}</Link>
            }
          </NavItem>
        )
      })}
    </NavBox>
  )
}

const Header = styled.div`
  margin-bottom: 1em;
`

export default () => <Header><NavBar pages={pages}/></Header>;