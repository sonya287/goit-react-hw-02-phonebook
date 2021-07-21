import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

class Form extends React.Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  getContactName = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.resetInput();
  };
  resetInput = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            className={styles.inputs}
            type="text"
            name="name"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.getContactName}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.inputs}
            type="tel"
            name="number"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.getContactName}
          />
        </label>
        <button type="submit" className={styles.button}>
          add contact
        </button>
      </form>
    );
  }
}
export default Form;
