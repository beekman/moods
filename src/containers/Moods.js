import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import moodReducer from '../reducers/moodReducer';
import { getFace } from '../selectors/moodSelectors';

const Moods = () => {
  const initialState = {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  };

  const [moodState, dispatch] = useReducer(moodReducer, initialState);
  const face = getFace(moodState);

  return (
    <>
      <Controls dispatch={dispatch} />
      <Face emoji={face} />
    </>
  );
};

export default Moods;
