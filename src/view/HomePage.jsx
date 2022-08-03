import React, { Component, Fragment } from 'react';
import About from '../components/about/about';
import Features from '../components/features/features';
import Tokenomics from '../components/tokenomics/tokenomics';
import Projects from '../components/projects/projects';
import Steps from '../components/steps/steps';
import Roadmap from '../components/roadMap/roadmap';
import Tokens from '../components/token/tokens';
import PressMedia from '../components/pressmedia/pressmedia';
import Subscribe from '../components/subscribe/subscribe';
import MainSlider from '../components/mainSlider/mainSlider';
import Currency from '../components/currency/currency';
import Blogs from '../components/blog/blog';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="wd_scroll_wrap">
          <MainSlider />
        </div>
        <About fill="#2C2E53" />
        <Features />
        <Tokenomics />
        <Roadmap fill="#2C2E53" />
        <div className="wd_scroll_wrap">
          <Tokens />
        </div>
       
      </Fragment>
    );
  }
}

export default HomePage;