import React from "react";
import { Link } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

import "./styles.scss";
import "./step.scss";

const { Carousel } =
  typeof window !== `undefined` ? require("react-responsive-carousel") : {};

const Full_Bowl = () => {
  return (
    <>
      <h1 className="carousel-header">Serve your family Balanced Bowls!</h1>
      <p style={{ marginBottom: ".5em", padding: "0 3em"}}>
        This visual guide aims to help you create wholesome Balanced Bowls using
        MAGGI® noodles and a variety of fresh ingredients for your family from
        the comfort of your own home.
      </p>
      <p style={{ fontFamily: 'AvenirNext'}}>Swipe right to find out how!</p>
    </>
  );
};

const Step_1 = () => {
  return (
    <>
      <h1>Step 1</h1>
      <p>Pick your favourite MAGGI® Noodle as your carbohydrate-of-choice</p>
      <div className="columns steps">
        <span className="steps-equal">=</span>
        <div className="column is-6 step">
          <div className="step-1-1"></div>
        </div>
        <div className="column is-6">
          <div className="step-1-2"></div>
        </div>
      </div>
      <div className="columns is-gapless">
        <div className="column is-6">
          <span className="sub-title-custom">1 fistful</span>
        </div>
        <div className="column is-6">
          <span className="sub-title-custom">1 packet</span>
        </div>
      </div>
    </>
  );
};

const Step_2 = () => {
  return (
    <>
      <h1>Step 2</h1>
      <p style={{ padding: ".8em 4em" }}>Pick protein to add to your noodles</p>
      <div className="columns steps">
        <span className="steps-equal">=</span>
        <div className="column is-6 step">
          <div className="step-2-1"></div>
        </div>
        <div className="column is-6">
          <div className="step-2-2"></div>
        </div>
      </div>
      <div className="columns is-gapless">
        <div className="column is-6">
          <span className="sub-title-custom">1 palm size</span>
        </div>
        <div className="column is-6">
          <span className="sub-title-custom">protein</span>
        </div>
      </div>
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
        <div
          className="column is-6 step"
          style={{ padding: ".5em 2em" }}
        >
          <div className="step-3-1"></div>
        </div>
        <div className="column is-6">
          <div className="step-3-2"></div>
        </div>
      </div>
      <div className="columns is-gapless">
        <div className="column is-6">
          <span className="sub-title-custom">1 handful</span>
        </div>
        <div className="column is-6">
          <span className="sub-title-custom">vegetables</span>
        </div>
      </div>
    </>
  );
};

export default class CarouselSection extends React.PureComponent {
  state = {
    currentSlide: 0,
  };
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
    if (typeof window === "undefined") return null;
    let isDisplayProtein = false;
    let isDisplayCarbon = false;
    let isDisplayVege = false;
    const { currentSlide } = this.state;
    if (currentSlide === 0) {
      isDisplayProtein = true;
      isDisplayCarbon = true;
      isDisplayVege = true;
    } else if (currentSlide === 1) {
      isDisplayCarbon = true;
    } else if (currentSlide === 2) {
      isDisplayProtein = true;
    } else if (currentSlide === 3) {
      isDisplayVege = true;
    }
    return (
      <div className="main-carousel">
        <div className="columns is-gapless">
          <div className="column is-narrow content">
            <div className="glass-of-water">
              <span>and a glass of water</span>
              <div className="stroke"></div>
            </div>
            <div className="main-carousel-balance-bowl columns is-gapless">
              <div className="column is-6">
                <div style={{ height: "50%" }}>
                  <div
                    className={`main-carousel-balance-bowl-protein ${
                      isDisplayProtein ? "active" : ""
                    }`}
                  >{isDisplayProtein ? <span>Protein</span> : null}</div>
                </div>
                <div style={{ height: "50%" }}>
                  <div
                    className={`main-carousel-balance-bowl-carbohydrates ${
                      isDisplayCarbon ? "active" : ""
                    }`}
                  >{isDisplayCarbon ? <span>Carbohydrates</span> : null}</div>
                </div>
              </div>
              <div className="column">
                <div
                  className={`main-carousel-balance-bowl-vegetable ${
                    isDisplayVege ? "active" : ""
                  }`}
                >{isDisplayVege ? <span>Vegetables</span> : null}</div>
              </div>
              <div className="main-carousel-balance-bowl-full"></div>
            </div>
          </div>
          <div
            className="column"
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
                  <span
                    className={`indicator ${
                      currentSlide === 0 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(0)}
                  >
                    •
                  </span>
                  <span
                    className={`indicator ${
                      currentSlide === 1 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(1)}
                  >
                    •
                  </span>
                  <span
                    className={`indicator ${
                      currentSlide === 2 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(2)}
                  >
                    •
                  </span>
                  <span
                    className={`indicator ${
                      currentSlide === 3 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(3)}
                  >
                    •
                  </span>
                </div>
                <p className="description">
                  Serving sizes are just suggested approximate proportions of
                  food you can include on your plate.{" "}
                  <span>Find out more.</span>
                </p>
                <Link to="/make-balanced-bowl">
                  <button
                    className="btn btn-primary"
                    style={{ fontSize: "1rem", marginTop: '1em' }}
                  >
                    Make a Balanced Bowl
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
