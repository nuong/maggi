import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import CarouselSection from "../components/carousel/carousel";
import MaggiSection from "../components/maggi-section/MaggiSection";
import DeliciousRecipes from "../components/delicious-recipes/DeliciousRecipesComponent";
import ScrollToTop from "../components/layout/scrollToTop";
class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <CarouselSection />
        <MaggiSection />
        <DeliciousRecipes />
        <ScrollToTop />
      </Layout>
    );
  }
}
export default IndexPage;
