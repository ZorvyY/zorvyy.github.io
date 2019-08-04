import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

import { IconLink } from './Styled'

const IconTray = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Social = ({ socials }) => {
  return (
    <IconTray>
      {socials.map(social => {
        return (
          <div css='padding: 0 0.5ch;' key={social.link}>
            <IconLink to={social.link}><FontAwesomeIcon icon={social.icon} /></IconLink>
          </div>
        )
      })}
    </IconTray>
  )
}

const socials = [
  {
    link: 'https://github.com/ZorvyY',
    icon: faGithub,
  },
  {
    link: 'https://linkedin.com/in/zoravur-singh',
    icon: faLinkedin,
  },
  {
    link: 'https://codepen.io/ZorvyY',
    icon: faCodepen,
  }
]

export default () => <Social socials={socials} />