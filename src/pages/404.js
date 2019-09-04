import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import StyledHero from "../components/StyledHero"
// @ts-ignore
import styles from "../css/error.module.css"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops It's a dead end" info="">
          <AniLink to="/" className="btn-white">
            GO Home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
export const query = graphql`
  query {
    errorBG: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default ErrorPage
