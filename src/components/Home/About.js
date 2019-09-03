import React from "react"
import Title from "../Title"
//@ts-ignore
import styles from "../../css/about.module.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const imageQuery = graphql`
  query aboutImg {
    aboutImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const About = () => {
  const { aboutImg } = useStaticQuery(imageQuery)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImg.childImageSharp.fluid} alt="land scape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Lorem ipsum dolor,</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dicta
            tempora ratione illum perspiciatis facere optio omnis placeat
            aperiam! Molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dicta
            tempora ratione illum perspiciatis facere optio omnis placeat
            aperiam! Molestias.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
