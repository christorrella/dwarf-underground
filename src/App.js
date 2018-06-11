import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Adspace from './Adspace';
import Clickbait from './Clickbait';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

        <main className="expanded row">

          <Article />

          <Adspace />

          <Clickbait />

        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
