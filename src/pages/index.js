import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from 'gatsby-image'

export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Home page!!!!!</h1>
          <h3>Develop & Deploy</h3>
          <p>Ux designer & web developer based in Gujarat, India.</p>
          <Link className={styles.btn} to="projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
