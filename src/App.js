import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

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
    // cardTrunfo: false,
    cards: [],
    trunfo: false,
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
        const { trunfo } = this.state; /* testando */
        if (trunfo) {
          this.setState(() => ({ hasTrunfo: true }));
        }
      });
  };

  validateSaveButton = () => {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    let val = true;

    if (Number(attr1 + attr2 + attr3 > '210')) val = false;
    if (Number(attr1 > '90' || attr1 < 0)) val = false;
    if (Number(attr2 > '90' || attr2 < 0)) val = false;
    if (Number(attr3 > '90' || attr3 < 0)) val = false;

    if (name && description && image && rare && val) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
    console.log('xablau');
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
      // cardTrunfo,
      isSaveButtonDisabled,
      trunfo,
      cards,
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
          cardTrunfo={ trunfo }
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
          cardTrunfo={ trunfo }
          // hasTrunfo={ hasTrunfo }
        />
        <CardList saved={ cards } />
      </div>
    );
  }
}

export default App;
/* mandei */
