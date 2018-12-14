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
      boardUrl: `${this.props.boardUrl}${this.props.boardName}/cards`,
    };
  }

  componentDidMount() {

    axios.get(this.state.boardUrl)
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
    axios.delete(`${this.props.cardUrl}${cardId}`)
      .then( (response) => {
        console.log(response);
        const {cards} = this.state;

        const card = cards.find( (card) => {
          return card.id === cardId;
        })

        cards.splice( cards.indexOf(card), 1 );

        this.setState({cards: cards})
      })

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
  boardUrl: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
