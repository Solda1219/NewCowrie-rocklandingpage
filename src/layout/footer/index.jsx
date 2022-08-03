import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FaRegChartBar, FaTelegram, FaTwitter, FaTelegramPlane, FaReddit } from "react-icons/fa";
import { GiCutDiamond, GiStabbedNote } from "react-icons/gi";

class Footer extends Component {
  constructor(props) {
    super(props)
    const date = new Date()
    this.year = date.getFullYear()
  }
  render() {
    return (
      <div className="wd_scroll_wrap">
        <footer className="foo-bot">
          <div className="footer-bottom">
            <Row className="pd-t40 pd-l10 pd-r10 pd-b80">
              <Col lg={4} md={4} sm={12} className="col-xs-12">
                <h4 className="elementor-heading-title">Follow Us on Social Media</h4>

                <div className="logo-area">
                  <ul>
                    <li className="slider_social_icon1">
                      <a href="http://www.twitter.com/RCKFinance" target="blank">
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="slider_social_icon2">
                      <a href="https://t.me/rockfinancechat" target="blank">
                        <FaTelegram />
                      </a>
                    </li>
                    <li className="slider_social_icon2">
                    <a href="https://t.me/rockfinance" target="blank">
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li className="slider_social_icon2">
                    <a href="https://www.reddit.com/r/RCKFinance" target="blank">
                      <FaReddit />
                    </a>
                  </li>
                    {/* <li className="slider_social_icon3">
                      <a href="https://dex.guru/token/0x77f2a1e63054c45093abcb0b83f16a0ce79b7018-bsc" target="blank">
                        <FaRegChartBar />
                      </a>
                    </li>
                    <li className="slider_social_icon4">
                      <Link to="#">
                        <GiCutDiamond />
                      </Link>
                    </li> 
                    <li className="slider_social_icon5">
                    <a href="https://whitepaper.pdf">
                      <GiStabbedNote />
                    </a>
                  </li> */}
                  </ul>
                </div>

              </Col>
              <Col lg={4} md={4} sm={4} xs={12}>
                <h2 className="elementor-heading-title">Interested in Partnerships?</h2>
                <h2 className="elementor-size-default">Marketing, IFO, AMA's, Listings, etc...<br />

                  Get in touch with us!</h2>
              </Col>
              <Col lg={4} md={4} sm={12} className="col-xs-12">
                <h4 className="elementor-heading-title">Sign up to receive the lastest news!
                  Email</h4>
                <input type="email" placeholder="Email"  />
                <button className="elementor-button elementor-size-md mr-t20">
                Subscribe
                </button>
              </Col>

            </Row>
            <Row className="the-last pd-t30 pd-b30 pd-l30 pd-r30">
              <p>© 2021 Rock Finance. All rights Reserved.</p>
            </Row>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;