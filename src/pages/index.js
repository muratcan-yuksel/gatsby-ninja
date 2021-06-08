import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function index() {
    return (
        <Layout>
        <section  className={styles.header}>
        <div>
            <h2 >Design</h2>
            <h4>Develop & Deploy</h4>
            <p>Web developer based in Kuşadası</p>
            <Link to="/portfolio" className={styles.btn}>My projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: "100%"}}></img>
        </section>
        </Layout>
    )
}
