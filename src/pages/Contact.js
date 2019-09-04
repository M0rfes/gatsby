import React from "react"
import { graphql } from "gatsby"

import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import ContactForm from "../components/Contact/contact"
const Contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactBG.childImageSharp.fluid}></StyledHero>
      <ContactForm />
    </Layout>
  )
}
export const query = graphql`
  query {
    contactBG: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Contact
