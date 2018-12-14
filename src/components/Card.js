import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    const getEmoji = (item) => (item && emoji.getUnicode(item));

    return (
      <div className="card card__content">
        <button type="button" onClick={() => this.props.deleteCardCallback(this.props.id)}>x</button>
        <p className="card__content-text">{this.props.text}</p>
        <p className="card__content-emoji">{getEmoji(this.props.emoji)}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
