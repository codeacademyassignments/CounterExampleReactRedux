import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Counter from './Counter.component';


// use  before each
describe('Counter', () => {
  it('should render a Counter', () => {
    const tree = renderer.create(<Counter counterValue={0} incrementCounter={jest.fn()} decrementCounter={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });
  it('should pass counterValue to p tag', () => {
    const wrapper = shallow(<Counter counterValue={1} incrementCounter={jest.fn()} decrementCounter={jest.fn()} />);
    expect(wrapper.find('.counterValue').text()).toEqual('Counter:1');
  });
  it('should pass increment and decrement function as props to button', () => {
    const incrementMock = jest.fn();
    const decrementMock = jest.fn();
    const wrapper = shallow(<Counter counterValue={0} incrementCounter={incrementMock} decrementCounter={decrementMock} />);
    expect(wrapper.find('[buttonText="ADD"]').props().onClick).toEqual(incrementMock);
    expect(wrapper.find('[buttonText="MINUS"]').props().onClick).toEqual(decrementMock);
  });
});
