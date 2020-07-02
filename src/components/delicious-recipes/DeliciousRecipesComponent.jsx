import React from "react";
import { Link } from "gatsby";
import "./styles.scss";
import base1 from "../../images/delicious-recipes/Kari-Bowl.png";
import base2 from "../../images/delicious-recipes/Ayam-Bowl.png";
import base3 from "../../images/delicious-recipes/Tomyum-Bowl.png";

import line from "../../images/delicious-recipes/line.png";
import line2 from "../../images/delicious-recipes/line2.png";
import line3 from "../../images/delicious-recipes/line3.png";

import palm from "../../images/make-balanced-bowl/final/palmful.png";
import handful from "../../images/make-balanced-bowl/final/handful.png";
import fistful from "../../images/make-balanced-bowl/final/fistful.png";

import noddle_1 from "../../images/make-balanced-bowl/step1/1.png";
import noddle_2 from "../../images/make-balanced-bowl/step1/2.png";
import noddle_3 from "../../images/make-balanced-bowl/step1/3.png";

import chicken from "../../images/make-balanced-bowl/step2/2.png";

import egg from "../../images/make-balanced-bowl/step2/3.png";
import prawn from "../../images/make-balanced-bowl/step2/4.png";
import squid from "../../images/make-balanced-bowl/step2/5.png";

import mustard from "../../images/make-balanced-bowl/step3/1.png";
import carrot from "../../images/make-balanced-bowl/step3/2.png";
import bokchoi from "../../images/make-balanced-bowl/step3/4.png";
import cauliflower from "../../images/make-balanced-bowl/step3/3.png";
import mushroom from "../../images/make-balanced-bowl/step3/10.png";

import Calories from "./component/calories/CaloriesComponent";

const curry_carbohydrates = {
  header: `url(${line})`,
  left_image: `url(${palm})`,
  right_image: `url(${noddle_1})`,
  left_title: "a palm size",
  right_title: "MAGGI® 2-Minute Curry Noodles",
  header_title: "carbohydrates",
  color: "#AF3837",
};

const curry_protein = {
  header: `url(${line})`,
  left_image: `url(${fistful})`,
  right_image_1: `url(${chicken})`,
  right_image_2: `url(${egg})`,
  left_title: "a fistful",
  right_title_1: "Chicken Breast (boiled and pulled thinly)",
  right_title_2: "Hard-boiled Egg",
  header_title: "Protein",
  color: "#AF3837",
};

const curry_vegetables = {
  header: `url(${line})`,
  left_image: `url(${handful})`,
  right_image_1: `url(${mustard})`,
  right_image_2: `url(${carrot})`,
  left_title: "a handful",
  right_title_1: "Mustard Leaf/Sawi",
  right_title_2: "Carrot (sliced thinly)",
  header_title: "Vegetables",
  color: "#AF3837",
};

const chicken_carbohydrates = {
  header: `url(${line2})`,
  left_image: `url(${palm})`,
  right_image: `url(${noddle_2})`,
  left_title: "a palm size",
  right_title: "MAGGI® 2-Minute Chicken Noodles",
  header_title: "carbohydrates",
  color: "#7DA03E",
};

const chicken_protein = {
  header: `url(${line2})`,
  left_image: `url(${fistful})`,
  right_image_1: `url(${chicken})`,
  right_image_2: `url(${egg})`,
  left_title: "a fistful",
  right_title_1: "Chicken Breast (sliced thinly)",
  right_title_2: "Hard-boiled Egg",
  header_title: "Protein",
  color: "#7DA03E",
};

const chicken_vegetables = {
  header: `url(${line2})`,
  left_image: `url(${handful})`,
  right_image_1: `url(${bokchoi})`,
  right_image_2: `url(${carrot})`,
  left_title: "a handful",
  right_title_1: "Bok Choy",
  right_title_2: "Carrot (sliced)",
  header_title: "Vegetables",
  color: "#7DA03E",
};

const tomyum_carbohydrates = {
  header: `url(${line3})`,
  left_image: `url(${palm})`,
  right_image: `url(${noddle_3})`,
  left_title: "a palm size",
  right_title: "MAGGI® 2-Minute Tom Yam Noodles",
  header_title: "carbohydrates",
  color: "#5E3266",
};

const tomyum_protein = {
  header: `url(${line3})`,
  left_image: `url(${fistful})`,
  right_image_1: `url(${prawn})`,
  right_image_2: `url(${squid})`,
  left_title: "a fistful",
  right_title_1: "Prawn",
  right_title_2: "Squid",
  header_title: "Protein",
  color: "#5E3266",
};

const tomyum_vegetables = {
  header: `url(${line3})`,
  left_image: `url(${handful})`,
  right_image_1: `url(${cauliflower})`,
  right_image_2: `url(${mushroom})`,
  left_title: "a handful",
  right_title_1: "Cauliflower",
  right_title_2: "Straw Mushrooms",
  header_title: "Vegetables",
  color: "#5E3266",
};

export default class DeliciousRecipiesComponent extends React.PureComponent {
  state = {};

  render() {
    return (
      <>
        <div className="delicious-recipes" id="delicious-recipes">
          <h1>Delicious Recipes</h1>
          <div className="columns custom-row">
            <div className="column is-4" style={{ position: "relative" }}>
              <div className="delicious-recipes_kari-box">
                <div className="delicious-recipes-header">
                  <span>MAGGI® 2-Minute Noodles</span>
                  <h1>Curry</h1>
                </div>
                <Calories data={curry_carbohydrates} />
                <Calories data={curry_protein} multiple />
                <Calories data={curry_vegetables} multiple />
              </div>
              <img className="delecious-bowl" src={base1} alt="" />
            </div>
            <div className="column is-4" style={{ position: "relative" }}>
              <div className="delicious-recipes_ayam-box">
                <div className="delicious-recipes-header">
                  <span>MAGGI® 2-Minute Noodles</span>
                  <h1>Chicken</h1>
                </div>
                <Calories data={chicken_carbohydrates} />
                <Calories data={chicken_protein} multiple />
                <Calories data={chicken_vegetables} multiple />
              </div>
              <img className="delecious-bowl" src={base2} alt="" />
            </div>
            <div className="column is-4" style={{ position: "relative" }}>
              <div className="delicious-recipes_tomyum-box">
                <div className="delicious-recipes-header">
                  <span>MAGGI® 2-Minute Noodles</span>
                  <h1>Tom Yam</h1>
                </div>
                <Calories data={tomyum_carbohydrates} />
                <Calories data={tomyum_protein} multiple />
                <Calories data={tomyum_vegetables} multiple />
              </div>
              <img className="delecious-bowl" src={base3} alt="" />
            </div>
          </div>
          <Link to="/make-balanced-bowl">
            <button className="btn btn-primary button-responsive">
              Customise your own Balanced Bowl
            </button>
          </Link>
        </div>
      </>
    );
  }
}
