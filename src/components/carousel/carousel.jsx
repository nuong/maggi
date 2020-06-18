import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './styles.scss';

const Step_1 = () => {
  return (
    <>
      <h1>Serve your family Balanced Bowls!</h1>
      <p>
        This visual guide aims to help you create wholesome Balanced Bowls using
        MAGGI® noodles and a variety of fresh ingredients for your family from
        the comfort of your own home.
      </p>
      <p>Swipe right to find out how!</p>
    </>
  );
}



export default class CarouselSection extends React.PureComponent {
  state = {
    currentSlide: 0,
  }
  next = () => {
    const { currentSlide } = this.state;
    let index = currentSlide + 1;
    if (currentSlide === 3) {
      index = 0;
    }
    this.setState({
      currentSlide: index,
    });
  };

  prev = () => {
    const { currentSlide } = this.state;
    let index = currentSlide - 1;
    if (currentSlide === 0) {
      index = 3;
    }
    this.setState({
      currentSlide: index,
    });
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    let isDisplayProtein = false;
    let isDisplayCarbon = false;
    let isDisplayVege = false;
    const {currentSlide} = this.state;
    if(currentSlide === 0) {
      isDisplayProtein = true;
      isDisplayCarbon = true;
      isDisplayVege = true;
    } else if(currentSlide === 1) {
      isDisplayCarbon = true;
    } else if (currentSlide === 2) {
      isDisplayProtein = true;
    } else if (currentSlide === 3) {
      isDisplayVege = true;
    }
    return (
      <div className="main-carousel">
        <div className="columns">
          <div className="column is-8-widescreen is-8-fullhd content">
            <div className="main-carousel-balance-bowl columns is-gapless">
              <div className="column is-6">
                <div style={{ height: "50%" }}>
                  <div
                    className={`main-carousel-balance-bowl-protein ${
                      isDisplayProtein ? "active" : ""
                    }`}
                  ></div>
                </div>
                <div style={{ height: "50%" }}>
                  <div
                    className={`main-carousel-balance-bowl-carbohydrates ${
                      isDisplayCarbon ? "active" : ""
                    }`}
                  ></div>
                </div>
              </div>
              <div className="column">
                <div
                  className={`main-carousel-balance-bowl-vegetable ${
                    isDisplayVege ? "active" : ""
                  }`}
                ></div>
              </div>
              <div className="main-carousel-balance-bowl-full"></div>
            </div>
          </div>
          <div
            className="column is-4-widescreen is-4-fullhd"
            style={{ position: "relative" }}
          >
            <div className="main-carousel-step">
              <span
                role="button"
                className="left-arrow"
                onClick={this.prev}
                onKeyDown={this.prev}
              ></span>
              <span
                role="button"
                className="right-arrow"
                onClick={this.next}
                onKeyDown={this.next}
              ></span>
              <div>
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  statusFormatter={() => ""}
                  showIndicators={false}
                  showArrows={false}
                  showThumbs={false}
                  selectedItem={this.state.currentSlide}
                  onChange={this.updateCurrentSlide}
                >
                  <div>
                    <Step_1 />
                  </div>
                  <div>
                    <Step_1 />
                  </div>
                  <div>
                    <Step_1 />
                  </div>
                  <div>
                    <Step_1 />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
