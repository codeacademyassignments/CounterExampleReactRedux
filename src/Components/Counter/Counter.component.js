import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';

// class Counter extends Component{
// constructor(props){
//   super(props);
//   console.log('conso');
// }


// static getDerivedStateFromProps(props,state)
// {
//   console.log('done',props);
//   return state;
// }
// state = {
//   count: this.props.initialValue,
// }
// increment = ()=>{
//   this.setState({count: this.state.count+1});
// }
// decrement = ()=>{
//   console.log('minus');
//   this.setState({count:this.state.count-1});
// }
const Counter = ({ counterValue, incrementCounter, decrementCounter }) => (
  <div>
    <p className="counterValue">
Counter:
      {counterValue}
    </p>
    <div>
      <Button buttonText="ADD" onClick={incrementCounter} />
      <Button buttonText="MINUS" onClick={decrementCounter} />
    </div>
  </div>
);

Counter.propTypes = {
  counterValue: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
};
export default Counter;
