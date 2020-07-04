import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import CarouselSection from "../components/carousel/carousel";
import MaggiSection from "../components/maggi-section/MaggiSection";
import DeliciousRecipes from "../components/delicious-recipes/DeliciousRecipesComponent";
import ScrollToTop from "../components/layout/scrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
class IndexPage extends React.PureComponent {
  componentDidMount() {
    AOS.init({
      offset: 600,
      duration: 600,
    });
  }
  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div
          data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-anchor-placement="top-bottom"
          data-aos-mirror="true"
        >
          <CarouselSection />
        </div>

        <div data-aos="fade-up">
          <MaggiSection />
        </div>
        <DeliciousRecipes />
        <ScrollToTop />
      </Layout>
    );
  }
}
export default IndexPage;
