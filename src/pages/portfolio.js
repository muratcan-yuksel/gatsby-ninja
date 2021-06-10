import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/projects.module.css"


export default function portfolio({data}) {
    console.log(data)
    return (
        <Layout>
        <div className={styles.portfolio}>
              <h3>Portfolio</h3>
            <h3>Projects I've created</h3>
        </div>
        </Layout>
    )
}
// export page query
export const query= graphql`
query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`