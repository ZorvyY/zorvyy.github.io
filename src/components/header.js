import React from "react"
import styled from 'styled-components'
import { Link } from "./Styled"

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
  }
]

const NavBar = pages => {
  return (
    <NavBox>
      {pages.map(page => {
        return (
          <NavItem key={page.name}><Link to={page.link}>{page.name}</Link></NavItem>
        )
      })}
    </NavBox>
  )
}

export default () => NavBar(pages);