import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt="Nome da carta" data-testid="image-card" />
        <h4 data-testid="description-card">{cardDescription}</h4>
        <h6 data-testid="attr1-card">{cardAttr1}</h6>
        <h6 data-testid="attr2-card">{cardAttr2}</h6>
        <h6 data-testid="attr3-card">{cardAttr3}</h6>
        <h6 data-testid="rare-card">{cardRare}</h6>
        <h6>{cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}</h6>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
