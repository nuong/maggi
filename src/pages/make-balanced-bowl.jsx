import Layout from "../components/layout/layout-mbb";
import SEO from "../components/layout/seo";
import React, { Component } from "react";
import { MAKE_BALANCEC_BOWL_LANG as lang } from "../language/en";
import MbbStepOne from "../components/mbb-steps/mbb-stepone";
import MbbStepTwo from "../components/mbb-steps/mbb-steptwo";
import MbbStepThree from "../components/mbb-steps/mbb-stepthree";
import MbbStepFinal from "../components/mbb-steps/mbb-final";
import WarningModal from "../components/mbb-steps/warning-modal";
import bgImage from "../images/make-balanced-bowl/mbb-bg-1.jpg";
import bgImageLarge from "../images/make-balanced-bowl/final/bg-op.jpg";

const STEPS = [
  {
    id: 0,
    text: lang.INSTRUCTION,
  },
  {
    id: 1,
    text: lang.STEP_1,
    options: [{}],
    min: 1,
    max: 1,
  },
  {
    id: 2,
    text: lang.STEP_2,
    min: 1,
    max: 2,
  },
  {
    id: 3,
    text: lang.STEP_3,
    min: 1,
    max: 2,
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
    waringModalVisible: false,
    warningModalMes: "",
  };
  onSelectStep1 = (index) => {
    // this.updateActiveStep(1, index);
    const { activeStep } = this.state;
    activeStep.selectedItem[1] = [index];
    this.setState({
      activeStep: activeStep,
    });
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
      if (selection.length >= 2) {
        this.openWarningModal(lang.MAX_WARNING);
        return;
      }
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
    const min = (STEPS.find((it) => it.id === activeStep.id) || {}).min;
    if (
      min &&
      activeStep.selectedItem[activeStep.id] &&
      activeStep.selectedItem[activeStep.id].length < min
    ) {
      this.openWarningModal(lang.MIN_WARNING);
      return;
    }
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
  makeNewBowl = () => {
    const activeStep = {
      id: 0,
      selectedItem: {
        1: [],
        2: [],
        3: [],
      },
    };
    this.setState({
      activeStep: activeStep,
    });
  };
  openWarningModal = (mess) => {
    this.setState({
      waringModalVisible: true,
      warningModalMes: mess,
    });
  };
  closeWarningModal = () => {
    this.setState({
      waringModalVisible: false,
    });
  };

  renderStep(step) {
    switch (step) {
      case 0:
        return (
          <div className="step-0">
            <div className="step-dt-header">{lang.INTRO_TITLE}</div>
            <h2 className="mbb-sub-title">{lang.INTRO_BIG_TITLE}</h2>
            <p className="step-des">{lang.INTRO_DES}</p>
            <button className="btn btn-primary" onClick={this.nextStep}>
              {lang.START_NOW}
            </button>
            <p className="caption">{lang.INTRO_HINT}</p>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="step-dt-header">{lang.STEP1_TITLE}</div>
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
            <div className="step-dt-header">{lang.STEP2_TITLE}</div>
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
            <div className="step-dt-header">{lang.STEP3_TITLE}</div>
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
        return (
          <div>
            <MbbStepFinal
              lang={lang}
              selection={this.state.activeStep.selectedItem}
            />
            <div className="final-action">
              <button className="btn btn-primary" onClick={this.makeNewBowl}>
                {lang.MAKE_NEW_BALANCED_BOWl}
              </button>
              <div>
                <span>{lang.SHARE_RECIPE}</span>
              </div>
            </div>
          </div>
        );
    }
  }
  render() {
    return (
      <>
        <Layout bg={this.state.activeStep.id === 4 ? bgImageLarge : bgImage}>
          <SEO title={lang.MAKE_A_BALANCED_BOWL} />
          <div className="mbb-main-content">
            <div className="step-content-wrapper">
              <div className="step-header">
                <h1 className="title">{lang.MAKE_YOUR_BALANCED_BOWL}</h1>
                <ul>
                  {STEPS.map((item) => (
                    <li
                      key={item.id}
                      className={
                        this.state.activeStep.id === item.id ? "active" : ""
                      }
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="step-content">
                {this.renderStep(this.state.activeStep.id)}
                {[1, 2, 3].indexOf(this.state.activeStep.id) > -1 ? (
                  <div className="hover-hint">
                    <img
                      src={require("../images/make-balanced-bowl/hint.png")}
                      alt=""
                    />
                    <span>{lang.HOVER_HINT}</span>
                  </div>
                ) : null}
              </div>
            </div>
            {this.state.waringModalVisible ? (
              <WarningModal
                message={this.state.warningModalMes}
                closeModal={this.closeWarningModal}
              />
            ) : null}
          </div>
        </Layout>
      </>
    );
  }
}
