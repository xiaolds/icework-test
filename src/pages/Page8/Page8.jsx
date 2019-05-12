import React, { Component } from 'react';
import GeneralWidget from './components/GeneralWidget';
import Footer from './components/Footer';
import FeatureList from './components/FeatureList';
import FooterInfo from './components/FooterInfo';

export default class Page8 extends Component {
  static displayName = 'Page8';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page8-page">
        <GeneralWidget />
        <Footer />
        <FeatureList />
        <FooterInfo />
      </div>
    );
  }
}
