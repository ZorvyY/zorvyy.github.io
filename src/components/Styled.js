import React from "react"
import styled from "styled-components"

import Colors from "../constants/colors"

import { Link as GatsbyLink } from "gatsby"
export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${Colors.DarkGrey};

  :hover {
    color: ${Colors.Accent};
  }
`

export const Anchor = styled.a`
  text-decoration: none;
  color: ${Colors.DarkGrey};

  :hover {
    color: ${Colors.Accent};
  }
`