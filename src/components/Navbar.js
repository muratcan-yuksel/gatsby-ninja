import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    // //use static query hook to do static query
    // //you see, in contrast to page queries in insex.js,
    // //these are not made at the bottom of the page, but inside the component instead
    //also you can use usestaticquery only once in a component
    // const data= useStaticQuery(graphql`
    // query SiteInfo {
    //     site {
    //       siteMetadata {
    //         title
    //       }
    //     }
    //   }

    // `)
//desctructure data query
const{title}= data.site.siteMetadata

    return (
       <nav>
       {/* <h1>{title}</h1> */}
           <h1>Murat Yüksel</h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/portfolio">Portfolio projects</Link>
           </div>
       </nav>
    )
}
