import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      url: `${this.props.url}${this.props.boardName}/cards`,
    };
  }

  componentDidMount() {

    axios.get(this.state.url)
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

  deleteCard = (cardId) => {
    console.log(cardId);

  }

  render() {
    const cardCollection = this.state.cards.map((card, i) => {
      return <Card
              key={card.id}
              {...card}
              deleteCardCallback={this.deleteCard}/>
    })
    return (
      <div className="board">
        {cardCollection}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
