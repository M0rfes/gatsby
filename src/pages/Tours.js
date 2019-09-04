import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
const Tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.toursBG.childImageSharp.fluid}>
        <div>Hello From Tours</div>
      </StyledHero>
    </Layout>
  )
}
export const query = graphql`
  query {
    toursBG: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Tours
