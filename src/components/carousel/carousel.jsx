import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './styles.scss';
import './step.scss';

const Full_Bowl = () => {
  return (
    <>
      <h1>Serve your family Balanced Bowls!</h1>
      <p style={{marginBottom: '1em'}}>
        This visual guide aims to help you create wholesome Balanced Bowls using
        MAGGI® noodles and a variety of fresh ingredients for your family from
        the comfort of your own home.
      </p>
      <p>Swipe right to find out how!</p>
    </>
  );
}

const Step_1 = () => {
  return (
    <>
      <h1>Step 1</h1>
      <p>
        Pick your favourite MAGGI® Noodle as your carbohydrate-of-choice
      </p>
      <div className="columns steps">
        <span className="steps-equal">=</span>
        <div className="column is-6-widescreen is-6-fullhd step">
          <div className="step-1-1"></div>
        </div>
        <div className="column is-6-widescreen is-6-fullhd">
          <div className="step-1-2"></div>
        </div>
      </div>
      <div className="columns is-gapless">
        <div className="column is-6-widescreen is-6-fullhd">
          <span className="sub-title">1 fistful</span>
        </div>
        <div className="column is-6-widescreen is-6-fullhd">
          <span className="sub-title">1 packet</span>
        </div>
      </div>
      <p className="description">
        Serving sizes are just suggested approximate proportions of food you can
        include on your plate. <span>Find out more.</span>
      </p>
    </>
  );
};

const Step_2 = () => {
  return (
    <>
      <h1>Step 2</h1>
      <p style={{padding: '0 4em'}}>Pick protein to add to your noodles</p>
      <div className="columns steps">
        <span className="steps-equal">=</span>
        <div className="column is-6-widescreen is-6-fullhd step">
          <div className="step-2-1"></div>
        </div>
        <div className="column is-6-widescreen is-6-fullhd">
          <div className="step-2-2"></div>
        </div>
      </div>
      <div className="columns is-gapless">
        <div className="column is-6-widescreen is-6-fullhd">
          <span className="sub-title">1 palm size</span>
        </div>
        <div className="column is-6-widescreen is-6-fullhd">
          <span className="sub-title">protein</span>
        </div>
      </div>
      <p className="description">
        Serving sizes are just suggested approximate proportions of food you can
        include on your plate. <span>Find out more.</span>
      </p>
    </>
  );
};

const Step_3 = () => {
  return (
    <>
      <h1>Step 3</h1>
      <p style={{ padding: "0 4em" }}>Pick vegetables to add to your noodles</p>
      <div className="columns steps">
        <span className="steps-equal">=</span>
        <div className="column is-6-widescreen is-6-fullhd step" style={{padding: '.5em 2em'}}>
          <div className="step-3-1"></div>
        </div>
        <div className="column is-6-widescreen is-6-fullhd">
          <div className="step-3-2"></div>
        </div>
      </div>
      <div className="columns is-gapless">
        <div className="column is-6-widescreen is-6-fullhd">
          <span className="sub-title">1 handful</span>
        </div>
        <div className="column is-6-widescreen is-6-fullhd">
          <span className="sub-title">vegetables</span>
        </div>
      </div>
      <p className="description">
        Serving sizes are just suggested approximate proportions of food you can
        include on your plate. <span>Find out more.</span>
      </p>
    </>
  );
};

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
                  infiniteLoop
                  swipeable
                  statusFormatter={() => ""}
                  showIndicators={false}
                  showArrows={false}
                  showThumbs={false}
                  selectedItem={this.state.currentSlide}
                  onChange={this.updateCurrentSlide}
                >
                  <div key="slide1">
                    <Full_Bowl />
                  </div>
                  <div key="slide2">
                    <Step_1 />
                  </div>
                  <div key="slide3">
                    <Step_2 />
                  </div>
                  <div key="slide4">
                    <Step_3 />
                  </div>
                </Carousel>
                <div className="indicator-wrapper">
                  <span className="indicator">•</span>
                  <span className="indicator">•</span>
                  <span className="indicator">•</span>
                  <span className="indicator">•</span>
                </div>
                <button className="button btn-primary">
                  Make a Balanced Bowl
                </button>
                <p>View our Recipes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
