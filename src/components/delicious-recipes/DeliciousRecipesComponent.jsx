import React from "react";
import "./styles.scss";
import base1 from "../../images/delicious-recipes/red base box.png";
import base2 from "../../images/delicious-recipes/base.png";
import base3 from "../../images/delicious-recipes/purple box base.png";

export default class MaggiSectionComponent extends React.PureComponent {
  state = {};

  render() {
    return (
      <>
        <div className="delicious-recipes" id="delicious-recipes">
          <h1>Delicious Recipes</h1>
          <div className="columns" style={{ margin: 0, marginTop: "6em" }}>
            <div className="column is-4">
              <img src={base1} alt="" />
            </div>
            <div className="column is-4">
              <img src={base2} alt="" />
            </div>
            <div className="column is-4">
              <img src={base3} alt="" />
            </div>
          </div>
          <button className="button btn-primary" style={{ marginTop: "6em" }}>
            Customise your own Balanced Bowl
          </button>
        </div>
      </>
    );
  }
}
