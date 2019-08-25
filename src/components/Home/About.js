import React from "react"
import Title from "../Title"
//@ts-ignore
import styles from "../../css/about.module.css"
//@ts-ignore
import img from "../../images/blogBcg.jpeg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} />
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
