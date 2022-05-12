import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          {/* https://stackoverflow.com/questions/62306461/label-must-have-associated-control */}
          <input id="name-input" data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            id="description-input"
            data-testid="description-input"
            type="text"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input type="number" data-testid="attr1-input" name="attr1" />
        </label>
        <label htmlFor="attr1">
          Atributo 2
          <input type="number" data-testid="attr2-input" name="attr2" />
        </label>
        <label htmlFor="attr1">
          Atributo 3
          <input type="number" data-testid="attr3-input" name="attr3" />
        </label>
        <label htmlFor="image">
          Image
          <input type="text" data-testid="image-input" name="image" />
        </label>
        <label htmlFor="rare">
          Rarity:
          <select data-testid="rare-input" name="rare">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Trunfo:
          <input type="checkbox" data-testid="trunfo-input" name="trunfo" />
        </label>
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
