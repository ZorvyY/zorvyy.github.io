import React from "react"
import styled from "styled-components"

import Colors from "../constants/Colors"

import { Link as GatsbyLink } from "gatsby"

export const UnstyledLink = props => {
  if (props.to.startsWith('http') || props.external) {
    const { to, external, ...rest } = props
    return <a href={to} {...rest} /> 
  } else {
    const { external, ...rest } = props
    return <GatsbyLink {...rest} />
  }
} 

export const Link = styled(UnstyledLink)`
  text-decoration: none;
  color: ${Colors.DarkGrey};
  position: relative;

  :hover {
    :after { 
      width: 100%; 
      left: 0; 
    }
  }

  :after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${Colors.Accent};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
`

export const IconLink = styled(UnstyledLink)`
  text-decoration: none;
  color: ${Colors.DarkGrey};
  transition: color 200ms;

  :hover {
    color: ${Colors.Accent};
  }
`