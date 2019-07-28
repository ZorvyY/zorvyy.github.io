import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Anchor } from "../components/Styled"

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectItemBox = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 1em;
  margin: 0 0 1em;

`

const Project = ({ name, description, url}) => {
  return (
    <ProjectItemBox key={name}>
      <h1>{name}</h1>
      <p>{description}</p>
      <Anchor href={url}><FontAwesomeIcon icon={faGithub}/></Anchor>
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