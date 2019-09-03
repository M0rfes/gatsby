import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.BG.childImageSharp}>
        <Banner
          title="Continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum. Ipsa sapiente, porro quibusdam mollitia eaque neque. Rerum, nam impedit!"
        >
          <Link to="Tours" className="btn-white">
            explore
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  query {
    BG: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
