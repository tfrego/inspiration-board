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
          const newCard = {
            ...card.card,
          }
          return newCard;
        })
        this.setState({cards: cards});
        console.log(this.state);
      })
  }

  deleteCard = (cardId) => {
    console.log(cardId);
    axios.delete(`${this.props.cardUrl}${cardId}`)
      .then( (response) => {
        console.log(response);
        const cards = this.state.cards;

        const card = cards.find( (card) => {
          return card.id === cardId;
        })

        cards.splice( cards.indexOf(card), 1 );

        this.setState({cards: cards})
      })
      .catch( (error) => {
        this.setState({
          errorMessage: `Failure ${error.message}`,
        })
      })
  }

  addCard = (newCard) => {
    console.log(newCard);
    const apiPayLoad = {
      text: newCard.text,
      emoji: newCard.emoji,
    }

    axios.post(this.state.boardUrl, apiPayLoad)
      .then( (response) => {
        console.log(response);
        const myNewCard = response.data;
        console.log(myNewCard);

        const cards = this.state.cards;
        cards.push(myNewCard.card);

        this.setState({cards: cards});
        console.log(this.state)
      })
      .catch( (error) => {
        this.setState({
          errorMessage: `Failure ${error.message}`,
        })
      })
  }

  render() {
    const cardCollection = this.state.cards.map((card, i) => {
      return <Card
              key={card.id}
              {...card}
              deleteCardCallback={this.deleteCard}
              />
    })
    return (
      <section>
        <NewCardForm addCardCallback={this.addCard} />
        <div className="board">
          {cardCollection}
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  boardUrl: PropTypes.string.isRequired,
  cardUrl: PropTypes.string,
  boardName: PropTypes.string.isRequired,
};

export default Board;
