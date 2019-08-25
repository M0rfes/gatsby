import React from "react"

const SimpleHero = ({ children = null }) => {
  return <header className="defaultHero">{children}</header>
}

export default SimpleHero
