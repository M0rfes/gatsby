import React from "react"
import { graphql } from "gatsby"

import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import Header from "../components/Header"

const Blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBG.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}
export const query = graphql`
  query {
    blogBG: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Blog
