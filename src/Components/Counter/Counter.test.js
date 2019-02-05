import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './index';
import {shallow} from 'enzyme';

describe('Counter',()=>{
  it('should render a Counter',()=>{
    const tree = renderer.create(<Counter initialValue = {-10}/>).toJSON();
    expect(tree).toMatchSnapshot();

  })
  it('should increment counter on click',()=>{
    const wrapper = shallow(<Counter initialValue={0} />);
    wrapper.instance().increment();
    expect(wrapper.instance().state.count).toEqual(1); 
  })
  it('should decrement counter on click',()=>{
    const wrapper = shallow(<Counter initialValue={0} />);
    wrapper.instance().decrement();
    console.log('done',wrapper.instance().props.initialValue);
    expect(wrapper.instance().state.count).toEqual(-1); 
  })
  it('should get initial value whatever is passed',()=>{
    const wrapper = shallow(<Counter initialValue={0} />);
    expect(wrapper.instance().state.count).toEqual(0); 
  })
})