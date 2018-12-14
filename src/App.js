import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          boardUrl="https://inspiration-board.herokuapp.com/boards/"
          cardUrl="https://inspiration-board.herokuapp.com/cards/"
          boardName="Trang"
          />
      </section>
    );
  }
}

export default App;
