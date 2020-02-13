import { DRINK_COFFEE, drinkCoffee, EAT_SNACK, eatSnack, TAKE_NAP, takeNap, STUDY, study } from './moodActions';

describe('emoji actions', () => {
  it('drinks coffee', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('eats a snack', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('takes a nap', () => {
    const action = takeNap();

    expect(action).toEqual({
      type: TAKE_NAP
    });
  });
  it('studies', () => {
    const action = study();

    expect(action).toEqual({
      type: STUDY
    });
  });
});
