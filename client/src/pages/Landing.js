import React, { Component } from 'react';
import Header from '../components/Header';
import InfoCards from '../components/InfoCards';
import BlockQuote from '../components/BlockQuote';
import Footer from '../components/Footer';
import '../Styles/main.scss';

const landingQuote = "Don't be the antagonist of your own story.";
class Landing extends Component {
  render() {
    return (
      <>
        <Header />
        <InfoCards />
        <BlockQuote quote={landingQuote} />
      </>
    );
  }
}

export default Landing;
