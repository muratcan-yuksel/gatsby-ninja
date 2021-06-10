import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/projects.module.css"


export default function portfolio({data}) {
    console.log(data)
    const projects=data.allMarkdownRemark.nodes
    console.log(data.allMarkdownRemark.nodes[1].frontmatter.title)
    console.log(projects[1].frontmatter.title)

    
    return (
        <Layout>
        <div className={styles.portfolio}>
              <h3>Portfolio</h3>
            <h3>Projects I've created</h3>
            <div className={styles.projects}>
                {projects.map(project=>(
                    <Link to={"/projects/" + project.frontmatter.slug} key={project.id} >
                        <div>
                            <h3>{project.frontmatter.title}</h3>
                            <p> {project.frontmatter.stack} </p>

                        </div>
                    </Link>
                ))}
                
            </div>
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