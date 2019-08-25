import React, { useState } from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum. Ipsa sapiente, porro quibusdam mollitia eaque neque. Rerum, nam impedit!"
        >
          <Link to="Tours" className="btn-white">
            Explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
