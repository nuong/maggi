import React from 'react';
import './styles.scss';

export default class CaloriesComponent extends React.PureComponent {
  state = {}
  render() {
    const { data, multiple } = this.props;

    return(
      <>
        <div className="delicious-recipes-calories">
          <div className="delicious-recipes-calories_header" style={{ background: data.header}}>
            <span style={{ color: data.color, fontFamily:"AvenirNext"}}>{data.header_title}</span>
          </div>
          <div className="delicious-recipes-calories_body">
            <div className="delicious-recipes-calories_body-left">
              <div className="caloiries" style={{ background: data.left_image }}></div>
              <span style={{ color: "#72553C", fontFamily: "AvenirNext" }}>{data.left_title}</span>
            </div>
            <div className={`delicious-recipes-calories_body-right ${multiple ? 'multiple' : ''}`} >
              {
                !multiple ?
                <>
                  <div className="noodle" style={{ background: data.right_image }}></div>
                  <p>{data.right_title}</p>
                </> :
                <>
                  <div className="columns is-gapless ">
                    <div className="column is-6">
                      <div className="food-item" style={{ background: data.right_image_1 }}></div>
                      <p style={{ padding: '0' }}>{data.right_title_1}</p>
                    </div>
                    <div className="column is-6">
                      <div className="food-item" style={{ background: data.right_image_2 }}></div>
                      <p style={{ padding: '0' }}>{data.right_title_2}</p>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}