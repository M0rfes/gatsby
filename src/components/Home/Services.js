import React from "react"
import Title from "../Title"
// @ts-ignore
import styles from "../../css/services.module.css"
import services from "../../constants/services"
const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((s, i) => (
          <article key={i} className={styles.service}>
            <span>{s.icon}</span>
            <h4>{s.text}</h4>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
