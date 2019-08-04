import React from "react"
import styled from 'styled-components'
import { Location } from '@reach/router'

import { Link } from './Styled'
import Colors from '../constants/Colors'

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const NavItem = styled.div`
  text-transform: uppercase;
`

const NavLink = styled(Link)`
  font-family: Oswald; 

  ${props => props.active ? `
    color: ${Colors.Accent}
    :after {
      background: ${Colors.DarkGrey}
    }

  ` : ''}
`

const NavBar = ({ pages }) => {
  return (
    <NavBox>
      <Location>
        {({ location } ) => {
          let activePage = location.pathname

          return pages.map(page => {
            return (
              <NavItem key={page.name}>
                  <NavLink to={page.link} active={activePage===page.link} external={page.external}>
                    <span css={`font-family: Oswald;`}>{page.name}</span>
                  </NavLink>
              </NavItem>
            )
          })
        }}
      </Location>

    </NavBox>
  )
}

const pages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about/',
  },
  {
    name: 'Projects',
    link: '/projects/',
  },
  {
    name: 'Resume',
    link: '/resume.pdf',
    external: 'true',
  },
]

export default () => <NavBar pages={pages} />