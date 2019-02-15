import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button.component';


describe('Button', () => {
  it('should render a button', () => {
    const tree = renderer.create(<Button buttonText="press" onClick={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call the passed function', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Button buttonText="press" onClick={mockClick} />);
    wrapper.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});
