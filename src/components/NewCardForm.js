import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    }
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};

    updatedState[field] = value;

    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text, emoji } = this.state;

    if (text === '' && emoji === '') return;

    this.props.addCardCallback(this.state);

    this.setState({
      text: '',
      emoji: '',
    })
  }

  render() {
    const getEmoji = (item) => (item && emoji.getUnicode(item));

    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">Add an inspiration</h3>
        <form className="new-card-form__form" onSubmit={this.onSubmit}>

            <label className="new-card-form__form-label" htmlFor="text">Text</label>
            <textarea className="new-card-form__form-textarea" name="text" onChange={this.onFormChange} value={this.state.text}></textarea>

            <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
            <select className="new-card-form__form-select" name="emoji"
              onChange={this.onFormChange} value={this.state.emoji}>
            {EMOJI_LIST.map((value, index) => <option key={index} value={value}>{getEmoji(value)}</option>)}
            </select>

          <input className="new-card-form__form-button" type="submit" name="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
