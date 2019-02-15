import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import CounterContainer from './Counter.container';
import Counter from '../Components/Counter/Counter.component';

const mockDispatch = jest.fn();

const storeFake = passedState => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: mockDispatch,
  getState: () => passedState,
});
const store = storeFake({});

describe('Counter Container', () => {
  it('Snapshot should match with old snap', () => {
    const render = renderer.create(<Provider store={store}><CounterContainer /></Provider>);
    expect(render).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    const wrapper = mount(<Provider store={store}><CounterContainer /></Provider>);
    const counterContainer = wrapper.find(CounterContainer);
    const counterComponent = counterContainer.find(Counter);
    xit('should dispatch incrementCounter action when incrementCounter called', () => {
      // const wrapper = shallow(<Provider store={store}><CounterContainer /></Provider>);
      wrapper.mapDispatchToProps(mockDispatch).incrementCounter();
      expect(mockDispatch).toHaveBeenCalledWith('incrementCounter()');
    });
    xit('should dispatch decrementCounter action when decrementCounter called', () => {
      // const wrapper = shallow(<Provider store={store}><CounterContainer /></Provider>);
      wrapper.instance().mapDispatchToProps().incrementCounter();
      expect(mockDispatch).toHaveBeenCalledWith('incrementCounter()');
    });
    it('CounterContainer and Counter both should be rendered', () => {
      expect(counterContainer.length).toBeTruthy();
      expect(counterComponent.length).toBeTruthy();
    });
    it('mapStateToProps: should map state to props', () => {
      const expectedAttributes = ['incrementCounter', 'decrementCounter'];
      expect(Object.keys(counterComponent.props())).toEqual(expect.arrayContaining(expectedAttributes));
    });
    it('mapDispatchToProps: should map dispatch to props', () => {
      const expectedAttributes = ['counterValue'];
      expect(Object.keys(counterComponent.props())).toEqual(expect.arrayContaining(expectedAttributes));
    });
  });
});
