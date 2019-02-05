import React , {Component} from 'react';
import Button from '../Button';

class Counter extends Component{

  state = {
    count: this.props.initialValue,
  }
  increment = ()=>{
    // console.log('somethign');
    // console.log(this.state.count);
    //this.state.count = this.state.count+1;
    this.setState({count: this.state.count+1});
  }
  decrement = ()=>{
    console.log('minus');
    this.setState({count:this.state.count-1});
  }
  render(){
    
    //const counter =10;
    return (
      <div>
        <p>Counter:{this.state.count}</p>
      <div>
      <Button buttonText = "ADD" onClick={this.increment}/>
      <Button buttonText = "MINUS" onClick={this.decrement}/>
</div>
</div>
    )
}
}

export default Counter