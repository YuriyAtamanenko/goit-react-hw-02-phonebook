import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
