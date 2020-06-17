import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
// import CarouselLanding from "../components/layout/carousel"

class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        {/* <CarouselLanding /> */}
      </Layout>
    )
  }
}
export default IndexPage
