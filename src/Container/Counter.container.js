import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../Action/Counter.actions';
import Counter from '../Components/Counter/Counter.component';

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => {
    dispatch(incrementCounter());
  },
  decrementCounter: () => {
    dispatch(decrementCounter());
  },
});

const mapStateToProps = state => ({
  counterValue: state.count,
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;
