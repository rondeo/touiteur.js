import React, { Component } from 'react';
import Header from './components/Header';
import SendMessagefrom from './components/SendMessageform';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <Header />

        }


        {<SendMessagefrom />}
        <div className="contenair">
          
          {<TouitContainer />}
          {<Trending />}

        </div>



      </div>
    );
  }
}










export default App;
