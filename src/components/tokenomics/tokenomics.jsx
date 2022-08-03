import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useCountUp } from "react-countup";
import { GiStopwatch, GiCrane, GiZigzagLeaf } from "react-icons/gi";
import {RiRefund2Line} from "react-icons/ri";
import {SiCashapp} from "react-icons/si";
import {HiUserGroup} from "react-icons/hi";
import {ImShield} from "react-icons/im";
import TOKENOMICS from "../../assets/images/tokenomics/TOKENOMICS.png";
import Followers from "../../assets/images/tokenomics/Followers.png";
import $ from "jquery";
let started = false;
const Tokenomics = () => {
  const { countUp: stake, start: stakeStart } = useCountUp({
    start: 0,
    end: 75,
    delay: 100,
    duration: 3.5,
    suffix: " %",
  });
  const { countUp: develop, start: developStart } = useCountUp({
    start: 0,
    end: 15,
    delay: 100,
    duration: 3.5,
    suffix: " %",
  });
  const { countUp: market, start: marketStart } = useCountUp({
    start: 0,
    end: 10,
    delay: 100,
    duration: 3.5,
    suffix: " %",
  });
  $(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 0) {
      $(".wd_scroll").each(function (i) {
        if (!started && i == 3 && $(this).position().top <= windscroll + 50) {
          stakeStart();
          developStart();
          marketStart();
          started = true;
        }
      });
    }
  });
  return (
    <div id="tokenomics" className="wd_scroll_wrap wd_scroll">
      <section className="tokenomics-area section">
        <div
          className="elementor-shape elementor-shape-bottom"
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 10"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M350,10L340,0h20L350,10z"
            ></path>
          </svg>{" "}
        </div>
        <Row>
          <div className="mr-b30">
            <img src={TOKENOMICS} alt="Tokenomics" />
          </div>
          <Col lg={4} md={4} sm={12} className="col-xs-12">
            <h2 className="elementor-heading-title red">
              Initial Supply Distribution
            </h2>
            <p>Total Supply: 100M</p>
            <img
              src={Followers}
              alt="Followers"
              style={{ padding: "2px 10px" }}
            />
          </Col>
          <Col lg={4} md={4} sm={12} className="col-xs-12">
            <h2 className="elementor-heading-title gold">Low Emission Rate</h2>
            <p className="mr-b70">
              1 RCK / 1 Block, reduced by 3% every 9,600 blocks until 0.1 RCK /
              1 Block
            </p>
            <div className={"counter mr-t90"}>{stake}</div>
            <div className="counter-description mr-t30">
              STAKING & FARMING REWARDS
            </div>
            <div className={"counter mr-t90"}>{develop}</div>
            <div className="counter-description mr-t30">DEVELOPMENT</div>
            <div className={"counter mr-t90"}>{market}</div>
            <div className="counter-description mr-t30">Marketing</div>
          </Col>
          <Col lg={4} md={4} sm={12} className="col-xs-12">
            <Col  className="visible-xs visible-sm" style={{ textAlign: "center" }}>
              <p style = {{height: 50}}></p>
            </Col>
            <h2 className="elementor-heading-title red">Key Features</h2>
            <p className="mr-b70">
              Rock will have many features to sustain the ecosystem
            </p>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <div className="elementor-icon">
                  <GiStopwatch />
                </div>
                <div className="elementor-widget-container">
                  <p>Auto Burning Mechanism</p>
                </div>
                <div className="elementor-icon">
                  <HiUserGroup />
                </div>
                <div className="elementor-widget-container">
                  <p>Deposit Fee Redistribution</p>
                </div>
                <div className="elementor-icon">
                  <GiZigzagLeaf />
                </div>
                <div className="elementor-widget-container">
                  <p>Harvest Lock Up</p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <div className="elementor-icon">
                  <RiRefund2Line />
                </div>
                <div className="elementor-widget-container">
                  <p>Auto LP – Liquidity Lock</p>
                </div>
                <div className="elementor-icon">
                  <GiCrane />
                </div>
                <div className="elementor-widget-container">
                  <p>Extraction Fee Redistribution</p>
                </div>
                <div className="elementor-icon">
                  <ImShield />
                </div>
                <div className="elementor-widget-container">
                  <p>Anti – Hater Protection</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Tokenomics;