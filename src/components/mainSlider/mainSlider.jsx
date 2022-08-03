import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import Countdown from "../countdown/countdown";
import RockBanner from "../../assets/images/slider/Rock-BR.png";
import TokenDetailBanner from "../../assets/images/slider/The-token-with-an-attitude-1.png";
import Fingers from "../../assets/images/slider/Fingers-7.png";
class MainSlider extends Component {
  render() {
    return (
      <div className="slider-area">
        <div className="elementor-background-overlay"></div>

        <div className="carousel">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <img src={RockBanner} className={"animate__animated animate__heartBeat"} alt="Rock" />
              </Col>
              <Col lg={12} md={12} sm={12} className="col-xs-12" style={{marginTop:'30px', marginBottom:'150px'}}>
                <img src={TokenDetailBanner} className={"animate__animated animate__tada"} alt="The token with an attitude." />
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                // className="col-xs-12 hidden-xs hidden-sm"
              >
                <h6 className="ready-rock">Are you ready to rock?</h6>
                <img src={Fingers} alt="Fingers" />
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                // className="col-xs-12 hidden-xs hidden-sm"
              >
                <Countdown
                  timeTillDate="9 5 2021, 9:30 am"
                  timeFormat="MM DD YYYY, h:mm a"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default MainSlider;
