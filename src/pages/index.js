import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"

export default function index({data}) {
    console.log(data)
    // // lets deconstruct
    // const {title, description} = data.site.siteMetadata
    return (
        <Layout>
        <section  className={styles.header}>
        <div>
            <h2 >Design</h2>
            <h4>Develop & Deploy</h4>
            <p>Web developer based in Kuşadası</p>
            <Link to="/portfolio" className={styles.btn}>My projects</Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{maxWidth: "100%"}}></img> */}
      <Img fluid={data.file.childImageSharp.fluid} />
       {/* <p>{title} - {description} </p> */}
        </section>
        </Layout>
    )
}

// this query is found upstairs as a pros, the "data" I logged gives this siteInfo object
//this is a page query,
//cannot be done with components like navbar or layout.js
//for that, we need static query

// export const query= graphql`
// query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
  
// `

//image optimiation
//if you ever get an error while doing this,
//stop the server
//delete the cache and public folders
//restrart the server
export const query= graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}


`