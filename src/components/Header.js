import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query Site {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div>
      title:{siteMetadata.title} author:{siteMetadata.author}
    </div>
  )
}

export default Header
