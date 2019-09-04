import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// @ts-ignore
import styles from "../css/navbar.module.css"
import links from "../constants/link"
import social from "../constants/social-icons"
// @ts-ignore
import logo from "../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => setIsOpen(isOpen => !isOpen)
  return (
    <nav className={styles.navBar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="background logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, i) => (
            <li key={i}>
              <AniLink fade to={item.path}>
                {item.name}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {social.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
