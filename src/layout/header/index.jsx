import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  useWalletModal,
  useModal,
  Button,
  Modal,
  LinkExternal,
} from "@pancakeswap-v3/uikit";
import { useWeb3React } from "@web3-react/core";
import logo from "assets/images/logo/logo.png";
import { FaRegChartBar, FaTelegram, FaTwitter ,FaTelegramPlane, FaReddit} from "react-icons/fa";
import { GiCutDiamond, GiStabbedNote } from "react-icons/gi";
import flag from "../../assets/images/icons/12.png";
import Config from "../../configure";
import $ from "jquery";
import useAuth from "hooks/useAuth";
import { connect } from "react-redux";
import { switchNetwork } from "redux/actions/network";
const Header = ({ network, switchNetwork }) => {
  const [navMenuMobile, setNavMenuMobile] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const { account } = useWeb3React();
  const onConnect = (arg) => () => {
    switchNetwork(arg);
    modals[arg].onPresentConnectModal();
  };
  let networkModal = (
    <Modal title={"Select a network"} onDismiss={() => { }}>
      <Button variant="primary" onClick={onConnect(56)} width="100%">
        Binance Smart Chain
      </Button>
      <br />
      {/*<Button variant="primary" onClick={onConnect(3)} width="100%">
        Ropsten Testnet
      </Button>
      <br /> */}
      <Button variant="primary" onClick={onConnect(137)} width="100%">
        Matic
      </Button>
      <br />
      {/* <Button variant="primary" onClick={onConnect(80001)} width="100%">
        Matic Testnet
      </Button> */}
    </Modal>
  );
  const [onNetworkModal] = useModal(networkModal);
  const auths = {
    56: useAuth(56),
    3: useAuth(3),
    137: useAuth(137),
    80001: useAuth(80001),
  };
  const modals = {
    56: useWalletModal(auths["56"].login, auths["56"].logout, account, 56),
    3: useWalletModal(auths["3"].login, auths["3"].logout, account, 3),
    137: useWalletModal(auths["137"].login, auths["137"].logout, account, 137),
    80001: useWalletModal(
      auths["80001"].login,
      auths["80001"].logout,
      account,
      80001
    ),
  };

  let mount;
  const toggleNavMenu = () => {
    setNavMenuMobile(!navMenuMobile);
  };
  const handleScroll = () => {
    if (mount) setScroll(window.scrollY);
  };

  useEffect(() => {
    mount = true;
    const el = document.querySelector(".gc_main_menu_wrapper");
    setTop(el.offsetTop + 700);
    setHeight(el.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > top
      ? (document.body.style.paddingTop = `${height}px`)
      : (document.body.style.paddingTop = "0");
    return () => {
      mount = false;
    };
  }, []);

  $(document).ready(() => {
    $('.wd_single_index_menu ul li a[href^="#"]').bind(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        var $anchor = $(this);
        if ($(window).width() > 991) {
          var headerH = "60";
        } else {
          headerH = "56";
        }
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top - headerH + "px",
            },
            800
          );
      }
    );
    // $(window).scroll(function () {
    //   var windscroll = $(window).scrollTop();
    //   var target = $(".wd_single_index_menu ul li");
    //   if (windscroll >= 0) {
    //     $(".wd_scroll").each(function (i) {
    //       if ($(this).position().top <= windscroll + 90) {
    //         target.removeClass("active");
    //         // target.eq(i).addClass("active");
    //       }
    //     });
    //   } else {
    //     target.removeClass("active");
    //     $(".wd_single_index_menu ul li:first").addClass("active");
    //   }
    // });
  });
  let navigation = (
    <ul>
      <li>
        <a className="nav-link" href="#default">
          Home
        </a>
      </li>
      <li>
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link" href="#features">
          Features
        </a>
      </li>
      <li>
        <a className="nav-link" href="#tokenomics">
          Tokenomics
        </a>
      </li>
      <li>
        <a className="nav-link" href="#road_map">
          Road Map
        </a>
      </li>
      <li>
        <a className="nav-link" href="#tokens">
          ICO
        </a>
      </li>
    </ul>
  );
  return (
    <div id="default" className="wd_scroll_wrap wd_scroll">
      <header
        className={`gc_main_menu_wrapper ${scroll > top ? "menu_fixed animated fadeInDown" : ""
          }`}
      >
        <Container fluid>
          <Row>
            <Col className="col-xs-5" sm={12} md={4} lg={4}>
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
            <Col lg={8} md={8} sm={12} className="col-xs-7">
              <div className="menu-area hidden-xs">
                <nav className="wd_single_index_menu btc_main_menu">
                  {navigation}
                </nav>
                <div className="login-btn">
                  {account ? (
                    <button
                      className="btn-wallet"
                      onClick={modals[network].onPresentAccountModal}
                    >
                      {account.substr(0, 4) +
                        "..." +
                        account.substr(account.length - 4, 4)}
                    </button>
                  ) : (
                    <button className="btn-wallet" onClick={onNetworkModal}>
                      Connect Wallet
                    </button>
                  )}
                </div>
              </div>
              <div className="rp_mobail_menu_main_wrapper visible-xs">
                <div className="row">
                  <div className="col-xs-12">
                      {account ? (
                        <button
                          className="btn-wallet"
                          onClick={modals[network].onPresentAccountModal}
                        >
                          {account.substr(0, 4) +
                            "..." +
                            account.substr(account.length - 4, 4)}
                        </button>
                      ) : (
                        <button className="btn-wallet" onClick={onNetworkModal}>
                          Connect Wallet
                        </button>
                      )}
                    <div id="toggle" onClick={toggleNavMenu}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 31.177 31.177"
                        space="preserve"
                        width="25px"
                        height="25px"
                      >
                        <g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                              fill="#7d3206"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                              fill="#7d3206"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                              fill="#7d3206"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                              fill="#7d3206"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                              fill="#7d3206"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  id="sidebar"
                  style={{
                    left: navMenuMobile ? 0 : "-300px",
                    transition: "all 0.5s linear",
                  }}
                >
                  <h1>
                    <Link to={Config.defaultPath}>Rock token</Link>
                  </h1>
                  <div onClick={toggleNavMenu} id="toggle_close">
                    &times;
                  </div>
                  <div id="cssmenu" className="wd_single_index_menu">
                    {navigation}
                  </div>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  network: state.network.chainId,
});

const mapDispatchToProps = (dispatch) => ({
  switchNetwork: (chainId) => dispatch(switchNetwork(chainId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
