import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import featureSolo from "../../assets/images/features/Solos W.png";
import featureDuo from "../../assets/images/features/Duos W.png";
import featureJame from "../../assets/images/features/Jam Sessions W.png";
import featureMosh from "../../assets/images/features/Mosh Pit W.png";
import featureEncore from "../../assets/images/features/Encore W.png";
import featureLottery from "../../assets/images/features/Lottery W.png";
import featureGame from "../../assets/images/features/Games W.png";
import featureBattle from "../../assets/images/features/Battle of the Bands W.png";
import featureRecording from "../../assets/images/features/Recording Studio W.png";
import {
  FaSyncAlt,
  FaHeart,
  FaShoppingCart,
  FaUniversity,
  FaGamepad,
  FaMusic,
} from "react-icons/fa";
import RockToken from "../../assets/images/features/Rock-Token-Black.png";
class Features extends Component {
  animating=(ele)=>{
    ele.target.classList.add("animate__infinite");
  }
  stopAnimating=(ele)=>{
    ele.target.classList.remove("animate__infinite");
  }
  render() {
    return (
      <div id="features" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">
          <div
            className="elementor-shape elementor-shape-top"
            data-negative="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 700 10"
              preserveAspectRatio="none"
              className=""
            >
              <path
                className="elementor-shape-fill"
                d="M350,10L340,0h20L350,10z"
              ></path>
            </svg>{" "}
          </div>
          <Row>
            <Col lg={4} md={4} sm={12} className="col-xs-12">
              <div className="contents">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <FaSyncAlt />
                  </span>
                </div>
                <h3>DEFLATIONARY</h3>
                <p>
                  Constant buybacks and burns to decrease the supply, therefore
                  increasing the token value.
                </p>
              </div>
              <div className="contents">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <FaHeart />
                  </span>
                </div>
                <h3>CHARITY & FUNDRAISING</h3>
                <p>
                  We believe in giving back! The Rock community will be helping
                  upcoming talent and non-profit organizations with donations to
                  help accelerate their growth.
                </p>
              </div>
              <div className="contents">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <FaShoppingCart />
                  </span>
                </div>
                <h3>NFT PLATFORM</h3>
                <p>
                  Create, upload, protect and sell your music, videos and art in
                  a copyright regulated environment.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="col-xs-12">
              <img
                onMouseEnter={this.animating}
                onMouseLeave={this.stopAnimating}
                src={RockToken}
                className="animate__animated animate__heartBeat animate__slow"
                alt="Rock Token"
              />
            </Col>
            <Col lg={4} md={4} sm={12} className="col-xs-12">
              <div className="contents">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <FaUniversity />
                  </span>
                </div>
                <h3>DECENTRALIZED FINANCE</h3>
                <p>
                  Join pools, farms, vaults and much more to make the most out
                  of your investments on the platform.
                </p>
              </div>
              <div className="contents">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <FaGamepad />
                  </span>
                </div>
                <h3>GAMES</h3>
                <p>
                  Poker, dice, roulette, slot machines and...maybe even a rock
                  based rhythm game will be part of the fun activities you will
                  be able to enjoy on our platform.
                </p>
              </div>
              <div className="contents">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <FaMusic />
                  </span>
                </div>
                <h3>MUSIC INDUSTRY</h3>
                <p>
                  Integrating the project with real-life uses is our top
                  priority. Future plans include live concerts, ticket sales,
                  exclusive partnerships and celebrity auctions.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default Features;
