import counterReducer from './Counter.reducer';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../Action/Counter.actions';

describe('counterReducer', () => {
  it('should return initial state when state is undefined and action is empty', () => {
    expect(counterReducer(undefined, {})).toEqual({
      count: 0,
    });
  });
  it('should return the count value of state incremented by one', () => {
    expect(counterReducer(undefined, { type: INCREMENT_COUNTER })).toEqual({
      count: 1,
    });
  });
  it('should return the count value of state incremented by one', () => {
    const testCount = 9;
    expect(counterReducer({ count: testCount }, { type: DECREMENT_COUNTER })).toEqual({
      count: (testCount - 1),
    });
  });
});
