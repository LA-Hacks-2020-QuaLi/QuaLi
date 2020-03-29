import React from 'react';

import { Header } from './components/header'
import { Footer } from './components/footer';
import { Home } from './components/content/home';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Home/>
        <Footer/>
      </React.Fragment>
    );
  }
}