import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Anchor, Link } from "../components/Styled"
import colors from "../constants/Colors";

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectItemBox = styled.div`
  width: 100%;
  // border: 1px solid black;
  padding: 1em;
  margin: 0 0 1em;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
`

// const IconLinkTray = styled.div``

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
`


const NameTitle = ({ name, owner }) => {
  return (
    <span>
      <span css={`color: ${colors.MediumGrey}`}>
        {/* <Anchor css={`color: ${colors.MediumGrey}`} href={owner.url}>{owner.login}{` / `}</Anchor> */}
        {owner.login}{` / `}
      </span>
      <span css={`color: ${colors.Black}`}>{name}</span>
    </span>
  )
}


const Project = ({ owner, name, description, url}) => {
  return (
    <ProjectItemBox key={name}>
      <ProjectHeader>
        <NameTitle name={name} owner={owner} />
        <Anchor href={url}><FontAwesomeIcon icon={faGithub}/></Anchor>
      </ProjectHeader>
      <p>{description}</p>
    </ProjectItemBox>
  )
}

const ProjectsPage = ({ data }) => {
  const repos = data.github.user.pinnedItems.nodes

  return (
    <Layout>
      <SEO title="Projects | Zoravur Singh" />
      <h2>Projects</h2>
      <p>Here are some things that I've done.</p>
      <ProjectList>
        {repos.map(Project)}
      </ProjectList>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query ProjectsQuery {
    github {
      user(login: "ZorvyY") {
        pinnedItems(first: 10) {
          nodes {
            ... on GitHub_Repository {
              owner {
                url
                login
              }
              name
              description
              url
            }
          }
          pageInfo {
            endCursor
            startCursor
          }
        }
      }
    }
  }
`