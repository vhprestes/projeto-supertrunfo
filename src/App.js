import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    image: '',
    rare: '',
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardTrunfo: false,
    cards: [],
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const vall = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: vall }), this.validateSaveButton);
  };

  onSaveButtonClick = () => {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    const objeto = { name, description, attr1, attr2, attr3, rare, image };
    this.setState(({ cards }) => ({ cards: [...cards, objeto] }),
      () => {
        this.setState(() => ({
          name: '',
          description: '',
          attr1: 0,
          attr2: 0,
          attr3: 0,
          image: '',
          rare: 'normal',
        }));
      });
  };

  validateSaveButton = () => {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    let val = true;

    if (Number(attr1 + attr2 + attr3 > '210')) {
      val = false;
    }
    if (Number(attr1 > '90' || attr1 < 0)) val = false;
    if (Number(attr2 > '90' || attr2 < 0)) val = false;
    if (Number(attr3 > '90' || attr3 < 0)) val = false;

    if (name && description && image && rare && val) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      hasTrunfo,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
/* mandei */
