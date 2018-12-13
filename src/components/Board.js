import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: CARD_DATA,
    };
  }

  componentDidMount() {
    console.log('COMPONENT MOUNTED');
    console.log(this.state);
  }

  render() {
    const cardCollection = this.state.cards.cards.map((card, i) => {
      return <Card key={i} text={card.text} emoji={card.emoji} />
    })
    return (
      <div className="board">
        {this.props.boardName}
        {cardCollection}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
