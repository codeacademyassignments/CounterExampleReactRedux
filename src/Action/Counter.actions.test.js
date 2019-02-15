import { incrementCounter, decrementCounter } from './Counter.actions';

describe('incrementCounter', () => {
  it('should return INCREMENT_COUNTER action', () => {
    expect(incrementCounter().type).toEqual('INCREMENT_COUNTER');
  });
  it('should return INCREMENT_COUNTER action', () => {
    expect(incrementCounter().type).not.toEqual('increment_counter');
  });
});

describe('decrementCounter', () => {
  it('should return DECREMENT_COUNTER action', () => {
    expect(decrementCounter().type).toEqual('DECREMENT_COUNTER');
  });
  it('should return DECREMENT_COUNTER action', () => {
    expect(decrementCounter().type).not.toEqual('decrement_counter');
  });
});
