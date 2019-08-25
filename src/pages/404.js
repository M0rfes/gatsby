import React from "react"
import { Link } from "gatsby"
// @ts-ignore
import styles from "../css/error.module.css"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops It's a dead end" info="">
          <Link to="/" className="btn-white">
            GO Home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
