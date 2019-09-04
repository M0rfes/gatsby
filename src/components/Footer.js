import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// @ts-ignore
import styles from "../css/footer.module.css"
import links from "../constants/link"
import social from "../constants/social-icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, i) => (
          <AniLink fade to={item.path} key={i}>
            {item.name}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {social.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company all right reserve
      </div>
    </footer>
  )
}

export default Footer
