import React from 'react';

import { Header } from './components/header'
import { Footer } from './components/footer';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content">
          
        </div>
        <Footer />
      </div>
    );
  }
}