import React from "react"
import styled from "styled-components"

import Colors from "../constants/Colors"

import { Link as GatsbyLink } from "gatsby"
export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${Colors.DarkGrey};

  :hover {
    color: ${() => `hsl(${360 * Math.random() | 0}, 100%, 50%)`};
  }
`

export const Anchor = styled.a`
  text-decoration: none;
  color: ${Colors.DarkGrey};

  :hover {
    color: ${() => `hsl(${360 * Math.random() | 0}, 100%, 50%)`};
  }
`