import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const URL = 'https://inspiration-board.herokuapp.com/boards/Trang/cards';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        const cards = response.data.map((card) => {
          console.log(card.card);
          const newCard = {
            ...card.card,
          }
          return newCard;
        })
        this.setState({cards: cards});
      })
  }

  render() {
    const cardCollection = this.state.cards.map((card, i) => {
      return <Card key={card.id} text={card.text} emoji={card.emoji} />
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
