import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';
import {shallow} from 'enzyme';


describe('Button',()=>{
  it('should render a button',()=>{
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should call the passed function',()=>{
    const wrapper = shallow(<Button buttonText='press' onClick = {jest.fn()}/>);
    //console.log(wrapper);
    wrapper.find('button').simulate('click');
    expect(wrapper.props().onClick).toHaveBeenCalled();
  })
})