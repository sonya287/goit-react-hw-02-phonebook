import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
