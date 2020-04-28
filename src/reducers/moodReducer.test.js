import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from '../actions/moodActions';
import reducer from './moodReducer';

describe('mood reducer tests', () => {
  it('updates state on DRINK_COFFEE selection', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });

  it('updates state on TAKE_NAP selection', () => {
    const action = takeNap();
    const initialState = { naps: 0 };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ naps: 1 });
  });

  it('updates state on EAT_SNACK selection', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snacks: 1 });
  });

  it('updates state on STUDY selection', () => {
    const action = study();
    const initialState = { studies: 0 };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ studies: 1 });
  });
});
