import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Guitar from "../../assets/images/roadmap/Guitar-neck-3.png";
import { GiLightBulb, GiOldMicrophone, GiFireFlower } from "react-icons/gi";
import { GrDiamond } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
class Roadmap extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div id="road_map" className="wd_scroll_wrap wd_scroll">
        <section className="road_map-area section" style={{ paddingBottom: "0", height: "calc(100vw + 121px)" }}>
          <Row className="hidden-xs">
            <Col lg={4} md={4} sm={6} className="col-xs-12">
              <div className="road_map-left-margin-top" >
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiLightBulb />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q2 2021</h2>
                    <p>May – June</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Project Ideation</li>
                      <li>Tokenomics</li>
                      <li>Social Media Platform Creation</li>
                      <li>Core Team Recruitment</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="road_map-left-margin-top" >
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <IoRocketOutline />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q3 2021</h2>
                    <p>August – September</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Platform Launch</li>
                      <li>Swap/Exchange</li>
                      <li>Staking and Farming</li>
                      <li>Referral Program</li>
                      <li>Marketing Campaigns</li>
                      <li>Partnerships</li>
                      <li>CMC/CG/ DAppRadar Listings</li>
                      <li>Initial Audits</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="road_map-left-margin-top" >
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiOldMicrophone />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>2022</h2>
                    <p>January – June</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Shop</li>
                      <li>NFT Platform</li>
                      <li>Partnerships with Artists</li>
                      <li>Live Performances</li>
                      <li>Charity Auctions</li>
                      <li>Band/ Musician Crowd Funding</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4} md={4}  className="hidden-xs hidden-sm" style={{ textAlign: "center" }}>
              <img src={Guitar} alt="Guitar" style={{ width: "auto", height: "100%" }} />
            </Col>
            <Col lg={4} md={4} sm={6} className="col-xs-12">
              <div className="road_map-right-margin-top-small" >
                <Row>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiFireFlower />
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>ICO Website</li>
                      <li>ICO Listings</li>
                      <li>Pre-Sale ICO Launch</li>
                      <li>ICO Offerings to Jazz Holders</li>
                    </ul>
                  </Col>

                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q3 2021</h2>
                    <p>July</p>
                  </Col>
                </Row>
              </div>
              <div className="road_map-right-margin-top-large" >
                <Row>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GrDiamond />
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Competitive Yield Farming</li>
                      <li>Time Sensitive Vaults</li>
                      <li>Games</li>
                      <li>Lottery</li>
                      <li>New Reward Token Amped</li>
                    </ul>
                  </Col>

                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q4 2021</h2>
                    <p>October – December</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="visible-xs">
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div style={{ marginTop: "50px" }}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiLightBulb />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q2 2021</h2>
                    <p>May – June</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Project Ideation</li>
                      <li>Tokenomics</li>
                      <li>Social Media Platform Creation</li>
                      <li>Core Team Recruitment</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "50px" }}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiFireFlower />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q3 2021</h2>
                    <p>July</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>ICO Website</li>
                      <li>ICO Listings</li>
                      <li>Pre-Sale ICO Launch</li>
                      <li>ICO Offerings to Jazz Holders</li>
                    </ul>
                  </Col>


                </Row>
              </div>
              <div style={{ marginTop: "50px" }}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <IoRocketOutline />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q3 2021</h2>
                    <p>August – September</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Platform Launch</li>
                      <li>Swap/Exchange</li>
                      <li>Staking and Farming</li>
                      <li>Referral Program</li>
                      <li>Marketing Campaigns</li>
                      <li>Partnerships</li>
                      <li>CMC/CG/ DAppRadar Listings</li>
                      <li>Initial Audits</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "50px" }}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GrDiamond />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q4 2021</h2>
                    <p>October – December</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Competitive Yield Farming</li>
                      <li>Time Sensitive Vaults</li>
                      <li>Games</li>
                      <li>Lottery</li>
                      <li>New Reward Token Amped</li>
                    </ul>
                  </Col>
                </Row>
              </div>

              <div style={{ marginTop: "50px" }}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiOldMicrophone />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>2022</h2>
                    <p>January – June</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>Shop</li>
                      <li>NFT Platform</li>
                      <li>Partnerships with Artists</li>
                      <li>Live Performances</li>
                      <li>Charity Auctions</li>
                      <li>Band/ Musician Crowd Funding</li>
                    </ul>
                  </Col>
                </Row>
              </div>

            </Col>

          </Row>
        </section>
        <div className="wd_scroll_wrap">
          <section className="video-des">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="deslidt"></div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default Roadmap;
