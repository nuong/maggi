import React from "react";
import "./styles.scss";
import baseBox from "../../images/why-maggi/base box.png";
import baseBox2 from "../../images/why-maggi/base box2.png";
import icon1 from "../../images/why-maggi/icon 1.png";
import icon2 from "../../images/why-maggi/icon 2.png";
import convenience from "../../images/why-maggi/convenience icon.png";

export default class MaggiSectionComponent extends React.PureComponent {
  state = {};

  render() {
    return (
      <>
        <div className="why-maggi" id="why-maggi">
          <h1>Why MAGGI®?</h1>
          <p className="why-maggi-content">
            MAGGI® 2-Minute Noodles are carbohydrate-rich foods like rice,
            cereal and potato that can be used to paper balanced dishes for your
            family! Apart from the delicious taste and aroma that you know and
            love, you can also enjoy the following benefits of cooking with
            MAGGI® 2-Minute Noodles:
          </p>
        </div>
        <div className="columns" style={{ margin: 0 }}>
          <div
            className="column is-8-desktop is-8-widescreen is-8-fullhd"
            style={{ width: "64%" }}
          >
            <div className="custom-box">
              <div className="custom-box-item">
                <img src={baseBox} alt="" />
                <div className="box-container">
                  <p className="box-container-header">Selected Ingredients</p>
                  <div className="columns is-gapless">
                    <div className="column is-6 box-container-content">
                      <img src={icon1} alt="" />
                      <p>
                        MAGGI® Noodles are made from 100% Australian Wheat with
                        a good source of protein
                      </p>
                    </div>
                    <div className="column is-6 box-container-content">
                      <img src={icon2} alt="" />
                      <p>
                        MAGGI®’s signature tastemakers are made from only the
                        best selected ingredients to enhance the flavour
                        profiles of your noodles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="column is-4-desktop is-4-widescreen is-4-fullhd"
            style={{ paddingBottom: "1.5em" }}
          >
            <div
              className="custom-box-item right-box"
            >
              <img src={baseBox2} alt="" style={{ height: "100%" }} />
              <div className="box-container convenience">
                <p className="convenience-title" className="box-container-header">
                  Convenience
                </p>
                <div className="box-container-content">
                  <img src={convenience} alt="" style={{ marginTop: "2em" }} />
                  <p>MAGGI® Noodles can be prepared within 2-minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
