import Layout from "../components/layout/layout-mbb";
import SEO from "../components/layout/seo";
import React, { Component } from "react";
import { MAKE_BALANCEC_BOWL_LANG as lang } from "../language/en";
import MbbStepOne from "../components/mbb-steps/mbb-stepone";
import MbbStepTwo from "../components/mbb-steps/mbb-steptwo";
import MbbStepThree from "../components/mbb-steps/mbb-stepthree";
import bgImage from "../images/make-balanced-bowl/mbb-bg-1-op.png";

const STEPS = [
  {
    id: 0,
    text: lang.INSTRUCTION,
  },
  {
    id: 1,
    text: lang.STEP_1,
    options: [{}],
  },
  {
    id: 2,
    text: lang.STEP_2,
  },
  {
    id: 3,
    text: lang.STEP_3,
  },
  {
    id: 4,
    text: lang.FINISH,
  },
];

export default class MakeBalancedBowlPage extends Component {
  state = {
    activeStep: {
      id: 0,
      selectedItem: {
        1: [],
        2: [],
        3: [],
      },
    },
  };
  onSelectStep1 = (index) => {
    this.updateActiveStep(1, index);
  };
  onSelectStep2 = (index) => {
    this.updateActiveStep(2, index);
  };
  onSelectStep3 = (index) => {
    this.updateActiveStep(3, index);
  };
  updateActiveStep = (step, stepIndex) => {
    const { activeStep } = this.state;
    let selection = activeStep.selectedItem[step];
    const index = selection.indexOf(stepIndex);
    if (index == -1) {
      selection.push(stepIndex);
    } else {
      selection.splice(index, 1);
    }
    activeStep.selectedItem[step] = selection;
    this.setState({
      activeStep: activeStep,
    });
    console.log(this.state);
  };

  nextStep = () => {
    const { activeStep } = this.state;
    activeStep.id = activeStep.id + 1;
    this.setState({
      activeStep: activeStep,
    });
  };
  backStep = () => {
    const { activeStep } = this.state;
    activeStep.id = activeStep.id - 1;
    this.setState({
      activeStep: activeStep,
    });
  };

  renderStep(step) {
    switch (step) {
      case 0:
        return (
          <div className="step-0">
            {lang.INTRO_TITLE}
            <h2 className="sub-title">{lang.INTRO_BIG_TITLE}</h2>
            <p>{lang.INTRO_DES}</p>
            <button className="btn btn-primary" onClick={this.nextStep}>
              {lang.START_NOW}
            </button>
            <p className="caption">{lang.INTRO_HINT}</p>
          </div>
        );
      case 1:
        return (
          <div>
            <p>{lang.STEP1_TITLE}</p>
            <MbbStepOne
              lang={lang}
              selection={this.state.activeStep.selectedItem["1"]}
              selectHandle={this.onSelectStep1}
            />
            <div className="">
              <button className="btn mr-10" onClick={this.backStep}>
                {lang.BACK}
              </button>
              <button className="btn btn-primary" onClick={this.nextStep}>
                {lang.NEXT}
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <p>{lang.STEP2_TITLE}</p>
            <MbbStepTwo
              lang={lang}
              selection={this.state.activeStep.selectedItem["2"]}
              selectHandle={this.onSelectStep2}
            />
            <div className="">
              <button className="btn mr-10" onClick={this.backStep}>
                {lang.BACK}
              </button>
              <button className="btn btn-primary" onClick={this.nextStep}>
                {lang.NEXT}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <p>{lang.STEP3_TITLE}</p>
            <MbbStepThree
              lang={lang}
              selection={this.state.activeStep.selectedItem["3"]}
              selectHandle={this.onSelectStep3}
            />
            <div className="">
              <button className="btn mr-10" onClick={this.backStep}>
                {lang.BACK}
              </button>
              <button className="btn btn-primary" onClick={this.nextStep}>
                {lang.NEXT}
              </button>
            </div>
          </div>
        );
      case 4:
        return <div>DOne</div>;
    }
  }
  render() {
    return (
      <>
        <Layout>
          <SEO title={lang.MAKE_A_BALANCED_BOWL} />
          <div
            className="mbb-main-content"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className="step-content-wrapper">
              <div className="step-header">
                <h1 className="title">{lang.MAKE_YOUR_BALANCED_BOWL}</h1>
                <ul>
                  {STEPS.map((item) => (
                    <li>{item.text}</li>
                  ))}
                </ul>
              </div>
              <div className="step-content">
                {this.renderStep(this.state.activeStep.id)}
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
