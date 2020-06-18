import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import CarouselSection from "../components/carousel/carousel"

class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <CarouselSection/>
      </Layout>
    )
  }
}
export default IndexPage
