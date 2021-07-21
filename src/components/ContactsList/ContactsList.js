import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, deleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ name, id, number }) => (
      <li key={id} className={styles.item}>
        <span className={styles.item_name}>{name}</span>
        <span className={styles.item_number}>{number}</span>

        <button
          className={styles.button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsList;
