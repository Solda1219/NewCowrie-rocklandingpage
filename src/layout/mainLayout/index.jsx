import React, { Fragment } from 'react';
import Header from '../../containers/templateConfig/header';
import ContentWrapper from './contentWrapper';
import Footer from '../footer';

const MainLayout = () => (
  <Fragment>
    <Header />
    <ContentWrapper />
    <Footer />
  </Fragment>
)

export default MainLayout;