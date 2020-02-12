import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';
import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from '../../actions/moodActions';

const Controls = ({ dispatch }) => {
  return (
    <section className={styles.Controls}>
      <button onClick={() => dispatch(drinkCoffee())}>Drink Coffee</button>
      <button onClick={() => dispatch(eatSnack())}>Snack</button>
      <button onClick={() => dispatch(takeNap())}>Nap</button>
      <button onClick={() => dispatch(study())}>Study</button>
    </section>
  );
};

Controls.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Controls;
